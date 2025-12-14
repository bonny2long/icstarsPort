import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Leadership from "./pages/Leadership";
import Client from "./pages/ClientProject";
import Projects from "./pages/Projects";
import GeekWeek from "./pages/GeekWeek";
import Wellness from "./pages/Wellness";
import Career from "./pages/CareerPath";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/client" element={<Client />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/geekweek" element={<GeekWeek />} />
          <Route path="/career" element={<Career />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
