import { useEffect, useMemo, useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

const categoryOptions = [
  { id: "cover", label: "Cover Design" },
  { id: "logo", label: "Logo Design" },
  { id: "manipulation", label: "Manipulation Design" },
  { id: "print", label: "Print Design" },
  { id: "social", label: "Social Media Design" },
  { id: "thumbnail", label: "Thumbnail Design" },
];

const categorySet = new Set(categoryOptions.map((category) => category.id));

const createInitialUploads = () =>
  categoryOptions.reduce((accumulator, category) => {
    accumulator[category.id] = [];
    return accumulator;
  }, {});

const createInitialStatus = () =>
  categoryOptions.reduce((accumulator, category) => {
    accumulator[category.id] = { type: "", message: "" };
    return accumulator;
  }, {});

const createInitialUploading = () =>
  categoryOptions.reduce((accumulator, category) => {
    accumulator[category.id] = false;
    return accumulator;
  }, {});

const extractListFromPayload = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.uploads)) return payload.uploads;
  if (Array.isArray(payload?.items)) return payload.items;
  return [];
};

const normalizeCategory = (rawCategory, fallbackCategory) => {
  const value = String(rawCategory || fallbackCategory || "").toLowerCase().trim();
  if (!value) return fallbackCategory || "";
  if (categorySet.has(value)) return value;

  const aliasMap = {
    "cover design": "cover",
    coverdesign: "cover",
    "logo design": "logo",
    logodesign: "logo",
    "manipulation design": "manipulation",
    manipulationdesign: "manipulation",
    "print design": "print",
    printdesign: "print",
    "social media design": "social",
    socialmediadesign: "social",
    "thumbnail design": "thumbnail",
    thumbnaildesign: "thumbnail",
  };

  return aliasMap[value] || fallbackCategory || "";
};

const normalizeUploadItem = (item, fallbackCategory, index) => {
  const category = normalizeCategory(
    item?.category || item?.folder || item?.type,
    fallbackCategory
  );

  return {
    id:
      item?._id ||
      item?.id ||
      `${category || fallbackCategory || "upload"}-${Date.now()}-${index}`,
    category,
    src:
      item?.imageUrl ||
      item?.url ||
      item?.fileUrl ||
      item?.secure_url ||
      item?.path ||
      "",
    name: item?.title || item?.name || item?.filename || "Untitled image",
  };
};

const fetchUploadsByCategory = async (categoryId) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
  const candidates = [
    `${baseUrl}/uploads?category=${encodeURIComponent(categoryId)}`,
    `${baseUrl}/uploads/${encodeURIComponent(categoryId)}`,
    `${baseUrl}/uploads/category/${encodeURIComponent(categoryId)}`,
  ];

  for (const endpoint of candidates) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) continue;

      const payload = await response.json();
      const list = extractListFromPayload(payload);
      return list
        .map((item, index) => normalizeUploadItem(item, categoryId, index))
        .filter((item) => Boolean(item.src));
    } catch {
      // Try next endpoint.
    }
  }

  return [];
};

const ManageUploads = () => {
  const [uploadsByCategory, setUploadsByCategory] = useState(() =>
    createInitialUploads()
  );
  const [statusByCategory, setStatusByCategory] = useState(() =>
    createInitialStatus()
  );
  const [uploadingByCategory, setUploadingByCategory] = useState(() =>
    createInitialUploading()
  );
  const [openMenuImageId, setOpenMenuImageId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const acceptLabel = useMemo(() => "image/*", []);

  const totalImages = useMemo(
    () =>
      Object.values(uploadsByCategory).reduce(
        (count, images) => count + images.length,
        0
      ),
    [uploadsByCategory]
  );

  const updateStatus = (categoryId, status) => {
    setStatusByCategory((previous) => ({
      ...previous,
      [categoryId]: status,
    }));
  };

  const refreshSingleCategory = async (categoryId) => {
    const list = await fetchUploadsByCategory(categoryId);
    setUploadsByCategory((previous) => ({
      ...previous,
      [categoryId]: list,
    }));
  };

  const refreshAllCategories = async () => {
    setIsLoading(true);
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "";

    try {
      const response = await fetch(`${baseUrl}/uploads`);

      if (response.ok) {
        const payload = await response.json();
        const list = extractListFromPayload(payload)
          .map((item, index) => normalizeUploadItem(item, "", index))
          .filter((item) => Boolean(item.src));

        const grouped = createInitialUploads();
        for (const item of list) {
          const safeCategory = normalizeCategory(item.category, "");
          if (!safeCategory || !grouped[safeCategory]) continue;
          grouped[safeCategory].push(item);
        }
        setUploadsByCategory(grouped);
      } else {
        const groupedByFallback = createInitialUploads();
        await Promise.all(
          categoryOptions.map(async (category) => {
            groupedByFallback[category.id] = await fetchUploadsByCategory(
              category.id
            );
          })
        );
        setUploadsByCategory(groupedByFallback);
      }
    } catch {
      const groupedByFallback = createInitialUploads();
      await Promise.all(
        categoryOptions.map(async (category) => {
          groupedByFallback[category.id] = await fetchUploadsByCategory(category.id);
        })
      );
      setUploadsByCategory(groupedByFallback);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshAllCategories();
  }, []);

  useEffect(() => {
    const closeMenu = () => setOpenMenuImageId("");
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, []);

  const handleCategoryUpload = async (categoryId, event) => {
    const files = Array.from(event.target.files || []);
    event.target.value = "";

    if (files.length === 0) return;

    setUploadingByCategory((previous) => ({
      ...previous,
      [categoryId]: true,
    }));
    updateStatus(categoryId, { type: "", message: "" });

    const failedNames = [];

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "";

      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("category", categoryId);
        formData.append("title", file.name);

        const response = await fetch(`${baseUrl}/uploads`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          failedNames.push(file.name);
        }
      }

      await refreshSingleCategory(categoryId);

      if (failedNames.length > 0 && failedNames.length < files.length) {
        updateStatus(categoryId, {
          type: "error",
          message: `Some files failed: ${failedNames.join(", ")}.`,
        });
      } else if (failedNames.length === files.length) {
        updateStatus(categoryId, {
          type: "error",
          message: `Upload failed for: ${failedNames.join(", ")}.`,
        });
      } else {
        updateStatus(categoryId, {
          type: "success",
          message: `Uploaded ${files.length} file(s) successfully.`,
        });
      }
    } catch (error) {
      updateStatus(categoryId, {
        type: "error",
        message: error.message || "Something went wrong during upload.",
      });
    } finally {
      setUploadingByCategory((previous) => ({
        ...previous,
        [categoryId]: false,
      }));
    }
  };

  const handleDeleteImage = async (categoryId, imageId) => {
    if (!imageId) return;

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
      const response = await fetch(`${baseUrl}/uploads/${imageId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Delete failed. Please try again.");
      }

      await refreshSingleCategory(categoryId);
      updateStatus(categoryId, {
        type: "success",
        message: "Image deleted successfully.",
      });
    } catch (error) {
      updateStatus(categoryId, {
        type: "error",
        message: error.message || "Delete failed.",
      });
    } finally {
      setOpenMenuImageId("");
    }
  };

  const handleMenuTriggerClick = (event, menuId) => {
    event.stopPropagation();
    setOpenMenuImageId((previous) => (previous === menuId ? "" : menuId));
  };

  return (
    <div className="px-6 min-h-screen text-white pb-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]"
        >
          Manage Uploads
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-gray-400 text-lg"
        >
          Category-wise uploads with direct file selection and backend sync.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto rounded-3xl border border-gray-800 bg-[#130b25] px-5 sm:px-8 py-5 mb-8">
        <p className="text-sm text-gray-400">
          Total uploaded images:{" "}
          <span className="text-white font-semibold">{totalImages}</span>
        </p>
      </div>

      {isLoading && (
        <div className="max-w-7xl mx-auto mb-8 rounded-2xl border border-gray-800 bg-[#130b25] p-4 text-sm text-purple-200">
          Loading uploads from server...
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-12">
        {categoryOptions.map((category, categoryIndex) => {
          const images = uploadsByCategory[category.id];
          const categoryStatus = statusByCategory[category.id];
          const isUploading = uploadingByCategory[category.id];
          const inputId = `upload-input-${category.id}`;

          return (
            <motion.section
              key={category.id}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: categoryIndex * 0.06,
                ease: "easeOut",
              }}
              className="rounded-3xl border border-gray-800 bg-[#130b25] p-5 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {category.label}
                </h3>
                <p className="text-xs uppercase tracking-[0.18em] text-purple-300">
                  {images.length} item{images.length === 1 ? "" : "s"}
                </p>
              </div>

              {categoryStatus.message && (
                <div
                  className={`mb-5 rounded-xl border px-4 py-3 text-sm ${
                    categoryStatus.type === "success"
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                      : "border-rose-500/40 bg-rose-500/10 text-rose-200"
                  }`}
                >
                  {categoryStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {images.map((image) => {
                  const menuId = `${category.id}-${image.id}`;
                  return (
                    <motion.article
                      key={menuId}
                      initial={{ y: 16, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative rounded-2xl overflow-hidden border border-gray-800 bg-[#0b0617]"
                    >
                      <img
                        src={image.src}
                        alt={image.name}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-3">
                        <p className="text-sm text-gray-300 truncate">{image.name}</p>
                      </div>

                      <div className="absolute right-3 top-3">
                        <button
                          type="button"
                          aria-label="Image actions"
                          onClick={(event) => handleMenuTriggerClick(event, menuId)}
                          className="h-9 w-9 rounded-full border border-gray-700 bg-black/50 text-white text-xl leading-none hover:bg-black/70"
                        >
                          ...
                        </button>
                        {openMenuImageId === menuId && (
                          <div
                            onClick={(event) => event.stopPropagation()}
                            className="absolute right-0 mt-2 w-32 rounded-xl border border-gray-700 bg-[#140b28] p-2 shadow-lg"
                          >
                            <button
                              type="button"
                              onClick={() => handleDeleteImage(category.id, image.id)}
                              className="w-full rounded-lg px-3 py-2 text-left text-sm text-rose-300 hover:bg-rose-500/10"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.article>
                  );
                })}

                <div className="rounded-2xl border border-dashed border-purple-500/40 bg-[#0b0617] p-5 flex min-h-65">
                  <label
                    htmlFor={inputId}
                    className="flex flex-1 cursor-pointer flex-col items-center justify-center rounded-xl border border-transparent text-center transition-colors hover:border-purple-400/50"
                  >
                    <div className="h-11 w-11 rounded-full bg-purple-500/20 text-purple-200 text-2xl flex items-center justify-center">
                      +
                    </div>
                    <p className="mt-4 text-sm font-semibold text-white">
                      {isUploading ? "Uploading..." : "Upload Images"}
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      Click to choose files from your folder
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      JPG, PNG, WebP supported
                    </p>
                  </label>
                  <input
                    id={inputId}
                    type="file"
                    multiple
                    accept={acceptLabel}
                    onChange={(event) => handleCategoryUpload(category.id, event)}
                    className="hidden"
                  />
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};

export default ManageUploads;
