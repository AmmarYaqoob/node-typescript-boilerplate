import { Model, DataTypes } from 'sequelize';
import sequelize from '../bootstrap';

class User extends Model {
    public ID!: number;
    public UserName!: string;
    public Email!: string;
    public Profile_Picture!: string;
    public Profile_Picture_Thumbnail!: string;
    public Address!: string;
    public City!: string;
    public State!: string;
    public Country!: string;
    public Phone!: string;
    public Password!: string;
    public Role_ID!: string;
    public Is_Active!: string;
    public Created_By!: string;
    public Created_Date!: string;
    public Updated_By!: string;
    public Updated_Date!: string;
    public Deleted_By!: string;
    public Deleted_Date!: string;
}

User.init(
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        UserName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        Profile_Picture: {
            type: DataTypes.STRING
        },
        Profile_Picture_Thumbnail: {
            type: DataTypes.STRING
        },
        Address: {
            type: DataTypes.STRING
        },
        City: {
            type: DataTypes.STRING
        },
        State: {
            type: DataTypes.STRING
        },
        Country: {
            type: DataTypes.STRING
        },
        Phone: {
            type: DataTypes.INTEGER
        },
        Password: {
            type: DataTypes.STRING
        },
        Role_ID: {
            type: DataTypes.INTEGER
        },
        Is_Active: {
            type: DataTypes.INTEGER
        },
        Created_By: {
            type: DataTypes.INTEGER
        },
        Created_Date: {
            type: DataTypes.STRING
        },
        Updated_By: {
            type: DataTypes.INTEGER
        },
        Updated_Date: {
            type: DataTypes.STRING
        },
        Deleted_By: {
            type: DataTypes.INTEGER
        },
        Deleted_Date: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false,
    }
);

export default User;