const express = require('express')
const router = express.Router()
const Razorpay = require('razorpay')
require('dotenv').config()
router.post("/checkout", async (req, res) => {
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_API_KEY,
        key_secret: process.env.RAZORPAY_API_SECRET,
    })
    const options = {
        amount: Number(req.body.price),  // amount in the smallest currency unit
        currency: "INR",
    };
    // console.log(instance)
    await instance.orders.create(options).then((order) => {
        // console.log(order);
        res.json({
            order: order, keyId: process.env.RAZORPAY_API_KEY
        })
    }).catch((err) => {
        console.log("error:-", err);
        res.json({ success: false })
    })
})
module.exports = router