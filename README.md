# MAGNUM TECHNOLOGY

IMPORTANT: generated completely with Claude Code (likfely very messy).

A modern, responsive clone of the Magnum Technology website built with Astro and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with improved UX/UI
- **Fully Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Astro for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Static Site Generation**: Pre-rendered for fast deployment

## 📋 Pages

- **Home**: Hero section, about, services, projects gallery, and contact form
- **About Us**: Detailed company information, core strengths, and credentials
- **Portfolio**: Project showcase with industry highlights
- **Contact**: Contact forms and company information

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Inter font from Google Fonts
- **Icons**: Heroicons (embedded as SVGs)

## 🏗️ Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ProjectsGallery.astro
│   │   └── Services.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   └── portfolio.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── run (executable script)
└── marketing-data.json (crawled data)
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
./run serve
```

Or using npm directly:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

Build the static site:
```bash
./run build
```

Or using npm directly:
```bash
npm run build
```

Built files will be generated in the `dist/` directory.

## 🎨 Design Improvements

This clone includes several design improvements over the original:

- **Minimalist Design**: Professional, clean aesthetic with subtle color palette
- **Enhanced Typography**: Inter font for improved readability
- **Monochrome Color Scheme**: Sophisticated gray-scale palette with strategic use of black accents
- **Real Project Images**: Incorporates actual project photos from the original website
- **Improved Layout**: Better spacing, visual hierarchy, and component organization
- **Modern Components**: Card-based layouts with subtle shadows and smooth transitions
- **Enhanced UX**: Micro-interactions, hover effects, and intuitive navigation
- **Mobile-First**: Fully responsive design optimized for all devices

## 📊 Marketing Data

The original website was crawled and all marketing content was extracted into `marketing-data.json`, including:

- Company information and taglines
- Service offerings and capabilities
- Industry focus areas
- Contact information
- Project details
- Credentials and qualifications

## 🚀 Deployment

This is a static site that can be deployed to any static hosting provider:

- **Netlify**: Connect your Git repository
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use the built files from `dist/`
- **AWS S3**: Upload the `dist/` folder contents

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational/demonstration purposes. The original content belongs to Magnum Technology.

## 🔧 Scripts

The project includes a convenient `run` script with the following commands:

- `./run build` - Build the project for production
- `./run serve` - Start the development server

---

Built with ❤️ using Astro and Tailwind CSS
