import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import resumePdf from "../../data/Bonny_Makaniankhondo_Resume_FSD.pdf";
import Button from "../ui/Button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Leadership", to: "/leadership" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[1.75rem] border border-white/70 bg-white/80 px-4 py-3 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-6">
            <Link to="/" onClick={closeMenu} className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Bonny Makaniankhondo
              </p>
              <p className="mt-1 truncate text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
                Full Stack Software Engineer
              </p>
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <NavItem key={item.to} label={item.label} to={item.to} />
              ))}
            </div>

            <div className="hidden md:block">
              <Button href={resumePdf} download variant="secondary">
                Resume
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:border-slate-950 md:hidden"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMenuOpen ? (
            <div className="mt-4 border-t border-slate-200 pt-4 md:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <MobileNavItem
                    key={item.to}
                    label={item.label}
                    onClick={closeMenu}
                    to={item.to}
                  />
                ))}
                <Button
                  className="mt-2 w-full justify-center"
                  href={resumePdf}
                  download
                  variant="secondary"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

function NavItem({ label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-full px-4 py-2 text-sm font-semibold transition ${
          isActive
            ? "bg-slate-950 text-white"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function MobileNavItem({ label, onClick, to }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `rounded-2xl px-4 py-3 text-sm font-semibold transition ${
          isActive
            ? "bg-slate-950 text-white"
            : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-950"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
