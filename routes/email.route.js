const express = require('express');
const asyncHandler = require('express-async-handler');
const authenticateJWT = require('../middlewares/auth.middleware');
const { sendEmail, sendCustomEmail } = require('../services/email.service');

const router = express.Router();

router.post('/send-basic-email', authenticateJWT, asyncHandler(sendEmail));
router.post('/send-custom-email', authenticateJWT, asyncHandler(sendCustomEmail));

module.exports = router;
