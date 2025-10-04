import { prisma } from "../../config/db"

const createUser = async (payload: any) => {
    const user = await prisma.user.create({
        data: payload
    })
    return user
}

export const UserService = {
    createUser
}