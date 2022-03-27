module.exports = (sequelize, Sequelize) => {
    return sequelize.define("query_attr", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: Sequelize.INTEGER,
            allowNull: false,
            comment: "1范围匹配，2精准匹配"
        },
        options: {
            type: Sequelize.TEXT('tiny'),
            allowNull: false,
            comment: "具体的查询选项，通过数组的方式存储，如['3英寸', '5英寸', '7英寸']"
        },
        externalAttrId: {
            type: Sequelize.INTEGER,
            allowNull: true,
            comment: "关联的扩展属性id，如果为空，说明是商品基本属性"
        },
        basicAttrKey: {
            type: Sequelize.STRING,
            allowNull: true,
            comment: "关联的基本属性字段名，如果为空，说明关联的是扩展属性"
        }
    }, {
        tableName: "query_attr"
    });
};