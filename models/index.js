const User = require('./User');
const Post = require('./Post');
const Paws = require('./Paws');
const Comment = require('./Comment');

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

//many-to-many association
User.belongsToMany(Post, {
    through: Paws,
    as: 'pawed_posts',
    foreignKey: 'user_id'
  });
  Post.belongsToMany(User, {
    through: Paws,
    as: 'pawed_posts',
    foreignKey: 'post_id'
  });

  //one-to-many user vote associations
  Paws.belongsTo(User, {
    foreignKey: 'user_id'
  });
  Paws.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  User.hasMany(Paws, {
    foreignKey: 'user_id'
  });
  Post.hasMany(Paws, {
    foreignKey: 'post_id'
  });

  //comment associations
  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });

module.exports = { User, Post, Paws, Comment };