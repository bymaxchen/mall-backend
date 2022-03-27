const dbConfig = require("../config/db.config.js");
const { Sequelize, Op } =require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op;

db.productCategory = require("./product_category")(sequelize, Sequelize);
db.externalAttr = require("./external_attr")(sequelize, Sequelize);
db.productAttr = require("./product_attr")(sequelize, Sequelize);
db.queryAttr = require("./query_attr")(sequelize, Sequelize);

module.exports = db;