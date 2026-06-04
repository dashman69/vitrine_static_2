// config/salon.config.ts
// ═══════════════════════════════════════════════════════════════
//  ★  FICHIER UNIQUE À MODIFIER POUR CHAQUE CLIENT  ★
// ═══════════════════════════════════════════════════════════════

export const salonConfig = {

  // ── Identité ────────────────────────────────────────────────
  name:        "Élara",
  tagline:     "L'art de révéler votre beauté naturelle",
  description: "Colorations végétales, coupes sur-mesure et soins experts. Votre transformation commence ici.",

  // ── Coordonnées ─────────────────────────────────────────────
  address:       "12 rue des Arts, Paris 9e",
  phone:         "01 42 XX XX XX",
  email:         "contact@maison-elara.fr",
  instagram:     "https://instagram.com/maison.elara",
  googleMapsUrl: "https://maps.google.com/?q=12+rue+des+Arts+Paris",

  // ── Thème ───────────────────────────────────────────────────
  theme: {
    accent:      "#C9A96E",   // changer la couleur principale ici
    accentLight: "#E8D5B0",
    accentDark:  "#9A7840",
    fontSerif:   "Playfair Display",
    fontSans:    "Jost",
  },

  // ── Réservation ─────────────────────────────────────────────
  booking: {
    url:   "https://",        // lien Calendly, Doctolib, etc.
    label: "Prendre rendez-vous",
    note:  "Annulation gratuite jusqu'à 24h avant",
  },

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title:       "Élara — Salon de coiffure Paris 9e",
    description: "Salon de coiffure à Paris. Colorations végétales, coupes et soins sur-mesure.",
    ogImage:     "/og.jpg",
    siteUrl:     "https://maison-elara.fr",
  },

  // ── Promo hero ──────────────────────────────────────────────
  promo: {
    active:        true,
    title:         "Balayage Soleil",
    description:   "Mèches naturelles + soin brillance offert",
    priceCurrent:  89,
    priceOriginal: 120,
  },

  // ── Services ────────────────────────────────────────────────
  services: [
    {
      icon:        "scissors",
      name:        "Coupe & Style",
      description: "Coupe femme, homme ou enfant avec brushing inclus",
      price:       "À partir de 45 €",
    },
    {
      icon:        "palette",
      name:        "Coloration",
      description: "Teinture, balayage, mèches — colorations végétales disponibles",
      price:       "À partir de 65 €",
    },
    {
      icon:        "sparkles",
      name:        "Soin & Lissage",
      description: "Kératine, lissage japonais, soins restructurants",
      price:       "À partir de 80 €",
    },
    {
      icon:        "heart",
      name:        "Mariée & Événement",
      description: "Coiffures de cérémonie, chignons et mises en plis",
      price:       "Sur devis",
    },
  ],

  // ── Galerie ─────────────────────────────────────────────────
  // Mettre les images dans /public/gallery/
  gallery: [
    { src: "/gallery/1.jpg", label: "Balayage naturel",  beforeAfter: true  },
    { src: "/gallery/2.jpg", label: "Coupe bob",         beforeAfter: false },
    { src: "/gallery/3.jpg", label: "Couleur chocolat",  beforeAfter: false },
    { src: "/gallery/4.jpg", label: "Lissage kératine",  beforeAfter: true  },
    { src: "/gallery/5.jpg", label: "Chignon mariée",    beforeAfter: false },
  ],

  // ── Avis clients ────────────────────────────────────────────
  reviews: [
    {
      initials:    "SL",
      name:        "Sophie L.",
      rating:      5,
      text:        "Résultat bluffant pour mon balayage ! L'équipe est à l'écoute et le salon très agréable.",
      source:      "Google",
      date:        "Avril 2024",
    },
    {
      initials:    "MK",
      name:        "Marie K.",
      rating:      5,
      text:        "J'ai enfin trouvé mon salon de confiance. La coupe est parfaite, exactement ce que je voulais.",
      source:      "Google",
      date:        "Mars 2024",
    },
    {
      initials:    "AL",
      name:        "Amira L.",
      rating:      4,
      text:        "Super expérience, soin très efficace. Je recommande vivement le soin kératine !",
      source:      "Google",
      date:        "Mars 2024",
    },
  ],

  // ── Horaires ────────────────────────────────────────────────
  horaires: [
    { day: "Lundi",    hours: "9h – 19h30" },
    { day: "Mardi",    hours: "9h – 19h30" },
    { day: "Mercredi", hours: "9h – 19h30" },
    { day: "Jeudi",    hours: "9h – 19h30" },
    { day: "Vendredi", hours: "9h – 19h30" },
    { day: "Samedi",   hours: "9h – 19h30" },
    { day: "Dimanche", hours: "Fermé"       },
  ],
} as const;

export type SalonConfig = typeof salonConfig;
