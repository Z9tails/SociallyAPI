const router = require("express").Router();

// retrievel
const {
  getAllThought,
  getThoughtById,
  createThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction,
  
} = require("../../controllers/thought-controller");

// /api/thoughts router
router
.route("/")
.get(getAllThought)
.post(createThought);


// router id routes
router
.route("/:id")
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

//add reaction route
router
.route("/:thoughtId/reactions")
.post(addReaction);

//delete reaction route
router
.route("/:thoughtId/reactions/:reactionID")
.delete(removeReaction);

//exports thought router
module.exports = router;
