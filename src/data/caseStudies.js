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
    meta: [
      { label: "ROLE / SERVICES", items: ["Frontend Development", "Responsive Design"] },
      { label: "PROJECT TYPE", items: ["Landing page", "Concept project"] },
      { label: "YEAR / LOCATION", items: ["2026", "Madrid, Spain"] },
    ],
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