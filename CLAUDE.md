# VeronicaPerozo.com — Reglas DAB v2.0

## REGLAS DE DEPLOY OBLIGATORIAS (no negociables)
1. NUNCA `git push origin main` directo. SIEMPRE branch + PR.
2. NUNCA `vercel --prod` ni `vercel deploy --prod` manual.
3. Cada cambio: `git checkout -b feat/X origin/main` → push → PR → merge → Vercel auto-deploya.
4. Cada env var en Vercel verificar con `vercel env pull` que NO esté vacía.

## Stack
- Next.js 15 App Router · Tailwind CSS 4 · Framer Motion · TypeScript
- Vercel (hosting) — NO tocar el VPS para este proyecto

## Colores de marca Verónica Perozo
- Ivory: #F8F4EE | Beige: #EDE5D8 | Gold: #B8975A
- Brown: #4A3728 | Dark: #1E1510 | Terra: #8B5E3C

## Páginas
- / → Homepage (hero, stats, sobre-mí, libros, filosofía, testimonios, contacto)
- /sobre-mi → Biografía completa
- /libros → El Cansancio Silencioso + guías
- /conferencias → Arquitectas de Legado + speaking
- /prensa → Menciones en medios
- /blog → Artículos SEO (15-20)
- /en/ → Versión en inglés (con middleware de detección de idioma)

## Cliente
- Verónica Perozo · veronicaperozo.com
- Target: mujeres latinas en EEUU
- Idioma principal: español neutro · secundario: inglés bajo /en/
- Email: insurance.2jvs@gmail.com
- Instagram: @veronica.perozo
