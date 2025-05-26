const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db');

const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactRoutes); // 

app.get('/', (req, res) => {
  res.send('Portfolio Backend Server is Running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
