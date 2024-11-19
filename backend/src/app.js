import express from 'express';
import dotenv from 'dotenv';
import webRoute from './route/index.js';
const  app = express();
dotenv.config();


app.use('/',webRoute);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT,function(){
    console.log(`Server is running on port ${HOST}:${PORT}`);
});