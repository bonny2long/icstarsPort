import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ScrollManager from "./components/layout/ScrollManager";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Work from "./pages/Work";
import WorkDetail from "./pages/WorkDetail";

export default function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <ScrollManager />
      <Navbar />

      <main className="overflow-x-clip pt-24 sm:pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route
            path="/work/united-airlines-dashboard"
            element={
              <Navigate
                to="/work/united-airlines-customer-insights"
                replace
              />
            }
          />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<Navigate to="/about#contact" replace />}
          />
          <Route path="/projects" element={<Navigate to="/work" replace />} />
          <Route path="/leadership" element={<Navigate to="/about" replace />} />
          <Route path="/career" element={<Navigate to="/experience" replace />} />
          <Route path="/client" element={<Navigate to="/work" replace />} />
          <Route path="/geekweek" element={<Navigate to="/about" replace />} />
          <Route path="/wellness" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
