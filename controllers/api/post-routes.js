const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Paw } = require('../../models');
const withAuth = require('../../utils/auth');

// GET ALL POSTS
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'content',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM paw WHERE post.id = paw.post_id)'), 'paw_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//GET POST BY ID
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
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
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//CREATE POST
router.post('/', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//UPDATE POST WITH PAW
router.put('/give_paw', withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Post.give_paw({ ...req.body, user_id: req.session.user_id }, { Paw, Comment, User })
    .then(updatedPawData => res.json(updatedPawData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//UPDATE POST CONTENT
router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//DELETE POST
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;



// const router = require("express").Router();
// const { Post, User, Paws, Comment } = require("../../models");
// const sequelize = require("../../config/connection");
// const withAuth = require('../../utils/auth');

// //GET ALL POSTS
// router.get('/', (req, res) => {
//   console.log('========');
//   Post.findAll({
//     // order: [["created_at", "DESC"]],
//     attributes: [
//       "id",
//       "post_url",
//       "title",
//       "created_at",
//       [
//         sequelize.literal(
//           "(SELECT COUNT(*) FROM paws WHERE post.id = paws.post_id)"
//         ),
//         "paws_count",
//       ],
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
//         include: {
//           model: User,
//           attributes: ["username"],
//         }
//       },
//       {
//         model: User,
//         attributes: ["username"],
//       },
//     ],
//   })
//     .then((dbPostData) => res.json(dbPostData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// //GET SINGLE POST
// router.get("/:id", (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id,
//     },
//     attributes: [
//       "id",
//       "post_url",
//       "title",
//       "created_at",
//       [
//         sequelize.literal(
//           "(SELECT COUNT(*) FROM paws WHERE post.id = paws.post_id)"
//         ),
//         "paws_count",
//       ],
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
//         include: {
//           model: User,
//           attributes: ["username"],
//         },
//       },
//       {
//         model: User,
//         attributes: ["username"],
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       if (!dbPostData) {
//         res.status(404).json({ message: "No post found with this id" });
//         return;
//       }
//       res.render('single-post',{post});
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// //CREATE POST
// router.post("/", 
// // withAuth, 
// (req, res) => {
//   Post.create({
//     title: req.body.title,
//     post_url: req.body.post_url,
//     user_id: req.body.user_id,
//   })
//     .then((dbPostData) => res.json(dbPostData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// //PUT POSTS UPVOTE ?THIS IS PAWS?
// router.put("/upvote", withAuth, (req, res) => {
// //  if(req.session){
//    Post.upvote({...req.body, user_id: req.session.user_id}, {Paws, Comment, User})
//     .then((updatedPostData) => res.json(updatedPostData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// //UPDATE POST
// router.put("/:id", withAuth, (req, res) => {
//   Post.update(
//     {
//       title: req.body.title,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((dbPostData) => {
//       if (!dbPostData) {
//         res.status(404).json({ message: "No post found with this id" });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// //DELETE POST
// router.delete("/:id", withAuth, (req, res) => {
//   console.log('id', req.params.id);
//   Post.destroy({
//     where: {
//       id: req.params.id,
//     }
//   })
//     .then((dbPostData) => {
//       if (!dbPostData) {
//         res.status(404).json({ message: "No post found with this id" });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
