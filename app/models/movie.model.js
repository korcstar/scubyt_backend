module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define(
    "movies",
    {
      id: {
        type: Sequelize.default.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      genre: {
        type: Sequelize.STRING,
      },
      lead_studio: {
        type: Sequelize.STRING,
      },
      audience_score: {
        type: Sequelize.INTEGER,
      },
      profitability: {
        type: Sequelize.DOUBLE,
      },
      rotten_tomatoes: {
        type: Sequelize.INTEGER,
      },
      worldwide_gross: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return Movie;
};
