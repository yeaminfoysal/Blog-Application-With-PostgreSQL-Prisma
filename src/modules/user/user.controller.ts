import { Request, Response } from "express"
import { UserService } from "./user.service"

const CreateUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.createUser(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
}

const getAllFromDB = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getAllFromDB()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
}

const getUserById = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getUserById(Number(req.params.id))
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.updateUser(Number(req.params.id), req.body)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.deleteUser(Number(req.params.id))
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error)
    }
}

export const UserController = { CreateUser, getAllFromDB, getUserById, updateUser, deleteUser }