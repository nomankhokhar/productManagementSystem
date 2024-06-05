const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.post('/login', async(req, res) => {
    const {email , password} = req.body;

    if (!email || !password){
        return res.status(400).json({error : 'credentials are required'});
    }

    try {
        const user = await User.findOne({ email });

        if(user.password !== password || user.email !== email){
            return res.status(400).json({message : "Invalid credentials"})
        }

        res.status(200).json({msg : "Success", data : user})

    } catch (error) {
        res.status(500).json({message : 'Something went wrong'});
    }
})

module.exports = router;