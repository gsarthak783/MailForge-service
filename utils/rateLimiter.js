const rateLimit = require("express-rate-limit");

// Token generation limiter: max 3 tokens per 15 minutes per IP
const tokenLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 3 requests per window
  message: {
    success: false,
    message: "Too many token requests. Try again after 10 minutes.",
  },
});

module.exports = {tokenLimiter}