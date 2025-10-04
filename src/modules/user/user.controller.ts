import { Request, Response } from "express"
import { UserService } from "./user.service"

const CreateUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.createUser(req.body)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

export const UserController = { CreateUser }