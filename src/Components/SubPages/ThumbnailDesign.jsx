import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchUploadsByCategory } from "./uploadsApi";

const ThumbnailDesign = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchUploadsByCategory("thumbnail");
        setImages(data);
      } catch (fetchError) {
        setError(fetchError.message || "Failed to load thumbnail designs.");
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="text-white px-6 pb-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]"
        >
          Thumbnail Design
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          High-impact thumbnails optimized for clicks and visibility.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto">
        {loading && <p className="text-center text-purple-300">Loading designs...</p>}
        {!loading && error && <p className="text-center text-rose-300">{error}</p>}
        {!loading && !error && images.length === 0 && (
          <p className="text-center text-gray-400">No thumbnail design uploaded yet.</p>
        )}

        {!loading && !error && images.length > 0 && (
          <div className="columns-1 sm:columns-2 xl:columns-3 gap-6 [column-fill:balance]">
            {images.map((image, index) => (
              <motion.article
                key={`${image.id}-${index}`}
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.04 }}
                className="mb-6 break-inside-avoid rounded-2xl overflow-hidden border border-gray-800 bg-[#130b25]"
              >
                <img src={image.src} alt={image.name} className="w-full h-auto object-cover" />
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThumbnailDesign;




