const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

//USER ASSOCIATIONS
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});
//VOTE ASSOCIATIONS
Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});
//COMMENT ASSOCIATIONS
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
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };


// const User = require('./User');
// const Post = require('./Post');
// const Paws = require('./Paws');
// const Comment = require('./Comment');

// Post.belongsTo(User, {
//   foreignKey: 'user_id',
// onDelete: 'CASCADE'
// });

// Post.hasMany(Comment, {
//   foreignKey: 'post_id',
// onDelete: 'CASCADE'
// });

// Comment.belongsTo(User, {
//   foreignKey: 'user_id',
// onDelete: 'CASCADE'
// });

// Post.hasMany(Paws, {
//   foreignKey: 'post_id',
// onDelete: 'CASCADE'
// });



//MIGHT NOT NEED THESE?:

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
  

module.exports = { User, Post, Vote, Comment };