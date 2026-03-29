import { Link } from "react-router-dom";
import resumePdf from "../../data/Bonny_Makaniankhondo_Resume_FSD.pdf";

export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/60 py-10 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 text-sm text-slate-600 sm:px-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-8">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Bonny Makaniankhondo
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Systems-minded full stack engineer building clear, maintainable products
            with strong backend structure, thoughtful delivery, and real user impact.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-700 lg:justify-end">
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

      <div className="mx-auto mt-8 max-w-md border-t border-slate-200/80 px-4 pt-6 text-center text-xs uppercase tracking-[0.18em] text-slate-500 sm:px-5 lg:max-w-7xl lg:px-8">
        Built with React, Vite, Tailwind, and selective Pretext. ©{" "}
        {new Date().getFullYear()} Bonny Makaniankhondo
      </div>
    </footer>
  );
}
