import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message, company, phone } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}

Message:
${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
