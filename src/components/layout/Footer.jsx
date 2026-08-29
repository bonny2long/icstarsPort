import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";

const footerNavigation = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Experience", to: "/experience" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/about#contact" },
];

const professionalLinks = [
  {
    label: "Email",
    href: "mailto:" + profile.email,
    external: false,
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: profile.links.github,
    external: true,
  },
  {
    label: "Resume",
    href: profile.resumeHref,
    external: false,
    download: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
              {profile.name}
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Engineering clear, reliable systems from complex work.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Software engineer focused on product systems, data and analytics,
              backend workflows, and applied AI.
            </p>
            <Link
              to="/about#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-teal-700 bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-950/10 transition hover:-translate-y-0.5 hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <nav aria-label="Footer navigation">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Explore
              </p>
              <ul className="mt-5 space-y-3">
                {footerNavigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm font-semibold text-slate-700 hover:text-teal-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Connect
              </p>
              <ul className="mt-5 space-y-3">
                {professionalLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      download={item.download || undefined}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-teal-700"
                    >
                      {item.label}
                      {item.external ? (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>
            {profile.location} · Software engineering · Data and analytics
          </p>
        </div>
      </div>
    </footer>
  );
}
