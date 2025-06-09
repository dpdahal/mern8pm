import express from 'express';
import donenv from 'dotenv';
import Connection from './config/connection.js';
import webRoute from './routing/web.js';
import DatabaseTableSeeder from './seeder/DatabaseTableSeeder.js';

Connection.connect();

const  app = express();
donenv.config();
app.use(express.json());
app.use(express.static('public'));

DatabaseTableSeeder.run();

app.use("/", webRoute);

const url =process.env.URL || "http://localhost:3000";
const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`Server is running on ${url}`);
});