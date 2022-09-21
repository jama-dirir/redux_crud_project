const express = require("express");
require('./config/connection')
const route=require('./routes/user')
const cors=require('cors')
require('dotenv').config()
const morgan = require('morgan');

const app=express()

app.use(morgan('dev'));



app.use(cors())

app.use(express.json())

app.use('/',route)



app.listen(process.env.PORT||5000, () => {
  console.log("You are connected!");
});