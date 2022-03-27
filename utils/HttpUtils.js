module.exports = {
  success: (res, data) => {
      res.json({
          code: 200,
          msg: 'success',
          data
      })
  }
};