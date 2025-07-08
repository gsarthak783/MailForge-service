const express = require('express');
const jwt = require('jsonwebtoken');
const verifyAdminKey = require('../middlewares/adminKey.middleware');
const asyncHandler = require('express-async-handler');
require('dotenv').config();

const router = express.Router();

router.post(
  '/generate-token',
  verifyAdminKey,
  asyncHandler(async (req, res) => {
    const { project, role } = req.body;

    if (!project || !role) {
      return res.status(400).json({ error: 'Missing project or role in body' });
    }

    const token = jwt.sign({ project, role }, process.env.JWT_SECRET, { expiresIn: '90d' });

    res.json({ token });
  })
);

module.exports = router;
