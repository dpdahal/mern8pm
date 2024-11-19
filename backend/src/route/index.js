import express from 'express';
import userRoute from './user.js';
import loginRoute from './login.js';

const webRoute = express.Router();

webRoute.get('/', (req, res) => {
    res.send('Hello World from webRoute');
});

webRoute.use('/login', loginRoute);
webRoute.use('/users', userRoute);

export default webRoute;

