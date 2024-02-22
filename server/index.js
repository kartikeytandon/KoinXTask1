const express = require('express');
const connectDB = require('./config/db');
const cryptoRoutes = require('./routes/Crypto')
const cryptoController = require('./controllers/Crypto');
const cron = require('node-cron')
const cors = require('cors')

const app = express()

app.use(cors())

require('dotenv').config()

connectDB()

cron.schedule('0 * * * *', async () => {
    await cryptoController.fetchAndUpdate();    
})

app.use('/crypto', cryptoRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})