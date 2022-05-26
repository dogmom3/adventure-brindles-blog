const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Paw } = require("../../models");
const withAuth = require("../../utils/auth");

// GET ALL POSTS
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: [
      "id",
      "content",
      "title",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM paw WHERE post.id = paw.post_id)"
        ),
        "paw_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//GET POST BY ID
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "content",
      "title",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM paw WHERE post.id = paw.post_id)"
        ),
        "paw_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//CREATE POST
console.log("file");
router.post("/", withAuth, (req, res) => {
  console.log("hit?-", req.body);
  Post.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log('what the error is',err);
      res.status(500).json(err);
    });
});
//UPDATE POST WITH PAW
router.put("/give_paw", withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Post.give_paw(
    { ...req.body, user_id: req.session.user_id },
    { Paw, Comment, User }
  )
    .then((updatedPawData) => res.json(updatedPawData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//UPDATE POST CONTENT
router.put("/:id", withAuth, (req, res) => {
  console.log('save')
  Post.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//DELETE POST
router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
