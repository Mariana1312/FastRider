require('dotenv').config()
const express = require('express');
const axios = require('axios');
const router = express.Router()

const API_KEY = process.env.API_KEY


router.get('/rides', async (req, res) => {
    const { data } = await axios.get(`http://fast-rider.herokuapp.com/api/v1/rides?token=${API_KEY}&api_key=${API_KEY}`);
    res.send(data)
});


router.post('/ride', async (req, res) => {
    let pin = req.body.userPin
    let ID = req.body.rideID
    const { data } = await axios.post(`http://fast-rider.herokuapp.com/api/v1/tickets?pin=${pin}&ride_id=${ID}&token=${API_KEY}`)
    res.send(data)
})





module.exports = router