const Sequelize = require('sequelize');

const sequelize = new Sequelize('just_tech_news_db', 'root', 'aaaaaa', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;