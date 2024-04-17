import { Dialect, Sequelize } from 'sequelize';
import { config } from '../config/config';

const sequelize = new Sequelize(config.database, config.db_user, config.db_pass, {
    host: config.db_server,
    dialect: config.db_type as Dialect,
    port: 3306,
    logging: function (str) {
        if (str.includes('Error')) {
            console.log(str);
        }
    }
});
// "build": "npx tsc",
//     "start": "node dist/index.js",
//     "dev": "nodemon src/index.ts dotenv_config_path=env/local.env",
//     "test": "echo \"Error: no test specified\" && exit 1"
export const bootstrapDatabase = async (): Promise<any> => {
    try {
        // Test the database connection
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // Synchronize models with the database
        await sequelize.sync({ alter: true });
        console.log('Models have been synchronized with the database.');

        // Additional setup or migrations can be added here
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default sequelize;

















// const sequelize = new Sequelize(config.database, config.db_user, config.db_pass, {
//     host: config.db_server,
//     dialect: config.db_type as Dialect,
//     port: 3306,
//     logging: function (str) {
//         if (str.includes('Error')) {
//             console.log(str);
//         }
//     },
//     dialectOptions: {
//         connectTimeout: 30000,
//     },
//     pool: {
//         max: 500,
//         min: 0,
//         idle: 10000,
//         evict: 10000,
//         acquire: 12000,
//     },
// });
// export default sequelize;