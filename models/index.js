const Post = require('./Post');
const User = require('./User');
const Paw = require('./Paw');
const Comment = require('./Comment');

//USER ASSOCIATIONS
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.belongsToMany(Post, {
  through: Paw,
  as: 'pawed_posts',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: Paw,
  as: 'pawed_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

//Paw ASSOCIATIONS
Paw.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Paw.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Paw, {
  foreignKey: 'user_id'
});

Post.hasMany(Paw, {
  foreignKey: 'post_id'
});

//COMMENT ASSOCIATIONS
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Post, Paw, Comment };