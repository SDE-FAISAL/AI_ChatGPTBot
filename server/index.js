import express from 'express';
import dbConnection from './config/DB.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//routes path
import authRoutes from './routes/authRoutes.js';
import errorHandler from './middlewares/errorMidleware.js';

const app = express();

dotenv.config();

const host = '127.0.0.1';
const port = 8000;

//mongo connection
dbConnection();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler);

//API routes
app.use("/api/v1/auth", authRoutes);


//server listening
app.listen(port, ()=>{
    console.log(`server running at http://${host}:${port}`)
});