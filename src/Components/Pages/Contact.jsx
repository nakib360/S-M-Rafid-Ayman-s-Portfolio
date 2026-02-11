import React from 'react';

const Contact = () => {
  return (
    <div className="px-6 text-white pb-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]">
          Let's Work Together
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Ready to bring your vision to life? Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <form className="bg-[#130b25] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="bg-[#0a0516] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="bg-[#0a0516] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000"
                className="bg-[#0a0516] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Budget Range</label>
              <select className="bg-[#0a0516] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors appearance-none">
                <option>$500 - $1,000</option>
                <option>$1,000 - $3,000</option>
                <option>$3,000 - $5,000</option>
                <option>$5,000+</option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Address</label>
            <input 
              type="text" 
              placeholder="City, Country"
              className="bg-[#0a0516] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-2 mb-8">
            <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Project Details</label>
            <textarea 
              rows="5"
              placeholder="Tell me about your project goals and requirements..."
              className="bg-[#0a0516] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-[#9333ea] hover:bg-[#a855f7] text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all duration-300 uppercase tracking-widest"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;