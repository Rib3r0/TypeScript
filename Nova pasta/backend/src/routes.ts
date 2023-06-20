import { Router } from "express";


const routes = Router()

import UserController from "./Controller/UserController";

routes.get('/users',UserController.index)
routes.get('/users/create',UserController.create)


export default routes