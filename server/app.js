const express = require('express');
const cors = require('cors');
const sequelize = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Sync DB
sequelize.sync()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('DB connection error:', err));

module.exports = app;
