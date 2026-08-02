const express = require( 'express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/authRoutes.js')
const analysisRoutes = require('./routes/analysisRoutes.js')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use ('/api/auth', authRoutes);
app.use('/api/analysis', analysisRoutes);
module.exports = app;