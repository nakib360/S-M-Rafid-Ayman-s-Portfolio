// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";

const processes = [
  {
    id: "01",
    title: "DISCOVERY",
    description: "Understanding your goals, audience, and brand direction before designing anything."
  },
  {
    id: "02",
    title: "RESEARCH",
    description: "Market, competitor, and trend analysis to make informed design decisions."
  },
  {
    id: "03",
    title: "CONCEPT",
    description: "Translating ideas into strong visual concepts aligned with the strategy."
  },
  {
    id: "04",
    title: "DESIGN",
    description: "Crafting clean, modern visuals with attention to detail and usability."
  },
  {
    id: "05",
    title: "FEEDBACK",
    description: "Refining the design based on feedback to reach the best possible outcome."
  },
  {
    id: "06",
    title: "DELIVERY",
    description: "Final files delivered, optimized, and ready for real-world use."
  }
];

const Philosophy = () => {
  return (
    <div className="px-6 text-white">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(192,132,252,0.8)] mb-6"
        >
          My Design Process
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-gray-400 text-lg"
        >
          A clear, structured workflow that ensures every project delivers real impact.
        </motion.p>
      </div>

      {/* Process Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {processes.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{
              y: -5,
              boxShadow: "0px 8px 30px rgba(147,51,234,0.3)",
              transition: { duration: 0.2 },
            }}
            className="bg-[#130b25] border border-gray-800 rounded-2xl p-8 hover:border-purple-500/40"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#9333ea] font-bold text-lg">{item.id}</span>
              <span className="text-gray-500 font-bold text-lg">·</span>
              <h3 className="text-[#9333ea] font-bold tracking-widest text-sm uppercase">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>


  );
};

export default Philosophy;