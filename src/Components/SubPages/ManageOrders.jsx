import { useEffect, useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [updatingId, setUpdatingId] = useState("");

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
                const response = await fetch(`${baseUrl}/orders`);

                if (!response.ok) {
                    throw new Error("Failed to fetch orders");
                }

                const data = await response.json();
                setOrders(Array.isArray(data) ? data : []);
            } catch (fetchError) {
                setError(fetchError.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleReview = async (orderId) => {
        if (!orderId) return;

        setUpdatingId(orderId);
        setOrders((prev) =>
            prev.map((order) =>
                order._id === orderId ? { ...order, isReviewed: true } : order
            )
        );

        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
            const response = await fetch(`${baseUrl}/orders/${orderId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isReviewed: true }),
            });

            if (!response.ok) {
                throw new Error("Failed to update review status");
            }
        } catch (updateError) {
            setOrders((prev) =>
                prev.map((order) =>
                    order._id === orderId ? { ...order, isReviewed: false } : order
                )
            );
            console.error("Review update error:", updateError);
        } finally {
            setUpdatingId("");
        }
    };

    return (
        <div className="px-6 min-h-screen text-white pb-20">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]"
                >
                    Manage Orders
                </motion.h2>
                <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="text-gray-400 text-lg"
                >
                    All submitted contact orders in one place
                </motion.p>
            </div>

            {loading && (
                <p className="text-center text-purple-300 text-lg">Loading orders...</p>
            )}

            {!loading && error && (
                <p className="text-center text-red-400 text-lg">{error}</p>
            )}

            {!loading && !error && orders.length === 0 && (
                <p className="text-center text-gray-400 text-lg">No orders found.</p>
            )}

            {!loading && !error && orders.length > 0 && (
                <div className="max-w-7xl mx-auto columns-1 md:columns-2 xl:columns-3 gap-8 [column-fill:_balance]">
                    {orders.map((order, index) => (
                        <motion.div
                            key={order._id || index}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0px 8px 30px rgba(147,51,234,0.3)",
                                transition: { duration: 0.2 },
                            }}
                            className="mb-8 break-inside-avoid bg-[#130b25] border border-gray-800 rounded-3xl p-8 hover:border-purple-500/50"
                        >
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-white">
                                    {order.fullName || "Unnamed Client"}
                                </h3>
                                <p className="text-gray-300">
                                    <span className="text-purple-400 font-semibold">Email:</span>{" "}
                                    {order.email || "N/A"}
                                </p>
                                <p className="text-gray-300">
                                    <span className="text-purple-400 font-semibold">Phone:</span>{" "}
                                    {order.phone || "N/A"}
                                </p>
                                <p className="text-gray-300">
                                    <span className="text-purple-400 font-semibold">Budget:</span>{" "}
                                    {order.budget || "N/A"}
                                </p>
                                <p className="text-gray-300">
                                    <span className="text-purple-400 font-semibold">Address:</span>{" "}
                                    {order.address || "N/A"}
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    <span className="text-purple-400 font-semibold">
                                        Project Details:
                                    </span>{" "}
                                    {order.projectDetails || "N/A"}
                                </p>
                            </div>

                            <div className="border-t border-gray-800 mt-6 pt-4">
                                <p className="text-sm text-gray-400">
                                    Submitted:{" "}
                                    {order.createdAt
                                        ? new Date(order.createdAt).toLocaleString()
                                        : order.submittedAt
                                            ? new Date(order.submittedAt).toLocaleString()
                                            : "N/A"}
                                </p>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        disabled={order.isReviewed || updatingId === order._id}
                                        onClick={() => handleReview(order._id)}
                                        className={`w-full rounded-xl px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${order.isReviewed
                                                ? "bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 cursor-not-allowed"
                                                : "bg-[#9333ea] hover:bg-[#a855f7] border border-purple-400/40 text-white shadow-[0_0_18px_rgba(147,51,234,0.35)]"
                                            }`}
                                    >
                                        {updatingId === order._id
                                            ? "Updating..."
                                            : order.isReviewed
                                                ? "Reviewed"
                                                : "Review Now"}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ManageOrders;
