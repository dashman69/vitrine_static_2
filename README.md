# Salon Template — Version statique
## Next.js + Tailwind CSS · Zéro base de données

Toutes les données du site sont dans **un seul fichier** : `config/salon.config.ts`

---

## Démarrage

```bash
npm install
npm run dev
# → http://localhost:3000
```

Aucune variable d'environnement requise.

---

## Personnaliser pour un client

Ouvrir `config/salon.config.ts` et modifier :

| Clé | Description |
|-----|-------------|
| `name` | Nom du salon (logo + titre) |
| `tagline` | Accroche dans le Hero |
| `address / phone / email` | Coordonnées |
| `theme.accent` | Couleur principale (or, corail, mauve…) |
| `booking.url` | Lien Calendly / Doctolib / autre |
| `promo` | Promo mise en avant dans le Hero (`active: false` pour masquer) |
| `services` | Liste des prestations et tarifs |
| `gallery` | Chemins des photos (à mettre dans `/public/gallery/`) |
| `reviews` | Avis clients |
| `horaires` | Jours et heures d'ouverture |
| `seo` | Titre, description, image OG |

---

## Ajouter les photos de galerie

1. Placer les images dans `/public/gallery/` :
   ```
   public/
   └── gallery/
       ├── 1.jpg
       ├── 2.jpg
       └── ...
   ```
2. Mettre à jour les chemins dans `config/salon.config.ts` → `gallery[].src`

---

## Structure du projet

```
app/
  layout.tsx        ← Fonts Google + balises SEO (depuis config)
  page.tsx          ← Assemblage des sections (aucune requête réseau)
  globals.css       ← Variables CSS (tokens design)

components/
  layout/
    Navbar.tsx      ← Responsive + sticky + changement au scroll
    Footer.tsx      ← Horaires + coordonnées
  sections/
    Hero.tsx        ← Titre + carte promo
    Services.tsx    ← Grille des prestations
    Gallery.tsx     ← Grille asymétrique avant/après
    Reviews.tsx     ← Avis clients
    BookingCTA.tsx  ← Section finale avec CTA
  ui/
    SectionHeader.tsx

config/
  salon.config.ts   ← ★ Tout est ici
```

---

## Déploiement sur Vercel

```bash
# 1. Pousser sur GitHub
git init && git add . && git commit -m "init"
git remote add origin https://github.com/toi/nom-salon.git
git push -u origin main

# 2. Sur vercel.com/new → importer le repo
# Vercel détecte Next.js automatiquement
# Aucune variable d'environnement à ajouter

# 3. Ajouter le domaine client dans Settings → Domains
```

Pas de variables d'environnement → déploiement en 1 clic.

---

## Évolution possible : ajouter Supabase plus tard

Quand le client veut gérer lui-même ses promos / galerie / horaires,
la version avec CMS Supabase est disponible dans `salon-template/` (repo parent).
Les composants sont identiques, seule la source de données change.
