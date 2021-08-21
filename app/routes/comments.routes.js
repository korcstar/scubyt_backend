module.exports = (app) => {
  const comments = require("../controllers/comment.controller.js");

  var router = require("express").Router();

  // Create a new comment
  router.post("/:id", comments.create);

  // Retrieve a single Movie with id
  router.get("/:id", comments.findAll);

  // Delete a Movie with id
  router.delete("/:id", comments.delete);

  app.use("/api/comments", router);
};
