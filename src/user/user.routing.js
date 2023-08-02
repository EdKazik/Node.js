const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

/* GET users listing. */

router.get('/', function(req, res, next) {
    res.send('users');
});

router.get('/:id', controller.getOneUser);

router.post('/', controller.createUser);

router.delete('/:id', controller.deleteUser);

router.patch('/:id', controller.updateUser);

// router.get('/admin', function(req, res, next) {
//     res.send({ name: "It's Admin" });
// });

// router.get('/moderator', function(req, res, next) {
//     res.send({ name: "It's Moderator" });
// });

// router.get('/:userId', function (req, res, next) {
//     console.log(req.params)
//     res.send('userId: ' + req.params.userId);
// });

module.exports = router;