import resumePdf from "./Bonny_Makaniankhondo_Resume_2026.pdf";

export const profile = {
  name: "Bonny Makaniankhondo",
  headline: "Software Engineer · Data & Analytics · AI Systems",
  shortHeadline: "Software · Data · Analytics · AI",
  currentRole: "Data & Analytics Apprentice",
  currentCompany: "Aon",
  currentPractice: "Construction & Infrastructure",
  location: "Chicago, IL",
  shortBio:
    "I build software, data workflows, and intelligent systems that turn complex processes into clear, usable products.",
  longBio:
    "Currently developing enterprise data and analytics experience within Aon's Construction & Infrastructure practice while continuing to build full-stack products, automation, and AI-enabled systems.",
  targetAreas: [
    "Software engineering",
    "Data and analytics",
    "Backend and data systems",
    "Applied AI workflows",
  ],
  phone: "312-966-9631",
  email: "bonnymak@icloud.com",
  website: "https://bonnymak.tech",
  links: {
    github: "https://github.com/bonny2long",
    linkedin:
      "https://www.linkedin.com/in/bonny-makaniankhondo-bb95a3321/",
  },
  resumeHref: resumePdf,
};

export const contactLinks = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    value: profile.email,
  },
  {
    label: "Website",
    href: profile.website,
    value: "bonnymak.tech",
  },
  {
    label: "GitHub",
    href: profile.links.github,
    value: "github.com/bonny2long",
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    value: "linkedin.com/in/bonny-makaniankhondo",
  },
];

export const contactStrengths = [
  "Software engineering across product UI, APIs, authentication, and relational data.",
  "Developing enterprise data and analytics skills through Aon and Harold Washington College.",
  "Applied AI experience grounded in useful workflows and structured outputs.",
  "Client-facing communication, systems thinking, and steady ownership under pressure.",
];

// TODO: Confirm whether the i.c.stars email should remain the primary address.
