const express = require('express');
const router = express.Router();

/* GET test listing. */
router.get('/testing', function (req, res, next) {
    console.log(res.send);
    res.send('respond with a resource');
});

router.get('/:testing2', function(req, res, next) {
    console.log(res.send, req.params);
    res.send({ title: 'TESTING response' }) + req.params.testing;
});

module.exports = router;