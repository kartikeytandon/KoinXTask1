const axios = require('axios')
const Crypto = require('../models/Crypto')

const fetchAndUpdate = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/list')
        const cData = response.data

        await Crypto.deleteMany({})
        await Crypto.insertMany(cData)

        console.log("Data updated successfullyx");
    } catch (err) {
        console.log(err.message)
    }
}

const getAllCryptos = async () => {
    try {
      const cryptos = await Crypto.find();
      return cryptos;
    } catch (error) {
      console.error('Error fetching cryptocurrency data:', error);
    }
};

module.exports = { fetchAndUpdate, getAllCryptos }