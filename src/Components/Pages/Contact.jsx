import { useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    address: "",
    projectDetails: "",
    isReviewed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
      const response = await fetch(`${baseUrl}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send order");
      }

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        budget: "",
        address: "",
        projectDetails: "",
        isReviewed: false
      });
    } catch (error) {
      console.error("Order submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 text-white pb-20">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]"
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Ready to bring your vision to life? Fill out the form below and I'll get back to you as soon as possible.
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="bg-[#130b25] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-[#0a0516] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#0a0516] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#0a0516] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Budget Range</label>
              <input
                type="text"
                name="budget"
                placeholder="Write your budget"
                value={formData.budget}
                onChange={handleChange}
                className="bg-[#0a0516] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Address</label>
            <input
              type="text"
              name="address"
              placeholder="City, Country"
              value={formData.address}
              onChange={handleChange}
              className="bg-[#0a0516] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-2 mb-8">
            <label className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Project Details</label>
            <textarea
              rows="5"
              name="projectDetails"
              placeholder="Tell me about your project goals and requirements..."
              value={formData.projectDetails}
              onChange={handleChange}
              className="bg-[#0a0516] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500 transition-colors resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 30px rgba(147,51,234,0.6)" }}
            transition={{ duration: 0.2 }}
            className="w-full bg-[#9333ea] hover:bg-[#a855f7] disabled:bg-purple-900 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 uppercase tracking-widest"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </div>

  );
};

export default Contact;
