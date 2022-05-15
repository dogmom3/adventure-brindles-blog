const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1',
    post_url: 'https://instagram.com/adventure.brindles',
    user_id: 1
  },
  {
    title: 'Post 2',
    post_url: 'https://instagram.com/adventure.brindles',
    user_id: 2
  },
  {
    title: 'Post 3',
    post_url: 'https://instagram.com/adventure.brindles',
    user_id: 3
  },
  {
    title: 'Post 4',
    post_url: 'https://instagram.com/adventure.brindles',
    user_id: 4
  },
  {
    title: 'Post 5',
    post_url: 'https://instagram.com/adventure.brindles',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
