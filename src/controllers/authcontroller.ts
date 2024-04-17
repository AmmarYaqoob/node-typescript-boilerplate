import { Request, Response } from 'express';
import UserService from '../services/authservice';
import { sendApiResponse } from '../interfaces/response';

export default {
    login: async (req: Request, res: Response) => {
        try {
            let response = await UserService.login(req.body.Email, req.body.Password);
            sendApiResponse(res, response.Success, response.Message, response.Content);
        } catch (e: any) {
            sendApiResponse(res, false, e.message);
        }
    },

    signup: async (req: Request, res: Response) => {
        try {
            let response = await UserService.signUp(req.body);
            sendApiResponse(res, true, response.Message, response.Content);
        } catch (e: any) {
            sendApiResponse(res, false, e.message);
        }
    }
};