import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Conntected to MongoDB');
})
.catch((err) =>{
    console.log(err)
})

// const path = require('path');
// require('dotenv').config({
//     override: true,
//     path: path.join(__dirname, '.env')
// });
// const {Pool, Client} = require('pg');

// const pool = new Pool({
//     user: process.env.USER,
//     host: process.env.HOST,
//     database: process.env.DATABASE,
//     password: process.env.PASSWORD,
//     port: process.env.PORT
// });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
    }
);

app.use('/api/user', userRouter);