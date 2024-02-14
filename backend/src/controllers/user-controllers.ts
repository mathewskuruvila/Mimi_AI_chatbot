import { NextFunction, Request, Response } from "express";
import user from "../models/User.js";

export const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    //get all users
    try {
        const users = await User.find();
    } catch(error) {

    }
};
