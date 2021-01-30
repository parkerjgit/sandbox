// router expose the api
const router = require('express').Router();

router.use('/xxx', xxxRouter);
router.use('/yyy', yyyRouter);

module.exports = require('./');
