import { Request, Response } from 'express';
import UserService from '../services/userservice';
import { IUser } from '../interfaces/user'
import { sendApiResponse } from '../interfaces/response';

export default {
    getUsers: async (req: Request, res: Response) => {
        try {
            let content = await UserService.getUsers();
            sendApiResponse(res, true, "Request Successfull", content);
        } catch (e: any) {
            sendApiResponse(res, false, e.message);
        }
    },

    getById: async (req: Request, res: Response) => {
        try {
            const id = Number(req.query?.ID);
            if (id) {
                let content = await UserService.getById(id);
                sendApiResponse(res, true, "Request Successfull", content)
            }
            sendApiResponse(res, true, "Required ID")
        } catch (e: any) {
            sendApiResponse(res, false, e.message);
        }
    },

    createUser: async (req: Request, res: Response) => {
        try {
            let userData = { UserName: req.body.UserName, Email: req.body.Email };
            let content = await UserService.createUser(userData);
            sendApiResponse(res, true, "Request Successfull", content)
        } catch (e: any) {
            sendApiResponse(res, false, e.message);
        }
    },

    updateUser: async (req: Request, res: Response) => {
        let a = { username: req.body.UserName, email: req.body.Email };
        let ID = req.query.ID;
        // res.send(UserService.updateUser(ID, a));
    },

    deleteUser: async (req: Request, res: Response) => {
        try {
            const id = Number(req.query?.ID);
            if (id) {
                let content = await UserService.deleteUser(id);
                sendApiResponse(res, true, "Request Successfull", content)
            }
            sendApiResponse(res, true, "Required ID")
        } catch (e: any) {
            sendApiResponse(res, false, e.message);
        }
    },
};