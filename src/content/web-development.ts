export const webDevelopment = {
  hero: {
    label: "/ WEB DEVELOPMENT",
    title: ["Web Development", "Built Around Your Brand"],
    intro:
      "From landing pages to company profiles, we design and build websites that are fast, responsive, and easy to maintain after launch.",
    meta: "LANDING PAGES · PORTFOLIO WEBSITES · COMPANY PROFILES · FRONT-END DEVELOPMENT",
  },
  services: [
    {
      slug: "landing-page-development",
      title: "Landing Page Development",
      description:
        "Single pages built to convert: product launches, campaigns, and announcements with one clear message and one clear next step.",
      deliverables: ["Conversion-focused single page", "Fast loading on mobile and desktop", "Integrated forms and analytics"],
    },
    {
      slug: "portfolio-website-development",
      title: "Portfolio Website Development",
      description:
        "Personal and studio portfolios that present work, experience, and skills with structure, designed to be found, not just looked at.",
      deliverables: ["Project index and case study pages", "Category and filter navigation", "Contact and CV paths"],
    },
    {
      slug: "company-profile-website",
      title: "Company Profile Website",
      description:
        "Company profiles that build trust quickly: services, products, team, and a direct contact path, organized for clarity.",
      deliverables: ["About, services, and product sections", "Clear contact and enquiry flow", "Editable content structure"],
    },
    {
      slug: "front-end-development",
      title: "Front-End Development",
      description:
        "Clean, typed implementation of your interface, from Figma design to working, accessible website code.",
      deliverables: ["Design-to-code implementation", "Semantic and accessible markup", "Component systems you can extend"],
    },
    {
      slug: "custom-web-development",
      title: "Custom Web Development",
      description:
        "Websites that do not fit a template: custom layouts, integrations, and features scoped to the actual problem.",
      deliverables: ["Scoped feature architecture", "API and CMS integration", "Documented code and handover"],
    },
    {
      slug: "responsive-website-development",
      title: "Responsive Website Development",
      description:
        "Every build is designed for desktop, tablet, and mobile from the first screen, not added as an afterthought.",
      deliverables: ["Mobile-first responsive layouts", "Performance budgets", "Cross-device testing"],
    },
  ],
  process: [
    {
      index: "A",
      title: "Scope",
      detail: "We define the goal, audience, and constraints before any design or code begins.",
    },
    {
      index: "B",
      title: "Design",
      detail: "Structure, content hierarchy, and interface direction, approved before build.",
    },
    {
      index: "C",
      title: "Build",
      detail: "Development in clean typed code with working, reviewable milestones.",
    },
    {
      index: "D",
      title: "Deploy",
      detail: "Launch on your domain, with hosting, analytics, and handover documentation.",
    },
  ],
  faqs: [
    {
      question: "What types of websites does Dignify build?",
      answer:
        "Landing pages, portfolio websites, company profiles, and custom web experiences, including responsive development and front-end work for existing designs.",
    },
    {
      question: "Can you build from an existing Figma design?",
      answer:
        "Yes. If you have an approved design, we implement it faithfully in clean, accessible code and keep the structure easy to maintain.",
    },
    {
      question: "Are the websites responsive?",
      answer:
        "Yes. Every website is designed and tested for desktop, tablet, and mobile, not scaled down as an afterthought.",
    },
    {
      question: "Can I use my own domain?",
      answer:
        "Yes. We deploy to your custom domain and hosting, and we document the setup so you understand what runs where.",
    },
    {
      question: "How does the project process work?",
      answer:
        "We start with a free consultation to scope the problem. Design and development run in one workflow with regular milestones, ending with a documented handover.",
    },
  ],
} as const;
