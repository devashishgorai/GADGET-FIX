import { Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

/* 🔥 Lazy Loading Pages */
const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage"));
const WarrantyTermsPage = lazy(() => import("./pages/WarrantyTermsPage"));

/* ❌ 404 Page */
function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-gray-600 mt-2">Page not found</p>
        <Link to="/" className="text-blue-600 mt-4 inline-block">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default function Router() {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/warranty-terms" element={<WarrantyTermsPage />} />

        {/* Future Routes */}
        {/* <Route path="/booking" element={<BookingPage />} /> */}

        {/* 404 Catch */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}