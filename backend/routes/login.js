const express= require('express')
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY;

router.post('/login', async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            throw {message:'Email and Password required'}
        }
        const user = await User.findOne({email});
        if(!user){
            throw {message:'User does not exist'}
        }
        const passwordMatched = await bcrypt.compare(password, user.password);
        if(!passwordMatched){
            throw {message:'Invalid Password'}
        }
        const token = jwt.sign({user},SECRET_KEY);
        
        res.status(200).json({
            message: 'Login Successful',
            name: user.name,
            jwt: token
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router