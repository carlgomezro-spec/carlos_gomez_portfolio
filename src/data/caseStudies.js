// Contenido de las páginas de proyecto (todas menos Tattoo Booking, que tiene página propia).
// "headline": el texto entre {llaves} se pinta con el color de acento.
// "heroLines": el punto final de color se añade solo.

export const caseStudies = [
    {
    slug: "metropolis",
    number: "02",
    year: "2026",
    title: "Metropolis Underground",
    heroLines: ["METROPOLIS", "UNDERGROUND"],
    github: "https://github.com/carlgomezro-spec/metropolis_underground",
    meta: [
      { label: "ROLE / SERVICES", items: ["Frontend Development", "Responsive Design"] },
      { label: "TOOLS", items: ["React / Vite", "Swiper", "i18next"] },
      { label: "PROJECT TYPE", items: ["Landing page", "Concept project"] },
      { label: "YEAR / LOCATION", items: ["2026", "Madrid, Spain"] },
    ],
    // Sustituye a "cover": portátil + dos móviles con capturas reales de la web
    showcase: {
      tint: "#dfeee6",
      laptop: {
        src: "/images/metropolis-desktop.webp",
        alt: "Metropolis Underground landing page on desktop",
      },
      phones: [
        { src: "/images/metropolis-phone-features.webp", alt: "Features section on mobile" },
        { src: "/images/metropolis-phone-hero.webp", alt: "Hero section on mobile" },
      ],
    },
    intro: {
      headline: ["MOVE", "{SMARTER.}"],
      paragraphs: [
        "Metropolis Underground is a promotional landing page for a modernised metro app. The app tackles the biggest pain point of commuting: uncertainty during transit.",
        "Real-time train frequencies, incident alerts and journey planning are one tap away. The page communicates that value in a clear, scannable structure and guides visitors towards a single action: downloading the app.",
        "I designed it mobile-first and built it as a responsive React interface, from the page structure to the final details.",
      ],
    },
    gallery: {
      label: "THE APP",
      items: [
        { src: "/images/metropolis-feature-1.webp", alt: "Trip details screen of the app", title: "All your journeys in one place", text: "Plan, pay and travel." },
        { src: "/images/metropolis-feature-2.webp", alt: "Real-time arrivals screen of the app", title: "Real-time insights", text: "See arrivals and choose the best route." },
        { src: "/images/metropolis-feature-3.webp", alt: "Incidents screen of the app", title: "Stay ahead of disruptions", text: "Know about incidents as they happen." },
      ],
    },
    highlights: {
      label: "KEY DECISIONS",
      items: [
        { title: "Value in seconds", text: "One clear promise at the top, so a commuter understands the app at a glance." },
        { title: "Three calls to action", text: "Download buttons in the hero, in the feature slides and in the footer meet visitors at different moments." },
        { title: "Mobile first", text: "Designed for small screens first, with compact slides on mobile and full-width ones on desktop." },
        { title: "Scope on purpose", text: "Only three capabilities in the carousel. An interactive route planner was left out to keep the focus on downloads." },
        { title: "Accessible", text: "Semantic HTML, labelled carousel, descriptive alt text and keyboard navigation." },
        { title: "Light and fast", text: "WebP images and a small set of dependencies for weak connections on the go." },
      ],
    },
    cover: {
      src: "/images/metropolis.webp",
      alt: "Metropolis landing page on laptop and mobile",
      position: "center 22%",
    },
    intro: {
      headline: ["MOVE", "{SMARTER.}"],
      paragraphs: [
        "Metropolis is the concept of a mobile app for getting around the city, presented through a responsive landing page.",
        "The page promotes real-time insights, instant balance updates and smarter journeys, all in one app, and guides visitors towards a single action: downloading it.",
        "My focus was the frontend: turning the visual concept into a clean interface that works on desktop and on mobile.",
      ],
    },
    highlights: {
      label: "WHAT I DID",
      items: [
        { title: "Clear landing page", text: "A hero with a direct message and a main call to action: download the app." },
        { title: "Responsive design", text: "The layout adapts from desktop to mobile keeping the same hierarchy and message." },
        { title: "Simple navigation", text: "Home, features, testimonials and contact organised in a single scrolling page." },
      ],
    },
  },

  {
    slug: "branding",
    number: "03",
    year: "2025",
    title: "Digital Marketing & Branding",
    heroLines: ["DIGITAL", "BRANDING"],
    meta: [
      { label: "ROLE / SERVICES", items: ["Brand Identity", "Brand Guidelines", "Digital Marketing"] },
      { label: "PROJECT TYPE", items: ["Brand project", "Visual identity system"] },
      { label: "YEAR / LOCATION", items: ["2025", "Madrid, Spain"] },
    ],
    cover: {
      src: "/images/branding.webp",
      alt: "Brooklyn Fitboxing brand guidelines",
      fit: "contain",
    },
    intro: {
      headline: ["FROM PAIN", "TO {FUN.}"],
      paragraphs: [
        "Brooklyn Fitboxing is a fitness boxing brand. This project defines its visual identity and documents it in a set of brand guidelines.",
        "The identity is built around energy: a bold condensed wordmark, a lightning bolt emblem and a yellow and black palette.",
        "Diagonal lines, shapes and halftone dots express the idea of before and after, going from pain to fun.",
      ],
    },
    highlights: {
      label: "BRAND SYSTEM",
      items: [
        { title: "Logotype", text: "Main and monochrome versions, safety margins, minimum sizes and examples of incorrect use." },
        { title: "Emblem", text: "A lightning bolt in yellow, black, white and outline versions, also used as a pattern." },
        { title: "Energy lines", text: "Diagonal lines with a main angle of 75º that express the before and after of training." },
        { title: "Energy shapes", text: "Geometric shapes in yellow and black as a starting point for layout compositions." },
        { title: "Energy dots", text: "A halftone texture that adds depth and guides the reader's eye." },
        { title: "Colour", text: "A yellow and black palette, with monochrome logo versions for technical needs." },
      ],
    },
  },

  {
    slug: "other",
    number: "04",
    year: "2025",
    title: "Other Design Projects",
    heroLines: ["DESIGN", "PROJECTS"],
    meta: [
      { label: "ROLE / SERVICES", items: ["Editorial Design", "Graphic Design"] },
      { label: "PROJECT TYPE", items: ["Print and digital", "Magazine cover"] },
      { label: "YEAR / LOCATION", items: ["2025", "Madrid, Spain"] },
    ],
    cover: {
      src: "/images/otherprojects.webp",
      alt: "Shablam! magazine cover mockup",
      fit: "contain",
    },
    intro: {
      headline: ["DESIGN", "BEYOND {SCREENS.}"],
      paragraphs: [
        "Alongside my development work, I keep exploring graphic and editorial design.",
        "Here is a cover for Shablam!, a magazine that mixes a bold masthead, a strong photographic treatment and clear typographic hierarchy.",
      ],
    },
    highlights: {
      label: "DESIGN DECISIONS",
      items: [
        { title: "Masthead", text: "A heavy condensed logotype that dominates the top of the page and gives the magazine its voice." },
        { title: "Colour treatment", text: "A purple to blue duotone over the photograph that unifies the cover and sets the mood." },
        { title: "Typography", text: "Headlines and secondary texts organised in a clear hierarchy to guide the reading." },
      ],
    },
  },
];

export function getNextProject(slug) {
  const order = [
    { slug: "tattoo-booking", title: "Tattoo Booking App" },
    ...caseStudies.map(({ slug, title }) => ({ slug, title })),
  ];
  const i = order.findIndex((p) => p.slug === slug);
  return order[(i + 1) % order.length];
}