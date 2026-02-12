// eslint-disable-next-line
import { AnimatePresence, motion } from "framer-motion";

const Reviews = () => {
    const testimonials = [
        {
            quote: "Outstanding work! The attention to detail in the logo design was impressive. They truly understood my brand vision and delivered beyond expectations.",
            name: "Mark Harrison",
            role: "CEO, TechVentures (USA)",
            initials: "MH",
        },
        {
            quote: "আমি উনার কাজে অনেক বেশি সন্তুষ্ট। লোগোটি খুবই প্রিমিয়াম হয়েছে এবং খুব অল্প সময়ের মধ্যে উনি ডিজাইনটি বুঝিয়ে দিয়েছেন। শুভকামনা রইল!",
            name: "Anika Tabassum",
            role: "E-commerce Owner (BD)",
            initials: "AT",
        },
        {
            quote: "My YouTube CTR skyrocketed after I started using these thumbnails! Professional, eye-catching, and high-quality work every single time.",
            name: "Sarah Jenkins",
            role: "Content Creator (UK)",
            initials: "SJ",
        },
        {
            quote: "অসাধারণ ডিজাইন সেন্স! সোশ্যাল মিডিয়া অ্যাডগুলোর জন্য যেমন ডিজাইন চেয়েছিলাম ঠিক তেমনই পেয়েছি। ভবিষ্যতে আবার কাজ করবো!",
            name: "Tanvir Rahman",
            role: "Marketing Manager, BD",
            initials: "TR",
        },
        {
            quote: "The social media strategy and graphics were a game-changer for my real estate business. Prompt communication and high-level creativity.",
            name: "Luca Moretti",
            role: "Real Estate Agent (Italy)",
            initials: "LM",
        },
        {
            quote: "উনার কালার চয়েস এবং ফন্ট সিলেকশন এক কথায় দারুণ। আমার ব্র্যান্ডের জন্য একটি পারফেক্ট আইডেন্টিটি তৈরি করে দিয়েছেন।",
            name: "Nusrat Jahan",
            role: "Founder, StyleCurve (BD)",
            initials: "NJ",
        },
        {
            quote: "Fast delivery and exceptional quality. The print materials looked amazing in person. Will definitely recommend to anyone needing professional design.",
            name: "David Wilson",
            role: "Event Coordinator (AUS)",
            initials: "DW",
        },
        {
            quote: "এত সুন্দর কাজের জন্য ধন্যবাদ। ডিজাইনগুলো একদম ইউনিক এবং আধুনিক। কাস্টমারদের কাছে আমাদের রিচ অনেক বেড়েছে!",
            name: "Arif Hasan",
            role: "Business Owner (BD)",
            initials: "AH",
        },
        {
            quote: "A pleasure to work with. Highly creative and followed all instructions perfectly. The final delivery was professional and polished.",
            name: "Elena Rodriguez",
            role: "Digital Consultant (CAN)",
            initials: "ER",
        }
    ];

    return (
        <div className="px-6 min-h-screen">
            {/* Section Heading */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(192,132,252,0.8)] mb-4"
                >
                    Client Success Stories
                </motion.h2>
                <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="text-gray-400 text-lg"
                >
                    Real feedback from my global and local partners
                </motion.p>
            </div>

            {/* Testimonials Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((client, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                        whileHover={{
                            y: -5,
                            boxShadow: "0px 8px 30px rgba(147,51,234,0.3)",
                            transition: { duration: 0.2 },
                        }}
                        className="bg-[#130b25] border border-gray-800 rounded-3xl p-8 flex flex-col justify-between hover:border-purple-500/50"
                    >
                        {/* Quote */}
                        <div className="mb-10">
                            <p className="text-gray-300 italic text-lg leading-relaxed">
                                "{client.quote}"
                            </p>
                        </div>

                        {/* Client Info */}
                        <div className="border-t border-gray-800 pt-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#9333ea] flex items-center justify-center text-white font-bold text-lg shrink-0">
                                {client.initials}
                            </div>
                            <div className="text-left">
                                <h4 className="text-white font-semibold text-lg">{client.name}</h4>
                                <p className="text-purple-400 text-sm font-medium">{client.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>


    );
};

export default Reviews;