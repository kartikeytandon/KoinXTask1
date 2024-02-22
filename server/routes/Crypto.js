const express = require('express');
const router = express.Router();
const cryptoController = require('../controllers/Crypto');

router.get('/', async (req, res) => {
  const cryptos = await cryptoController.getAllCryptos();
  res.json(cryptos);
});

router.get('/update', async (req, res) => {
  await cryptoController.fetchAndUpdate();
  res.send('Data updated successfully');
});

module.exports = router;