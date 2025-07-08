const createTransporter = require('../utils/createTransporter');

// Basic email send using default SMTP config
const sendEmail = async (req, res) => {
  const { to, subject, text, html, replyTo } = req.body;

  if (!to || !subject || (!text && !html)) {
    return res.status(400).json({ error: 'Missing required fields: to, subject, text/html' });
  }

  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  if (replyTo) {
    mailOptions.replyTo = replyTo;
  }

  const info = await transporter.sendMail(mailOptions);

  res.json({ success: true, messageId: info.messageId });
};

// Custom SMTP email send
const sendCustomEmail = async (req, res) => {
  const { smtp, from, to, subject, text, html, replyTo } = req.body;

  if (!smtp || !smtp.auth || !smtp.auth.user || !smtp.auth.pass) {
    return res.status(400).json({ error: 'Missing or invalid SMTP configuration' });
  }

  if (!from || !to || !subject || (!text && !html)) {
    return res.status(400).json({ error: 'Missing required fields: from, to, subject, text/html' });
  }

  const transporter = createTransporter(smtp);

  const mailOptions = {
    from,
    to,
    subject,
    text,
    html,
  };

  if (replyTo) {
    mailOptions.replyTo = replyTo;
  }

  const info = await transporter.sendMail(mailOptions);

  res.json({ success: true, messageId: info.messageId });
};

module.exports = { sendEmail, sendCustomEmail };
