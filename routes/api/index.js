const router = require('express').Router();
const UserRoutes = require('./user-routes');
const ThoughtRoutes = require('./thought-routes');

// force router to use thought roughts and user routs.
router.use('/thoughts', ThoughtRoutes);
router.use('/users', UserRoutes);

//exports router
module.exports = router;
