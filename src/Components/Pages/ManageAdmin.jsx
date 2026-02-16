import { Outlet, NavLink } from "react-router";
// eslint-disable-next-line
import { motion } from "framer-motion";

const navItems = [
  {
    to: "orders",
    label: "Orders",
    description: "Review incoming project requests",
    end: true,
  },
  {
    to: "uploads",
    label: "Uploads",
    description: "Track delivered files and assets",
  },
];

const ManageAdmin = () => {
  return (
    <div className="min-h-screen text-white md:px-6 py-6">
      <div className="max-w-none mx-auto">
        <div className="relative lg:pl-75">
          <motion.aside
            initial={{ x: -36, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="bg-[#130b25] border border-gray-800 rounded-3xl p-6 h-fit w-full lg:w-65 lg:fixed lg:left-10 lg:top-30"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
              Management
            </p>
            <div className="space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `group flex items-center justify-between rounded-2xl border px-4 py-4 transition-all duration-300 ${isActive
                      ? "border-purple-500/60 bg-purple-500/10 text-white shadow-[0_0_18px_rgba(147,51,234,0.25)]"
                      : "border-transparent bg-[#0b0617] text-gray-300 hover:border-purple-500/40 hover:text-white"
                    }`
                  }
                >
                  <div>
                    <p className="text-base font-semibold">{item.label}</p>
                    <p className="text-xs text-gray-500 group-hover:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </NavLink>
              ))}
            </div>

          </motion.aside>

          <section className="min-h-[60vh] mt-5 md:mt-0">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ManageAdmin;
