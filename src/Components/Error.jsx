// eslint-disable-next-line
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/", { replace: true });
  };

  return (
    <div className="px-4 sm:px-6 text-white min-h-[70vh] flex items-center justify-center">
      <motion.section
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="w-full max-w-3xl rounded-3xl border border-gray-800 bg-[#130b25] p-6 sm:p-10 text-center"
      >
        <motion.p
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="text-xs uppercase tracking-[0.22em] text-purple-300"
        >
          404 Error
        </motion.p>

        <motion.h1
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-sm sm:text-lg text-gray-300"
        >
          The page you are looking for does not exist or was moved.
        </motion.p>

        <motion.div
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-3"
        >
          <button
            type="button"
            onClick={handleGoBack}
            className="rounded-xl border border-purple-400/40 bg-[#9333ea] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#a855f7] transition-colors"
          >
            Go Back
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded-xl border border-gray-600 px-5 py-2.5 text-sm font-semibold text-gray-200 hover:bg-white/5 transition-colors"
          >
            Go Home
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Error;
