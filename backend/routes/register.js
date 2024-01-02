const express= require('express')
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY;

router.post('/register', async (req,res)=>{
    try{
        const {name,email,mobile,password} = req.body;
        if(!email){
            throw {message:'Email is required'}
        }
        const userExits = await User.findOne({email});
        
        if(userExits){
            throw {message:'Email already exits'}
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = {name,email,mobile,password:hashedPassword};
        await User.create(newUser);

        const token = jwt.sign({userExits},SECRET_KEY);
        
        res.status(200).json({
            message: 'Registration Successful',
            name: newUser.name,
            jwt: token
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;