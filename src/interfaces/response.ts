import { Response } from 'express';

export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export const sendApiResponse = (res: Response, success: boolean, message?: string, data?: any): void => {
  const response: ApiResponse = {
    success,
    message: message || (success ? 'Request successful' : 'Request failed'),
    data,
  };
  res.json(response);
};