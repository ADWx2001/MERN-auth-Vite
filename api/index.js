import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import userRoutes from './routes/user.route.js';
// import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('MongoDB Connected');
}).catch((err)=>{
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(8070,()=>{
    console.log('server is up and run on port  8070');
})

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// app.use("/api/auth", authRoutes)