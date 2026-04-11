# Knigi News

A modern news website built with Astro and Tailwind CSS.

## 🚀 Project Structure

```
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/       # 40+ articles
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── package.json
```

## 📝 Content

- **40 articles** across categories: News, Technology, Lifestyle, Business, Science, Health, Environment, Entertainment
- Hero section with trending news
- Magazine-style layout with sidebar
- Full-text search

## 🎨 Design

- Green/yellow color scheme (anti-footprinting)
- Playfair Display + Source Sans 3 fonts
- Left sidebar layout
- Hero section with featured articles

## 📊 Stats

- 40 articles (10 News, 10 Technology, 10 Lifestyle, 10 mixed)
- Dynamic sitemap
- Umami analytics (ID: 3a424474-7c9a-4da3-bc2a-dd8896bf7f9e)
- GitHub Pages deployment

## 🛠️ Commands

```bash
npm install
npm run dev
npm run build
```

## 📦 Deployment

### Cloudflare Pages

1. Zaloguj się do Cloudflare Dashboard
2. Przejdź do Pages → Create a project
3. Połącz z repozytorium GitHub (kodepl/knigi)
4. Ustawienia build:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Dodaj CNAME: `knigi.news`
6. Deploy!

Strona automatycznie przebudowuje się po każdym pushu do main.
