export const extractListFromPayload = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.uploads)) return payload.uploads;
  if (Array.isArray(payload?.items)) return payload.items;
  return [];
};

const normalizeUploadItem = (item, categoryId, index) => ({
  id: item?._id || item?.id || `${categoryId}-${Date.now()}-${index}`,
  src:
    item?.imageUrl ||
    item?.url ||
    item?.fileUrl ||
    item?.secure_url ||
    item?.path ||
    "",
  name: item?.title || item?.name || item?.filename || "Untitled image",
});

export const fetchUploadsByCategory = async (categoryId) => {
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
