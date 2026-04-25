import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const { user, isAuthenticated, login, loginWithOAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const googleButtonRef = useRef(null);

  const fromPath = useMemo(
    () => location.state?.from?.pathname || "/shop",
    [location.state]
  );

  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!googleClientId || !googleButtonRef.current) {
      return;
    }

    const decodeCredential = (credential) => {
      try {
        const parts = credential.split(".");
        if (parts.length < 2) {
          return null;
        }

        const payload = parts[1]
          .replace(/-/g, "+")
          .replace(/_/g, "/");
        const decoded = window.atob(payload.padEnd(payload.length + ((4 - payload.length % 4) % 4), "="));
        return JSON.parse(decoded);
      } catch (decodeError) {
        console.error("Unable to decode Google credential", decodeError);
        return null;
      }
    };

    const handleGoogleResponse = (response) => {
      const payload = decodeCredential(response.credential || "");
      if (!payload?.email) {
        setError("Google sign-in failed. Please try again.");
        return;
      }

      const result = loginWithOAuth({
        email: payload.email,
        name: payload.name,
        provider: "google",
      });

      if (!result.success) {
        setError(result.message || "Google sign-in failed.");
        return;
      }

      navigate(fromPath, { replace: true });
    };

    const initializeGoogle = () => {
      if (!window.google?.accounts?.id) {
        return;
      }

      window.google.accounts.id.initialize({
        client_id: googleClientId,
        callback: handleGoogleResponse,
      });

      googleButtonRef.current.innerHTML = "";
      window.google.accounts.id.renderButton(googleButtonRef.current, {
        theme: "outline",
        size: "large",
        shape: "pill",
        text: "continue_with",
        width: "320",
      });
    };

    if (window.google?.accounts?.id) {
      initializeGoogle();
      return;
    }

    const existingScript = document.getElementById("google-identity-script");
    if (existingScript) {
      existingScript.addEventListener("load", initializeGoogle);
      return () => existingScript.removeEventListener("load", initializeGoogle);
    }

    const script = document.createElement("script");
    script.id = "google-identity-script";
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", initializeGoogle);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", initializeGoogle);
  }, [googleClientId, loginWithOAuth, navigate, fromPath]);

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

            <div className="my-5 flex items-center gap-3 text-xs text-[var(--apple-muted)]">
              <span className="h-px flex-1 bg-black/10" />
              <span>OR CONTINUE WITH</span>
              <span className="h-px flex-1 bg-black/10" />
            </div>

            {googleClientId ? (
              <div className="flex justify-center">
                <div ref={googleButtonRef} />
              </div>
            ) : (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
                Google OAuth is not configured yet. Add VITE_GOOGLE_CLIENT_ID in your environment to enable it.
              </div>
            )}

            <div className="mt-5 text-center text-sm text-[var(--apple-muted)]">
              Want to explore first? <Link to="/shop" className="font-semibold text-[var(--apple-blue)]">Browse accessories</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
