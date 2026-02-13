// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";

const LogoDesign = () => {
  return (
    <div className="text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]"
        >
          Logo Design
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Strong, timeless logos built to represent your brand with confidence.
        </motion.p>
      </div>
    </div>
  );
};

export default LogoDesign;