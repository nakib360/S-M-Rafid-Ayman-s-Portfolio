// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";

const Help = () => {
    const services = [
        "Building strong and consistent brand visuals.",
        "Creating scroll-stopping social media content.",
        "Designing high-impact thumbnails and covers.",
        "Delivering clean, professional print and digital designs.",
        "Improving visual clarity and audience engagement."
    ];
    return (
        <div className="px-6 text-white">
            {/* Section Heading */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(192,132,252,0.8)] mb-6"
                >
                    What I Can Help You With?
                </motion.h2>
                <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
                >
                    Turning ideas into clean, effective, and impactful visuals that support both brand identity and real business goals.
                </motion.p>
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }} // stagger
                        whileHover={{
                            y: -5,
                            boxShadow: "0px 8px 25px rgba(147,51,234,0.3)",
                            transition: { duration: 0.2 },
                        }}
                        className={`
          bg-[#130b25] border border-gray-800 rounded-2xl p-6 flex items-center gap-4 
          hover:border-purple-500/40
          ${index >= 3 ? 'md:col-span-1.5 md:w-full mx-auto' : ''}
        `}
                    >
                        {/* Glowing Purple Dot */}
                        <div className="w-3 h-3 rounded-full bg-[#9333ea] shadow-[0_0_10px_#9333ea] shrink-0" />

                        <p className="text-gray-300 text-base md:text-lg font-medium">
                            {service}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>

    );
};

export default Help;