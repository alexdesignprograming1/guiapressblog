const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },slug: {
    type: Sequelize.STRING,
    allowNull: false
  },body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Category.hasMany(Article) // Relação 1-p-M
Article.belongsTo(Category) // Relação 1-p-1

module.exports = Article;