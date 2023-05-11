const { Comment } = require('../models');

const seededComents = [{
    comment_text: "Some studies suggest that exposure to electromagnetic radiation from 5G networks may increase the risk of cancer and other health issues",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "It's exciting to see how this technology continues to advance and benefit society.",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "The decentralized nature of blockchain makes it difficult to tamper with data, ensuring trust and integrity in transactions.",
    user_id: 3,
    post_id: 3
}];

const seedComments = () => Comment.bulkCreate(seededComents);

module.exports = seedComments;