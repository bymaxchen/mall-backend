module.exports = (sequelize, Sequelize) => {
    return sequelize.define("external_attr", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            comment: "属性名称"
        },
        key: {
            type: Sequelize.STRING,
            allowNull: false,
            comment: "属性key"
        },
        type: {
            type: Sequelize.INTEGER,
            allowNull: false,
            comment: "属性类型, 1文本，2数值"
        },
        categoryId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            comment: "分类id"
        },
    }, {
        tableName: "external_attr"
    });
};