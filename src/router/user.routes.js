import { Router } from "express";
import * as userController from '../controller/user.controller.js';

const user = Router();

user.post('/registrar', userController.registrar);
user.post('/login', userController.login);

export default user;
