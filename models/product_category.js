module.exports = (sequelize, Sequelize) => {
    return sequelize.define("product_category", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pId: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {
        tableName: "dm_product_category"
    });
};