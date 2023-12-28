import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('MongoDB Connected');
}).catch((err)=>{
    console.log(err);
});

const app = express();

app.listen(8070,()=>{
    console.log('server is up and run on port  3000');
})

app.use('/user', userRoutes);