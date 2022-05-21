const User = require('./User');
const Post = require('./Post');
const Paws = require('./Paws');
const Comment = require('./Comment');

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id',
  onDelete: 'SET NULL'

});
Post.belongsTo(User, {
    foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

//many-to-many association
User.belongsToMany(Post, {
    through: Paws,
    as: 'pawed_posts',
    foreignKey: 'user_id',
  onDelete: 'SET NULL'

  });
  Post.belongsToMany(User, {
    through: Paws,
    as: 'pawed_posts',
    foreignKey: 'post_id',
  onDelete: 'SET NULL'
  });

  //one-to-many user vote associations
  Paws.belongsTo(User, {
    foreignKey: 'user_id',
  onDelete: 'SET NULL'
  });
  Paws.belongsTo(Post, {
    foreignKey: 'post_id',
  onDelete: 'SET NULL'
  });
  User.hasMany(Paws, {
    foreignKey: 'user_id',
  onDelete: 'SET NULL'

  });
  Post.hasMany(Paws, {
    foreignKey: 'post_id',
  onDelete: 'SET NULL'

  });

  //comment associations
  Comment.belongsTo(User, {
    foreignKey: 'user_id',
  onDelete: 'SET NULL'
  });
  Comment.belongsTo(Post, {
    foreignKey: 'post_id',
  onDelete: 'SET NULL'
  });
  User.hasMany(Comment, {
    foreignKey: 'user_id',
  onDelete: 'SET NULL'
  });
  Post.hasMany(Comment, {
    foreignKey: 'post_id',
  onDelete: 'SET NULL'

  });

module.exports = { User, Post, Paws, Comment };