export const seoConfig = {
  baseURL: "https://laruletita.vercel.app",
  description:
    "La Ruleta Aleatoria Online ⚡️ Herramienta gratuita para tomar decisiones al azar. Perfecta para sorteos, juegos y elecciones aleatorias. Simple, rápida y sin registro.",
  type: "website",
  title: "La Ruletita 🎯 Ruleta Online Gratis | Sorteos y Decisiones",
  alternateNames: ["Ruleta Online", "Ruleta Aleatoria", "Ruleta de Sorteos"],
  image: {
    url: "https://picsum.photos/1200/630",
    alt: "La Ruleta Aleatoria Online - Toma decisiones al azar",
    width: 1200,
    height: 630,
  },
  siteName: "La Ruletita - Ruleta Online Gratis",
  twitter: {
    card: "summary_large_image",
    creator: "@laruletita",
    site: "@laruletita",
  },
  organization: {
    name: "La Ruletita",
    url: "https://laruletita.vercel.app",
    logo: "/favicons/favicon-512x512.png",
  },
};

export const manifest = {
  name: "La Ruletita - Ruleta Online",
  short_name: "La Ruletita",
  description:
    "Ruleta aleatoria online gratuita para sorteos y decisiones al azar. Fácil de usar desde cualquier dispositivo.",
  theme_color: "#30E130",
  background_color: "#ffffff",
  display: "minimal-ui",
  icons: [
    {
      src: "/favicons/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
};
