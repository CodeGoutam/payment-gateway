const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', require('./routes/paymentRoute.js'))
app.use('/api', require('./routes/paymentverification.js'))
app.listen(4000, () => {
    console.log("port connected ");
})      