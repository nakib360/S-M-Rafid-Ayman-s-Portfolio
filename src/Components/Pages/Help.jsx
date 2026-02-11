const Help = () => {
    const services = [
        "Building strong and consistent brand visuals.",
        "Creating scroll-stopping social media content.",
        "Designing high-impact thumbnails and covers.",
        "Delivering clean, professional print and digital designs.",
        "Improving visual clarity and audience engagement."
    ];
    return (
        <div className=" px-6 font-sans">
            <div className="max-w-7xl mx-auto text-center mb-16">
                {/* Glowing Header */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#c084fc] drop-shadow-[0_0_15px_rgba(192,132,252,0.8)] mb-6">
                    What I Can Help You With?
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                    Turning ideas into clean, effective, and impactful visuals that support both brand identity and real business goals.
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`
              bg-[#130b25] border border-gray-800 rounded-2xl p-6 flex items-center gap-4 
              hover:border-purple-500/40 transition-all duration-300
              ${index >= 3 ? 'md:col-span-1.5 md:w-full mx-auto' : ''}
            `}
                    >
                        {/* Glowing Purple Dot */}
                        <div className="w-3 h-3 rounded-full bg-[#9333ea] shadow-[0_0_10px_#9333ea] shrink-0" />

                        <p className="text-gray-300 text-base md:text-lg font-medium">
                            {service}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Help;