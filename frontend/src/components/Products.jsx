import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const items = [
  {
    id: 1,
    name: "Fast Charger",
    price: 499,
    image: "/hero/fast-charger.jpg",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 999,
    image: "/hero/wireless-headphones.jpg",
  },
  {
    id: 3,
    name: "USB Cable",
    price: 199,
    image: "/hero/premium-phone-cover.jpg",
  },
];

export default function Products() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-[var(--apple-bg)] p-8">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Shop Accessories</h1>

        {/* Cart */}
        <div className="relative">
          <ShoppingCart size={28} />
          <span className="absolute -right-2 -top-2 rounded-full bg-[var(--apple-blue)] px-2 py-0.5 text-xs text-white">
            {cart.length}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="apple-card group overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold tracking-tight">{item.name}</h2>
              <p className="mt-1 text-[var(--apple-muted)]">₹{item.price}</p>

              <button
                onClick={() => addToCart(item)}
                className="btn-primary mt-4 w-full gap-2 rounded-2xl"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}