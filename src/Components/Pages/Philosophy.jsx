import React from 'react';

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
    <div className=" px-6 font-sans text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Title with subtle glow */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight shadow-purple-500/20">
          My Design Process
        </h2>
        <p className="text-gray-400 text-lg">
          A clear, structured workflow that ensures every project delivers real impact.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {processes.map((item) => (
          <div 
            key={item.id}
            className="bg-[#130b25] border border-gray-800 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 group"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Philosophy;