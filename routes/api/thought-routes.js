const router = require('express').Router();


const {
  getAllThoughts,
  getThoughtById,
  createThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction,
  
} = require('../../controllers/thought-controller');


router
.route('/')
.get(getAllThoughts)
.post(createThought);

router
.route('/:thoughtID')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

router
.route('/:thoughtID/reactions')
.post(addReaction);

router
.route('/:thoughtID/reactions/:reactionID')
.delete(removeReaction);


module.exports = router;
