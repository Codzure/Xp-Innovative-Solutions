import { MongoClient } from 'mongodb';
import sgMail from '@sendgrid/mail';

// Enable CORS
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-V, Authorization'
  );
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  return await fn(req, res);
};

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Connect to MongoDB
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const db = client.db();

      // Save message to database
      const result = await db.collection('messages').insertOne({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: new Date(),
        read: false
      });

      // Send email notification
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      const msg = {
        to: process.env.ADMIN_EMAIL,
        from: {
          email: process.env.SENDGRID_VERIFIED_SENDER,
          name: 'Portfolio Contact Form'
        },
        replyTo: email.trim(),
        subject: `New message from ${name} via Portfolio Contact Form`,
        text: `You have a new message from your portfolio website:

Name: ${name}
Email: ${email}
Message: ${message}

---
This message was sent from your portfolio contact form.`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4F46E5;">New Message from Portfolio Contact Form</h2>
            <div style="background: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-line;">${message}</p>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 14px;">
              <p>This message was sent from your portfolio contact form.</p>
              <p>Message ID: ${result.insertedId}</p>
            </div>
          </div>
        `
      };

      await sgMail.send(msg);

      return res.status(200).json({
        success: true,
        message: 'Message sent successfully!',
        data: {
          id: result.insertedId,
          timestamp: new Date().toISOString()
        }
      });

    } catch (error) {
      console.error('Database or Email Error:', error);
      
      // More specific error handling
      if (error.response) {
        console.error('SendGrid Error Response:', error.response.body);
      }
      
      return res.status(500).json({
        success: false,
        message: 'Failed to process your message. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    } finally {
      await client.close();
    }
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = allowCors(handler);
