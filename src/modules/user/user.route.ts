
import express from 'express';
import { UserController } from './user.controller';

export const UserRouter = express.Router();

UserRouter.post(
    "/",
    UserController.CreateUser
)

UserRouter.get(
    "/",
    UserController.getAllFromDB
)

UserRouter.get(
    "/:id",
    UserController.getUserById
)

UserRouter.patch(
    "/:id",
    UserController.updateUser
)

UserRouter.delete(
    "/:id",
    UserController.deleteUser
)