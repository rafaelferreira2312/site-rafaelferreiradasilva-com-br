# Rafael Ferreira da Silva — Portfolio

Premium portfolio site for [rafaelferreiradasilva.com.br](https://rafaelferreiradasilva.com.br).

## Stack

- **Next.js 15** (App Router, Static Export)
- **React 19**
- **Tailwind CSS 3**
- **Lucide React**
- **i18n**: PT · EN · ES · HE (RTL)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
```

Static files are exported to `out/`. Deploy contents to the web root, preserving `assets/pdf/` (certification PDFs).

## Project Structure

```
src/
├── app/           # Layout, globals, page
├── components/    # Header, Footer, sections
├── context/       # Language provider
└── data/          # i18n, projects, certifications
public/
└── assets/        # Images (PDFs live on server at assets/pdf/)
```

## License

© 2026 Rafael Ferreira da Silva
