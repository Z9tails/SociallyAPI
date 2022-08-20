const router = require('express').Router();
const { Router } = require('express');
const {
  getAllThought,
  getThoughtById,
  addThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
  
} = require('../../controllers/thought-controller');
router
.route('/')
.get(getAllThought)
.post(addThought);

router
.route('/:thoughtID')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

router
.route('/:thoughtID/reactions')
.post(addReaction);

router
.route('/:thoughtID/reactions/:reactionID')
.delete(removeReaction);


module.exports = router;
