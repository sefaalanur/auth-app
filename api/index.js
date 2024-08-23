import express from 'express';
import mongoose from   'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
dotenv.config();

//connecting to mongodb
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Connected to Database.');
}).catch((err)=> {
    console.log(err);
});

//running the server
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});



app.use('/api/auth', authRoutes);

//adding middleware to handle errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});