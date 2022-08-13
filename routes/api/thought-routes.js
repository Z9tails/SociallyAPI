const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getThoughtById
} = require('../../controllers/thought-controller');

// /api/thought/
router.route('/').get(getThought)
router.route('/').get(getThoughtById)
router.route('/').post(addThought);//need to push id to associated user id
router.route('/').put(updateThoughtById);
router.route('/').delete(removeThought);

// /api/thought/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeReaction);

// /api/thought/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReply);

module.exports = router;
