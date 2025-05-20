# Portfolio Website with Contact Form

This is a modern portfolio website with a functional contact form that sends emails and stores messages in a MongoDB database.

## Features

- Responsive design
- Contact form with validation
- Email notifications
- Message storage in MongoDB
- Serverless backend using Vercel Functions

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
SENDGRID_API_KEY=your_sendgrid_api_key
ADMIN_EMAIL=your_email@example.com
SENDGRID_VERIFIED_SENDER=verified_sender@yourdomain.com
```

### 2. MongoDB Setup

1. Create a free MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster and database
3. Get your connection string and update the `MONGODB_URI` in your `.env` file

### 3. SendGrid Setup

1. Create a free SendGrid account at [https://sendgrid.com/](https://sendgrid.com/)
2. Create an API key with "Mail Send" permissions
3. Verify a sender email address in SendGrid
4. Update the SendGrid related environment variables in your `.env` file

### 4. Deploy to Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Login: `vercel login`
3. Link your project: `vercel link`
4. Deploy: `vercel --prod`

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
