const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Paw extends Model {}

Paw.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'paw'
  }
);

module.exports = Paw



// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Paws extends Model {}

// Paws.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     user_id: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'user',
//           key: 'id'
//         }
//       },
//       post_id: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'post',
//           key: 'id'
//         }
//       }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'paws'
//   }
// );

// module.exports = Paws;