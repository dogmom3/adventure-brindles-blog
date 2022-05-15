const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Great post!',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Awesome!',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Arf! Arf!',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Woof, Woof, WOOOF!',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Arf, Arf, Yappy Yap!!',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'Woof, Bark, Yap, ARF!',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text: 'Fantastic blog post!',
    user_id: 5,
    post_id: 2
  },
  {
    comment_text: 'woof, woof, woof!!!!',
    user_id: 3,
    post_id: 5
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
