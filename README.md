# XP Innovative Solutions - Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fportfolio)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/yourusername/portfolio/main.yml?label=Build&logo=github)](https://github.com/yourusername/portfolio/actions)

A modern, responsive portfolio website for XP Innovative Solutions, showcasing services, portfolio, and featuring a functional contact form with email notifications and database storage.

## ✨ Features

- 🎨 Modern, responsive design with dark mode support
- ⚡ Blazing fast performance with Vite
- 📧 Contact form with validation and spam protection
- ✉️ Email notifications via SendGrid
- 💾 Message storage in MongoDB
- ☁️ Serverless backend using Vercel Functions
- 🔍 SEO optimized
- ♿ Accessible design
- 📱 Mobile-first responsive layout

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- MongoDB Atlas account
- SendGrid account (for email notifications)
- Vercel account (for deployment)

## 🛠️ Setup Instructions

### 1. Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
SENDGRID_API_KEY=your_sendgrid_api_key
NODE_ENV=development
ADMIN_EMAIL=your_email@example.com
SENDGRID_VERIFIED_SENDER=verified_sender@yourdomain.com
```

### 2. Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fportfolio)

1. Click the "Deploy" button above
2. Add your environment variables in the Vercel dashboard
3. Deploy!

## 📦 Technologies Used

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [SendGrid](https://sendgrid.com/) - Email delivery service
- [Vercel](https://vercel.com/) - Cloud platform for static sites and Serverless Functions

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Your Name - [@your_twitter](https://twitter.com/your_handle) - email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

## 🙏 Acknowledgments

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
- [Img Shields](https://shields.io/)
- [Vercel](https://vercel.com/)
- [Font Awesome](https://fontawesome.com/)

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

## Environment Variables Reference

- `MONGODB_URI`: MongoDB connection string
- `SENDGRID_API_KEY`: SendGrid API key for sending emails
- `ADMIN_EMAIL`: Email address to receive contact form submissions
- `SENDGRID_VERIFIED_SENDER`: Verified sender email address (must match your SendGrid verified sender)

## License

MIT
