const express = require('express');
const dotenv = require('dotenv');

const cors = require("cors");


const tokenRoutes = require('./routes/token.route');
const emailRoutes = require('./routes/email.route');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


// API Routes
app.use('/api/v1', tokenRoutes);
app.use('/api/v1', emailRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('📬 MailForge Email Service is Running!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});


// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 MailForge running on port ${PORT}`));
