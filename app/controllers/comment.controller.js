const db = require("../models");
const Comment = db.comments;
const Op = db.Sequelize.Op;

// Create and Save a new comment
exports.create = (req, res) => {
  // Validate request
  const id = req.params.id;

  if (!req.params.id) {
    const response = {
      result: false,
      message: "Please select a movie!",
    };
    res.send(response);
    return;
  }

  if (!req.body.name) {
    const response = {
      result: false,
      message: "Please input your name!",
    };
    res.send(response);
    return;
  }

  if (!req.body.comment) {
    const response = {
      result: false,
      message: "Please input your comment!",
    };
    res.send(response);
    return;
  }

  // Create a Comment
  const commentObj = {
    movie_id: req.params.id,
    name: req.body.name,
    comment: req.body.comment,
  };

  // Save Comment in the database
  Comment.create(commentObj)
    .then((data) => {
      const response = {
        result: true,
        message: "Success!",
        comment: data,
      };
      res.send(response);
    })
    .catch((err) => {
      const response = {
        result: false,
        message: "Some error occurred while adding the comment.",
      };
      res.send(response);
    });
};

// Retrieve all comments for movie from the database.
exports.findAll = (req, res) => {
  Comment.findAll({ where: { movie_id: req.params.id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments.",
      });
    });
};

// Delete a Comment with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Comment.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Comment was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Comment with id=${id}. Maybe Comment was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Comment with id=" + id,
      });
    });
};
