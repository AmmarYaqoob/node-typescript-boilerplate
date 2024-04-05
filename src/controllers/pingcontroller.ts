import { Request, Response } from 'express';
import UserService from '../services/userservice';

export default {
  ping: async (req: Request, res: Response, next: () => void) => {
    res.end('<h1>Sample CI/CD pipline</h1>')
  }
};