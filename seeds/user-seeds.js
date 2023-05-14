const { User } = require ('../models');

const seededUser = [{
    username: 'Carmela',
    password: 'abc123'
},
{
    username: 'Logan',
    password: 'abc456'
},
{
    username: 'Elbi',
    password: 'abc789'
}];

const seedUsers = () => User.bulkCreate(seededUser);

module.exports = seedUsers;