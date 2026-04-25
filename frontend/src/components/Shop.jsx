import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import useAdaptiveMotion from "../hooks/useAdaptiveMotion";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function Shop() {
  const { addToCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { simplifyMotion } = useAdaptiveMotion();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: location } });
      return;
    }

    addToCart(product);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: simplifyMotion ? 0.03 : 0.075,
        delayChildren: simplifyMotion ? 0 : 0.03,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: simplifyMotion ? 8 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: simplifyMotion ? 0.19 : 0.28, ease: "easeOut" },
    },
  };

  const products = [
    {
      id: 1,
      name: "Fast Charger",
      price: 500,
      image: "/hero/fast-charger.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 1500,
      image: "/hero/wireless-headphones.jpg",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Premium Phone Cover",
      price: 300,
      image: "/hero/premium-phone-cover.jpg",
      rating: 4.3,
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-5 md:grid-cols-3 md:gap-7"
    >
      {products.map((p) => (
        <motion.div
          key={p.id}
          variants={staggerItem}
          whileHover={simplifyMotion ? undefined : { y: -7 }}
          className="apple-card group overflow-hidden"
        >
          <div className="overflow-hidden rounded-t-3xl">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                decoding="async"
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>

            <div className="mt-1 flex items-center gap-1 text-sm text-yellow-500">
              <Star size={16} fill="currentColor" />
              {p.rating}
            </div>

            <p className="mt-2 font-medium text-[var(--apple-muted)]">₹{p.price}</p>
            <p className="mt-1 text-sm text-[var(--apple-muted)]">Fast dispatch and compatibility support included.</p>
            {!isAuthenticated && (
              <p className="mt-1 text-xs font-medium text-[var(--apple-blue)]">
                Sign in to add this item to your cart.
              </p>
            )}

            <button
              type="button"
              onClick={() => handleAddToCart(p)}
              className="btn-primary mt-4 w-full gap-2 rounded-2xl"
              aria-label={`Add ${p.name} to cart for ${p.price} rupees`}
            >
              <ShoppingCart size={18} />
              {isAuthenticated ? "Add to Cart Securely" : "Login to Add to Cart"}
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Shop;
