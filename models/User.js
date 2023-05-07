// Define Model for User table
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt'); // Library used for password hashing

class User extends Model {
    checkPassword(loginPw) { // checkPassword method compares the entered password (loginPw) with the hashed password stored in the password column of the current User instance     
    return bcrypt.compareSync(loginPw, this.password);
    }
};

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6] // At least 6 characters long
        }
    }
},
{
    hooks: {
        async beforeCreate(newUser) { // Hash the password before inserting a new user in the database
            newUser.password = await bcrypt.hash(newUser.password, 10);
            return newUser;
        },
        async beforeUpdate(newUser) { // Hash the password before updating a new user in the database
            updatedNewUser.password = await bcrypt.hash(updatedNewUser.password, 10);
            return updatedNewUser;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
}
);

module.exports = User;
