// import { Request, Response, NextFunction } from 'express';
// import { sendApiResponse } from '../interfaces/response';

// export const responseWrapperMiddleware = (req: Request, res: Response, next: NextFunction): void => {
//   res.sendApiResponse = (success: boolean, message?: string, data?: any): void => {
//     sendApiResponse(res, success, message, data);
//   };
//   next();
// };