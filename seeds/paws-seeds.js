const { Paws } = require('../models');

const pawsdata = [
  {
    user_id: 1,
    post_id: 1
  },
  {
    user_id: 1,
    post_id: 2
  },
  {
    user_id: 1,
    post_id: 3
  },
  {
    user_id: 1,
    post_id: 4
  },
  {
    user_id: 1,
    post_id: 5
  },

  {
    user_id: 2,
    post_id: 1
  },
  {
    user_id: 2,
    post_id: 2
  },
  {
    user_id: 2,
    post_id: 3
  },
  {
    user_id: 2,
    post_id: 4
  },
  {
    user_id: 2,
    post_id: 5
  },

  {
    user_id: 3,
    post_id: 2
  },
  {
    user_id: 3,
    post_id: 3
  },

  {
    user_id: 4,
    post_id: 1
  },
  {
    user_id: 4,
    post_id: 2
  },

  {
    user_id: 5,
    post_id: 4
  },
  {
    user_id: 5,
    post_id: 5
  },
];

const seedPaws = () => Paws.bulkCreate(pawsdata);

module.exports = seedPaws;
