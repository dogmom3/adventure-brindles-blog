const User = require('./User');
const Post = require('./Post');
const Paws = require('./Paws');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'user_id',
onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
onDelete: 'CASCADE'
});

Post.hasMany(Paws, {
  foreignKey: 'post_id',
onDelete: 'CASCADE'
});



// //create associations
// User.hasMany(Post, {
//     foreignKey: 'user_id',
//   onDelete: 'CASCADE'

// });


// User.belongsToMany(Post, {
//     through: Paws,
//     as: 'pawed_posts',
//     foreignKey: 'user_id',
//   onDelete: 'CASCADE'

//   });
//   Post.belongsToMany(User, {
//     through: Paws,
//     as: 'pawed_posts',
//     foreignKey: 'post_id',
//   onDelete: 'CASCADE'
//   });

//   Paws.belongsTo(User, {
//     foreignKey: 'user_id',
//   onDelete: 'CASCADE'
//   });
//   Paws.belongsTo(Post, {
//     foreignKey: 'post_id',
//   onDelete: 'CASCADE'
//   });
//   User.hasMany(Paws, {
//     foreignKey: 'user_id',
//   onDelete: 'CASCADE'
//   });
 
//   Comment.belongsTo(Post, {
//     foreignKey: 'post_id',
//   onDelete: 'CASCADE'
//   });
//   User.hasMany(Comment, {
//     foreignKey: 'user_id',
//   onDelete: 'CASCADE'
//   });
  

module.exports = { User, Post, Paws, Comment };