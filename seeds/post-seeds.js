const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1',
    user_id: 1,
    content: 'content'
  },
  {
    title: 'Post 2',
    user_id: 2,
    content: 'content'
  },
  {
    title: 'Post 3',
    user_id: 3,
    content: 'content'
  },
  {
    title: 'Post 4',
    user_id: 4,
    content: 'content'
  },
  {
    title: 'Post 5',
    user_id: 5,
    content: 'content'
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
