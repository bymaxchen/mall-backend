const express = require('express');
const router = express.Router();
const { productCategory, Op } = require('../models');
const { success } = require('../utils/HttpUtils');

router.post('/create', async (req, res) => {
    const { name, pId } = req.body || {};

    await productCategory.create({
        name,
        pId
    });

    success(res);
});

/**
 * 修改分类名称
 */
router.post('/update', async (req, res) => {
    const { id, name } = req.body || {};

    await productCategory.update({
        name,
    }, {
        where: {
            id,
        }
    })

    success(res);
});

/**
 * 根据ID删除分类以及它的子类
 */
router.post('/delete', async (req, res) => {
    const { id } = req.body || {};

    await productCategory.destroy({
        where: {
            [Op.or] : [{
                id,
            }, {
                pId: id
            }]
        }
    });

    success(res);
});

/**
 * 获取所有商品分类
 */
router.post('/list', async (req, res) => {
    const list = await productCategory.findAll({
        raw: true
    });

    const result = [];

    for(const oItem of list) {
        if (oItem.pId === 0) {
            result.push(oItem);
            const children = [];
            for(const iItem of list) {
                if (iItem.pId === oItem.id) {
                    children.push(iItem);
                }
            }
            if (children.length !== 0) {
                oItem.children = children;
            }
        }
    }

    success(res, result);
});

module.exports = router;