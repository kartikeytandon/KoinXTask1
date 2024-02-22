const mongoose = require('mongoose')

const CryptoSchema = new mongoose.Schema({
    id: String,
    name: String,
    Symbol: String
})

const Crypto = mongoose.model('Crypto', CryptoSchema)

module.exports = Crypto;