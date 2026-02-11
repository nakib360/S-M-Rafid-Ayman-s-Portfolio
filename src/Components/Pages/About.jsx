const About = () => {
    const skills = [
        {
            name: "Adobe Photoshop",
            level: "90%",
            icon: "Ps",
            iconColor: "text-[#00c8ff]" // Classic Photoshop Blue
        },
        {
            name: "Adobe Illustrator",
            level: "93%",
            icon: "Ai",
            iconColor: "text-[#ff9a00]" // Classic Illustrator Orange
        }
    ];
    return (
        <div className="px-6 text-white pb-20">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-12">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(192,132,252,0.8)] mb-6">
                        About Me                    </h2>
                    <div className="w-24 h-1.5 bg-[#9333ea] rounded-full shadow-[0_0_15px_rgba(147,51,234,0.6)]"></div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mb-16 space-y-8">
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
                        Hi, I'm <span className="text-[#9333ea] font-bold">S M Rafid Ayman</span> — a creative Graphic Designer based in Chattogram, Bangladesh. I specialize in crafting modern, clean, and effective visual designs that help brands communicate clearly and stand out with confidence.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                        Over the years, I've worked on branding, logo design, social media creatives, thumbnails, and print materials. My design philosophy is simple: clarity first, purpose always.
                    </p>
                </div>

                {/* Skills Section */}
                <div>
                    <h3 className="text-2xl font-bold text-[#9333ea] mb-8">
                        Design Tools & Expertise
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-[#130b25] border border-gray-800 rounded-2xl p-6"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className={`font-black text-xl ${skill.iconColor}`}>
                                            {skill.icon}
                                        </span>
                                        <span className="font-bold text-lg text-gray-200">
                                            {skill.name}
                                        </span>
                                    </div>
                                    <span className="text-[#9333ea] font-bold">{skill.level}</span>
                                </div>

                                {/* Progress Bar Background */}
                                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                    {/* Progress Fill */}
                                    <div
                                        className="bg-[#9333ea] h-full rounded-full shadow-[0_0_10px_rgba(147,51,234,0.8)]"
                                        style={{ width: skill.level }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;