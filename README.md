# Vignesh S - Portfolio React App

A modern, responsive portfolio website built with React JS and styled-components, featuring multiple color themes and mobile-first responsive design.

## Features

- 🎨 **5 Color Themes**: Switch between different color schemes
- 📱 **Fully Responsive**: Optimized for all screen sizes (480px, 576px, 768px, 992px, 1200px, 1400px)
- ⚡ **Modern React**: Built with React 18 and functional components
- 🎭 **Styled Components**: CSS-in-JS with dynamic theming
- 🚀 **Smooth Animations**: Hover effects and transitions
- 📧 **Contact Form**: Integrated contact form (Google Sheets ready)
- 🎯 **Project Carousel**: Interactive project showcase
- 📱 **Mobile-First**: Unique mobile styling while maintaining desktop aesthetics

## Color Themes

1. **Classic Black & Yellow** - Primary: #000000, Secondary: #f7ca18
2. **Navy & Pink** - Primary: #333D79, Secondary: #FAEBEF
3. **Neon Green & Black** - Primary: #7CFC00, Secondary: #000000
4. **Cream & Purple** - Primary: #f7f6de, Secondary: #8618af
5. **Bright Green & Dark** - Primary: #0FFF50, Secondary: #1a1a1a

## Responsive Breakpoints

- **480px**: Mobile phones (portrait)
- **576px**: Mobile phones (landscape)
- **768px**: Tablets (portrait)
- **992px**: Tablets (landscape)
- **1200px**: Desktop (small)
- **1400px**: Desktop (large)

## Installation & Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Step 1: Clone and Install

```bash
# Navigate to your project directory
cd your-project-folder

# Install dependencies
npm install
```

### Step 2: Start Development Server

```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

### Step 3: Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section with profile
│   ├── Projects.js        # Projects carousel
│   ├── About.js           # About section
│   ├── Skills.js          # Skills showcase
│   ├── Contact.js         # Contact form
│   ├── Footer.js          # Footer with social links
│   ├── BackToTop.js       # Back to top button
│   └── ThemeSelector.js   # Theme switcher
├── App.js                 # Main app component
└── index.js              # Entry point
```

## Customization

### Updating Personal Information

Edit the following files to update your personal information:

- **Profile Image**: Replace `Img/my-image.png` in the `public` folder
- **Name & Title**: Update in `Hero.js` and `Footer.js`
- **Contact Details**: Update in `Contact.js` and `Footer.js`
- **Social Links**: Update URLs in `Footer.js`
- **Projects**: Modify the projects array in `Projects.js`
- **Skills**: Update skills in `Skills.js`

### Google Sheets Integration

To enable the contact form:

1. Set up a Google Apps Script
2. Replace `YOUR_GOOGLE_SHEETS_API_ENDPOINT` in `Contact.js`
3. Configure CORS and authentication

### Adding New Themes

To add more color themes:

1. Add new theme object in `App.js`
2. Update the `themes` object
3. The ThemeSelector will automatically include new themes

## Dependencies

- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **Styled Components**: ^6.1.1
- **Framer Motion**: ^10.16.4 (for future animations)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Lazy loading for images
- Optimized CSS with styled-components
- Smooth scrolling
- Responsive images
- Minimal bundle size

## Deployment

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel

1. Import your GitHub repository
2. Framework preset: Create React App
3. Build command: `npm run build`

### GitHub Pages

1. Add `homepage` field to `package.json`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`
4. Run `npm run deploy`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue in the GitHub repository.

---

**Built with ❤️ using React JS and Styled Components**
