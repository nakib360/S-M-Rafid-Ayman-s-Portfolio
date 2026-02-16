import { useEffect, useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { fetchUploadsByCategory } from "./uploadsApi";

const CoverDesign = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchUploadsByCategory("cover");
        setImages(data);
      } catch (fetchError) {
        setError(fetchError.message || "Failed to load cover designs.");
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="text-white md:px-6 pb-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]"
        >
          Cover Design
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Eye-catching covers designed to instantly grab attention.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto">
        {loading && <p className="text-center text-purple-300">Loading designs...</p>}
        {!loading && error && <p className="text-center text-rose-300">{error}</p>}
        {!loading && !error && images.length === 0 && (
          <p className="text-center text-gray-400">No cover design uploaded yet.</p>
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

export default CoverDesign;


