const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//CREATE POST MODEL
class Post extends Model {
  static give_paw(body, models) {
    return models.Paw.create({
      user_id: body.user_id,
      post_id: body.post_id
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id
        },
        attributes: [
          'id',
          'content',
          'title',
          'created_at',
          [sequelize.literal('(SELECT COUNT(*) FROM paw WHERE post.id = paw.post_id)'), 'paw_count']
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

//CREATE COLUMNS FOR POST MODEL
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;



// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// //CREATE POST MODEL
// class Post extends Model {
//   static uppaw(body, models) {
//     return models.Paws.create({
//       user_id: body.user_id,
//       post_id: body.post_id
//     }).then(() => {
//       return Post.findOne({
//         where: {
//           id: body.post_id
//         },
//         attributes: [
//           'id',
//           'post_url',
//           'title',
//           'created_at',
//           [sequelize.literal('(SELECT COUNT(*) FROM paws WHERE post.id = paws.post_id)'),
//             'paws_count']
//         ],
//         include: [
//           {
//             model: models.Comment,
//             attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//             include: {
//               model: models.User,
//               attributes: ['username']
//             }
//           }
//         ]
//       });
//     });
//   }
// }

// //CREATE FIELDS FOR POST MODEL
// Post.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       // primaryKey: true,
//     },
//     post_url: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         isURL: true
//       }
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "user",
//         key: "id",
//       },
//     },
//     content: {
//       type: DataTypes.STRING,
//       allowNull: false,
   
//     }
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "post",
//   }
// );

// module.exports = Post;
