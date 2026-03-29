import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ScrollManager from "./components/layout/ScrollManager";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Leadership from "./pages/Leadership";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <ScrollManager />
      <Navbar />

      <main className="overflow-x-clip pt-24 sm:pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client" element={<Navigate to="/projects" replace />} />
          <Route path="/geekweek" element={<Navigate to="/leadership" replace />} />
          <Route path="/career" element={<Navigate to="/leadership" replace />} />
          <Route path="/wellness" element={<Navigate to="/leadership" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
