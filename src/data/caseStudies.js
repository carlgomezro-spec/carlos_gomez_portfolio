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
    wireframes: {
      label: "UX / WIREFRAMING",
      heading: ["FROM BRIEF", "TO {WIREFRAMES.}"],
      text: "Before writing any code I defined the structure in Figma: mobile and desktop wireframes, a simple navigation tree (home, features, testimonials and contact) and brand guidelines with logotype, Poppins typography and a black and green palette.",
      image: {
        src: "/images/metropolis-wireframes.webp",
        alt: "Metropolis Underground Figma board: mobile and desktop wireframes, navigation tree and brand guidelines",
      },
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
    // Hoja con todos los slides de las guidelines, enderezada, sobre un panel amarillo suave
    showcase: {
      tint: "#f7e394",
      image: {
        src: "/images/branding-sheet.webp",
        alt: "Brooklyn Fitboxing brand guidelines: logotype, emblem and energy elements",
      },
    },
    intro: {
      headline: ["FROM PAIN", "TO {FUN.}"],
      paragraphs: [
        "Brooklyn Fitboxing is a fitness boxing brand. This project defines its visual identity and documents it in a set of brand guidelines.",
        "The identity is built around energy: a bold condensed wordmark, a lightning bolt emblem and a yellow and black palette.",
        "Diagonal lines, shapes and halftone dots express the idea of before and after, going from pain to fun.",
      ],
    },
    gallery: {
      label: "THE GUIDELINES",
      variant: "wide",
      items: [
        { src: "/images/branding-logotype.webp", alt: "Logotype slide: main logo, monochrome versions and safety margin", title: "Logotype", text: "Main and monochrome versions, safety margins and minimum sizes." },
        { src: "/images/branding-emblem.webp", alt: "Emblem slide: lightning bolt in several versions and pattern", title: "Emblem", text: "A lightning bolt in yellow, black, white and outline, also used as a pattern." },
        { src: "/images/branding-lines.webp", alt: "Energy lines slide: the pain to fun concept", title: "Energy lines", text: "Diagonal lines that express the before and after, from pain to fun." },
        { src: "/images/branding-shapes.webp", alt: "Energy shapes slide: yellow and black layout examples", title: "Energy shapes", text: "Geometric shapes in yellow and black as a starting point for layouts." },
      ],
    },

    embed: {
        label: "FULL GUIDELINES",
        src: "https://www.behance.net/embed/project/228940843?ilo0=1",
        href: "https://www.behance.net/gallery/228940843/Brand-Guidelines-Brooklyn-Fitboxing",
        title: "Brooklyn Fitboxing brand guidelines on Behance",
      },
      
    highlights: {
      label: "KEY IDEAS",
      items: [
        { title: "One idea: pain to fun", text: "The whole identity expresses a single concept, the before and after of training." },
        { title: "A modular kit", text: "Logotype, emblem, lines, shapes and dots are building blocks that combine in many layouts." },
        { title: "Built to be used", text: "Safety margins, minimum sizes, monochrome versions and examples of incorrect use make it easy for others to apply." },
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
      { label: "PROJECT TYPE", items: ["Print and digital", "Magazine"] },
      { label: "YEAR / LOCATION", items: ["2025", "Madrid, Spain"] },
    ],
    showcase: {
  tint: "#d9cdea",
  image: {
    src: "/images/other-shablam-cover.webp",
    alt: "Shablam! magazine cover, issue on Pride month in Spain",
    narrow: true,
  },
},
    intro: {
      headline: ["DESIGN", "BEYOND {SCREENS.}"],
      paragraphs: [
        "Alongside my development work, I keep exploring graphic and editorial design.",
        "Shablam! is a magazine concept about LGBTIQ+ culture, designed as a cover, a contents page and feature spreads. A second piece, a booklet on the life of Marcos Ana, shows a very different tone with the same editorial care.",
        "A heavy condensed masthead, a purple to blue duotone and a clear typographic hierarchy give it a bold and consistent voice from page to page.",
      ],
    },

    gallery: {
  label: "SELECTED WORK",
  variant: "editorial",
  items: [
    { src: "/images/other-shablam.webp", alt: "Shablam! magazine: cover, contents page and feature spreads", title: "Shablam!", text: "A magazine concept on LGBTIQ+ culture with a bold masthead and a purple to blue duotone." },
    { src: "/images/other-marcos-ana.webp", alt: "Cover and opening spread of the booklet 23 years in Franco's prisons", title: "23 years in Franco's prisons", text: "Editorial design for the story of Marcos Ana: stark black and white photography with a single violet accent." },
  ],
},
    highlights: {
      label: "DESIGN DECISIONS",
      items: [
        { title: "Masthead", text: "A heavy condensed logotype that dominates the page and gives the magazine its voice." },
        { title: "Colour treatment", text: "A purple to blue duotone over the photographs that unifies covers and spreads." },
        { title: "Typography", text: "Headlines and body text organised in a clear hierarchy to guide the reading." },
        { title: "Restraint", text: "In the Marcos Ana booklet, black and white photography and one violet accent let the story carry the emotion." },
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