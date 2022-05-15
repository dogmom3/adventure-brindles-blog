const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'blair',
    email: 'blair.seivers@gmail.com',
    password: 'password123'
  },
  {
    username: 'waldo',
    email: 'waldo.puppito@yahoo.com',
    password: 'password123'
  },
  {
    username: 'arlene',
    email: 'sassybitch@dogmail.com',
    password: 'password123'
  },
  {
    username: 'violet',
    email: 'tripawd@dogmail.com',
    password: 'password123'
  },
  {
    username: 'botwin',
    email: 'myboy@bestdogs.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
