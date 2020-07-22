import express from 'express';
const cors = require('cors');
var bodyParser = require('body-parser')
const mongoose=require('mongoose')



require('dotenv').config();

const app=express();
const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true},()=>{console.log("connected to db")})
app.use(cors())
app.use(express.json());

const productsRouter = require('./routes/productRoute');
const usersRouter = require('./routes/route');

app.use('/products',productsRouter);
app.use('/users',usersRouter);

app.listen(5000)
console.log(`Server is running on port ${port}`)


