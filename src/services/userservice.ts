import { Request } from 'express';
import User from '../entities/user';

export default {
    getUsers: async () => {
        let content = await User.findAll({
            where: { Is_Active: 1 }
        });
        return content;
    },

    getById: async (ID?: number) => {
        let content = await User.findOne({
            where: { ID: ID, Is_Active: 1 }
        });
        return content;
    },

    createUser: async (userData: any) => {
        User.sync({});
        let content = await User.create({
            UserName: userData.UserName,
            Email: userData.Email
        });
        return content;
    },

    updateUser: async (ID: number, userData: { username: string; email: string }) => {
        // Implement logic to update a user
    },

    deleteUser: async (userId: number) => {
        let content = await User.findOne({
            where: { ID: userId }
        });
        if (content) {
            content.Is_Active = 'false';
            // User.update(content);
        }
    },
};