const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');
const Comment = require('./Comment');

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// many-to-many association 
User.belongsToMany(Post, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'user_id'
  });
  Post.belongsToMany(User, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'post_id'
  });

  //one-to-many user vote associations
  Like.belongsTo(User, {
    foreignKey: 'user_id'
  });
  Like.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  User.hasMany(Like, {
    foreignKey: 'user_id'
  });
  Post.hasMany(Like, {
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

module.exports = { User, Post, Like, Comment };