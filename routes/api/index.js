const router = require('express').Router();
const UserRoutes = require('./user-routes');
const ThoughtRoutes = require('./thought-routes');


router.use('/thoughts', ThoughtRoutes);
router.use('/users', UserRoutes);

module.exports = router;
