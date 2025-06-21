# Yash Katwal - Portfolio Website

A modern, terminal-themed portfolio website built with Next.js, featuring a hacker-style design that showcases my skills, experience, and projects. Perfect for software engineering professionals looking to make a strong impression.

## 🚀 Features

- **Terminal Hacker Theme**: Minimalistic design with Matrix-style background effects
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth animations and hover effects using Framer Motion
- **Contact Form**: Working contact form with email integration using Nodemailer
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Easy Deployment**: Ready for deployment on Vercel

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom terminal theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Next.js API Routes (Node.js)
- **Email**: Nodemailer
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your email configuration:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

To enable the contact form, you need to set up email configuration:

### For Gmail:
1. Enable 2-factor authentication on your Google account
2. Go to Google Account Settings > Security > 2-Step Verification > App passwords
3. Generate a new app password
4. Use your Gmail address as `EMAIL_USER` and the app password as `EMAIL_PASSWORD`

### For other email providers:
Update the transporter configuration in `app/api/contact/route.ts` with your SMTP settings.

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add your environment variables in the Vercel dashboard
   - Deploy!

### Other Platforms

This project can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   │   ├── globals.css               # Global styles and terminal theme
│   │   ├── layout.tsx                # Root layout with metadata
│   │   └── page.tsx                  # Main page component
│   ├── components/
│   │   ├── About.tsx                 # About section
│   │   ├── Contact.tsx               # Contact form and info
│   │   ├── Experience.tsx            # Work experience timeline
│   │   ├── Hero.tsx                  # Hero section with typing effect
│   │   ├── MatrixBackground.tsx      # Animated Matrix background
│   │   ├── Navigation.tsx            # Navigation bar
│   │   ├── Projects.tsx              # Projects showcase
│   │   └── Skills.tsx                # Skills with progress bars
│   ├── public/                       # Static assets
│   ├── package.json                  # Dependencies and scripts
│   ├── tailwind.config.js            # Tailwind configuration
│   ├── tsconfig.json                 # TypeScript configuration
│   └── README.md                     # This file
```

## 🎨 Customization

### Colors
The terminal theme colors can be customized in `tailwind.config.js`:
```js
colors: {
  'terminal-green': '#00ff00',
  'terminal-green-dark': '#00cc00',
  'terminal-bg': '#000000',
  'terminal-gray': '#1a1a1a',
  'terminal-white': '#ffffff',
  'terminal-blue': '#00ffff',
}
```

### Content
Update the following files with your information:
- `components/Hero.tsx` - Name, title, and contact info
- `components/About.tsx` - Personal background and education
- `components/Experience.tsx` - Work experience and roles
- `components/Projects.tsx` - Your projects and achievements
- `components/Skills.tsx` - Technical skills and proficiencies
- `components/Contact.tsx` - Contact information

### Fonts
The project uses JetBrains Mono. To change fonts, update:
- `app/layout.tsx` - Font imports
- `tailwind.config.js` - Font family configuration

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly interactions
- Optimized layouts for all screen sizes
- Hamburger menu for mobile navigation

## ⚡ Performance

- Optimized images and assets
- Code splitting with Next.js
- Minimal bundle size
- Fast loading times
- SEO-friendly structure

## 🔒 Security

- Input validation on contact form
- CSRF protection via Next.js
- Environment variable protection
- Safe email handling

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: yashrkatwal@gmail.com
- **LinkedIn**: [linkedin.com/in/yash-katwal](https://linkedin.com/in/yash-katwal)
- **GitHub**: [github.com/yashkatwal](https://github.com/yashkatwal)

---

Built with ❤️ by Yash Katwal 