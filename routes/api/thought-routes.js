const router = require('express').Router();

// retrievel
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction,
  
} = require('../../controllers/thought-controller');

// /api/thoughts routing
router
.route('/')
.get(getAllThoughts)
.post(createThought);


// router id routes
router
.route('/:thoughtID')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

//add reaction route
router
.route('/:thoughtID/reactions')
.post(addReaction);

//deelte reaction route
router
.route('/:thoughtID/reactions/:reactionID')
.delete(removeReaction);

//exports thought router
module.exports = router;
