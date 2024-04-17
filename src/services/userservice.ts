import User from '../entities/user';
import moment from 'moment'

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

    createUser: async (UserData: any) => {
        User.sync({});
        var currentDate = moment().format("YYYYMMDDHHmmss");
        let content = await User.create({
            UserName: UserData.Username,
            Email: UserData.Email,
            Password: UserData.Password,
            Created_Date: currentDate,
            Is_Active: 1,
        });
        return content;
    },

    updateUser: async (ID: number, userData: { username: string; email: string }) => {
        // Implement logic to update a user
    },

    deleteUser: async (UserId: number) => {
        let content = await User.findOne({
            where: { ID: UserId }
        });
        if (content) {
            content.Is_Active = 'false';
            // User.update(content);
        }
    },

    getByEmail: async (Email?: string) => {
        let content = await User.findOne({
            where: { Email: Email, Is_Active: 1 }
        });
        return content;
    },
};