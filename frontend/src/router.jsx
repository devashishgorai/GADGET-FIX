import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

/* 🔥 Lazy Loading Pages */
const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

/* ❌ 404 Page */
function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-gray-600 mt-2">Page not found</p>
        <a href="/" className="text-blue-600 mt-4 inline-block">
          Go Home
        </a>
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

        {/* Future Routes */}
        {/* <Route path="/cart" element={<CartPage />} /> */}
        {/* <Route path="/booking" element={<BookingPage />} /> */}

        {/* 404 Catch */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}