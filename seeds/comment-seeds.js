const { Comment } = require('../models');

const seededComents = [{
    comment_text: "5G is the fifth generation of wireless technology, providing faster speeds, greater connectivity, and lower latency. The technology will facilitate new and innovative applications in industries like healthcare, automotive, entertainment, and education.",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines. It has already transformed various industries, including healthcare, finance, and marketing. AI is expected to grow and impact more areas of our daily lives, such as smart homes and autonomous cars.",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "Blockchain is a decentralized, digital ledger that stores information across a network of computers. It is best known for powering cryptocurrencies like Bitcoin, but its applications extend beyond finance. Blockchain can be used in supply chain management, voting systems, and more, providing security and transparency.",
    user_id: 3,
    post_id: 3
}];

const seedComments = () => Comment.bulk(seededComents);

module.exports = seedComments;