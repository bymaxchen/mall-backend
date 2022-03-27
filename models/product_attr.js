module.exports = (sequelize, Sequelize) => {
    return sequelize.define("product_attr", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        externalAttrId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            comment: "关联扩展属性id"
        },
        textValue: {
            type: Sequelize.TEXT('tiny'),
            allowNull: true,
            comment: "文本属性值"
        },
        numberValue: {
            type: Sequelize.STRING,
            allowNull: true,
            comment: "数值属性值"
        }
    }, {
        tableName: "product_attr"
    });
};