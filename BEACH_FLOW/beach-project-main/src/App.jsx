import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScanBarcode from "./pages/ScanBarcode";
import ScanResults from "./pages/ScanResults";
import Reservations from "./pages/Reservations";

const AdminLogin = lazy(() => import("./pages/AdminLogin"));

function App() {
  return (
    <Routes>
      <Route
        path="/admin-login"
        element={
          <Suspense
            fallback={<p className="text-secondary mb-0">Loading page...</p>}
          >
            <AdminLogin />
          </Suspense>
        }
      />

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
        <Route path="/bookings" element={<About />} />
        <Route path="/beaches/add" element={<Contact />} />
        <Route path="/scan" element={<ScanBarcode />} />
        <Route path="/scan/results" element={<ScanResults />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/about" element={<Navigate to="/bookings" replace />} />
        <Route
          path="/contact"
          element={<Navigate to="/beaches/add" replace />}
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
