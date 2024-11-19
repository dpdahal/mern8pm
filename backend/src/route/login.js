import express from 'express';


const loginRoute = express.Router();    


loginRoute.get('/', (req, res) => {
    res.send('Hello World from loginRoute');
});

export default loginRoute;