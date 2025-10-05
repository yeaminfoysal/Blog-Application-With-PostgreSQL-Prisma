import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const loginWithEmailAndPassword = async (req: Request, res: Response) => {
    try {
        const result = await AuthService.loginWithEmailAndPassword(req.body)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error)
    }
}

const authWithGoogle = async (req: Request, res: Response) => {
    try {
        const result = await AuthService.authWithGoogle(req.body)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error)
    }
}

export const AuthController = {
    loginWithEmailAndPassword,
    authWithGoogle
}