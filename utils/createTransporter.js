const nodemailer = require('nodemailer');
require('dotenv').config();

function createTransporter(customConfig) {
  if (customConfig) {
    return nodemailer.createTransport(customConfig);
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

module.exports = createTransporter;
