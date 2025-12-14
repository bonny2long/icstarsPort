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
    <div className="max-w-5xl mx-auto px-6">
      <Navbar />
<h1 className="text-red-500">Test Red</h1>
<div className="bg-emerald-600 text-white p-4">Emerald Test</div>
<div className="bg-indigo-600 text-white p-4">Indigo Test</div>
<div className="bg-slate-50 text-slate-900 p-4">Slate Works!</div>
<div className="bg-zinc-100 text-zinc-700 p-4">Zinc Works!</div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/client" element={<Client />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/geekweek" element={<GeekWeek />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
