module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define(
    "comments",
    {
      cid: {
        type: Sequelize.default.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      movie_id: {
        type: Sequelize.BIGINT,
      },
      name: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.TEXT,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return Comment;
};
