const express = require('express');
const { request } = require('../app');
const router = express.Router();

/* GET posts listing. */

router.get('/article', function(req, res, next) {
    res.send({ post: 'Article' });
});

router.get('/title', function(req, res, next) {
    res.send({ post: "It's Post Title" });
});

module.exports = router;