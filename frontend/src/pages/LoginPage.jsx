import { useContext, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const { user, isAuthenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const fromPath = useMemo(
    () => location.state?.from?.pathname || "/shop",
    [location.state]
  );

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const result = login(form);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(fromPath, { replace: true });
  };

  return (
    <main className="overflow-hidden">
      <section className="px-4 pb-[var(--space-section-lg)] pt-[var(--space-page-top)] md:px-6">
        <div className="apple-shell max-w-lg">
          <div className="apple-card p-6 md:p-8">
            <div className="mb-6 text-center">
              <span className="saas-badge">Account Access</span>
              <h1 className="section-title mt-4">Sign In to Continue</h1>
              <p className="section-subtitle mx-auto max-w-md">
                Login to save your cart and manage checkout from any device.
              </p>
            </div>

            {isAuthenticated && (
              <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
                You are signed in as {user.email}. Continue to your cart.
              </div>
            )}

            {error && (
              <div className="mb-4 rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
                {error}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-[var(--apple-text)]">
                  Email
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  className="input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="login-password" className="mb-1 block text-sm font-medium text-[var(--apple-text)]">
                  Password
                </label>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={onChange}
                  autoComplete="current-password"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Sign In
              </button>
            </form>

            <div className="mt-5 text-center text-sm text-[var(--apple-muted)]">
              Want to explore first? <Link to="/shop" className="font-semibold text-[var(--apple-blue)]">Browse accessories</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
