const { User } = require ('../models');

const seededUser = [{
    username: 'User1',
    password: 'abc123'
},
{
    username: 'User2',
    password: 'abc456'
},
{
    username: 'User3',
    password: 'abc789'
}];

const seedUsers = () => User.bulkCreate(seededUser);

module.exports = seedUsers;