import { Link } from "react-router-dom";
import resumePdf from "../../data/Bonny_Makaniankhondo_Resume_FSD.pdf";

export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/60 py-10 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 text-sm text-slate-600 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Bonny Makaniankhondo
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Systems-minded full stack engineer building clear, maintainable products
            with strong backend structure, thoughtful delivery, and real user impact.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
          <Link to="/projects" className="hover:text-slate-950">
            Projects
          </Link>
          <Link to="/leadership" className="hover:text-slate-950">
            Leadership
          </Link>
          <Link to="/contact" className="hover:text-slate-950">
            Contact
          </Link>
          <a href={resumePdf} download className="hover:text-slate-950">
            Resume
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200/80 px-6 pt-6 text-xs uppercase tracking-[0.18em] text-slate-500 lg:px-8">
        Built with React, Vite, Tailwind, and selective Pretext. ©{" "}
        {new Date().getFullYear()} Bonny Makaniankhondo
      </div>
    </footer>
  );
}
