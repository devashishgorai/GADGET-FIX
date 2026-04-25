import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <main className="overflow-hidden">
        <section className="px-3 pb-[var(--space-section-lg)] pt-[var(--space-page-top)] sm:px-4 md:px-6">
          <div className="apple-shell max-w-2xl">
            <div className="apple-card p-6 text-center md:p-10">
              <h1 className="section-title">Sign In to View Cart</h1>
              <p className="section-subtitle mx-auto max-w-md">
                Login to access your cart and continue checkout securely.
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/login" state={{ from: location }}>
                  <button type="button" className="btn-primary">Go to Login</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="overflow-hidden">
      <section className="px-3 pb-[var(--space-section-lg)] pt-[var(--space-page-top)] sm:px-4 md:px-6">
        <div className="apple-shell">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="section-title">Your Cart</h1>
              <p className="section-subtitle">{totalItems} item(s) ready for checkout.</p>
            </div>

            {cart.length > 0 && (
              <button type="button" className="btn-secondary" onClick={clearCart}>
                Clear Cart
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="apple-card p-7 text-center md:p-10">
              <h2 className="text-2xl font-semibold tracking-tight">Your cart is empty</h2>
              <p className="mt-2 text-[var(--apple-muted)]">Add accessories from the shop to continue.</p>
              <div className="mt-6">
                <Link to="/shop">
                  <button type="button" className="btn-primary">Go to Shop</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="apple-card p-4 md:p-5">
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="h-24 w-full rounded-2xl object-cover sm:w-24"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-lg font-semibold tracking-tight">{item.name}</h3>
                        <p className="text-sm text-[var(--apple-muted)]">₹{item.price} each</p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <button
                            type="button"
                            className="btn-secondary h-9 w-9 rounded-xl p-0"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label={`Decrease quantity for ${item.name}`}
                          >
                            <Minus size={16} />
                          </button>

                          <span className="inline-flex min-w-[2.25rem] items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-1 text-sm font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            className="btn-secondary h-9 w-9 rounded-xl p-0"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label={`Increase quantity for ${item.name}`}
                          >
                            <Plus size={16} />
                          </button>

                          <button
                            type="button"
                            className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 sm:ml-auto"
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 size={14} /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="apple-card h-fit p-5 md:p-6">
                <h2 className="text-xl font-semibold tracking-tight">Order Summary</h2>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between text-[var(--apple-muted)]">
                    <span>Total items</span>
                    <span>{totalItems}</span>
                  </div>
                  <div className="flex items-center justify-between text-lg font-semibold text-[var(--apple-text)]">
                    <span>Total amount</span>
                    <span>₹{totalPrice}</span>
                  </div>
                </div>

                <button type="button" className="btn-primary mt-6 w-full">
                  Proceed to Checkout
                </button>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
