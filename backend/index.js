const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

const LoginRoute = require('./routes/login');
const RegisterRoute = require('./routes/register');
const ProductRoute = require('./routes/product');
const CartRoute = require('./routes/cart');

const cors = require('cors');
app.use(cors());


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('HELLO WORLD');
})

app.use(LoginRoute);
app.use(RegisterRoute);
app.use(ProductRoute);
app.use(CartRoute);


app.listen( PORT,(err)=>{
    mongoose
        .connect(MONGODB_URL)
        .then(()=>console.log(`server running at http://localhost:${PORT}`))
        .catch((err)=>console.log(err))

})