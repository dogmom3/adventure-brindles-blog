const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1',
    post_url: 'https://instagram.com/adventure.brindles',
    user_id: 1,
    content: 'content'
  },
  {
    title: 'Post 2',
    post_url: 'https://instagram.com/adventure.brindles',
    user_id: 2,
    content: 'content'
  },
  {
    title: 'Post 3',
    post_url: 'https://instagram.com/adventure.brindles',
    user_id: 3,
    content: 'content'
  },
  {
    title: 'Post 4',
    post_url: 'https://instagram.com/adventure.brindles',
    user_id: 4,
    content: 'content'
  },
  {
    title: 'Post 5',
    post_url: 'https://instagram.com/adventure.brindles',
    user_id: 5,
    content: 'content'
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
