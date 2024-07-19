const express = require('express')
const crypto = require('crypto')
const router = express.Router()
require('dotenv').config()
router.post("/paymentverification", (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

    console.log(req.body)
    const generated_signature = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET).update(`${razorpay_order_id}|${razorpay_payment_id}`).digest('hex')

    if (generated_signature == razorpay_signature) {
        return res.redirect("http://localhost:3000")
    }
    res.send("failed")
})
module.exports = router