import User from '../entities/user';
import UserService from './userservice';

export default {
    login: async (Email: string, Password: string) => {
        let user = await UserService.getByEmail(Email);
        if (!user) {
            return { Message: 'Authentication failed. Wrong password.', Success: false };
        }
        if (Password != user.Password) {
            return { Message: 'Authentication failed. Wrong password.', Success: false };
        }
        await user.update({
            Is_Active: true,
        });
        return { Message: 'Logged in', Success: true, Content: user };
    },

    signUp: async (UserData: any) => {
        let user = await UserService.getByEmail(UserData.Email);
        if (user) {
            return { Message: 'Email Already Exists', Success: false };
        }
        let createdUser = await UserService.createUser(UserData);
        return { Message: 'Account Created', Success: true, Content: createdUser };
    },
};