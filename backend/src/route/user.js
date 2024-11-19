import express from 'express';
import UserController from '../controllers/users/UserController.js';

const userRoute = express.Router();
const userInstance = new UserController();

userRoute.get('/', userInstance.index);
userRoute.get('/:id', userInstance.show);
userRoute.post('/', userInstance.store);
userRoute.put('/:id', userInstance.update);
userRoute.delete('/:id', userInstance.destroy);

export default userRoute;