const router = require("express").Router();

// retrieval
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require("../../controllers/user-controller");

// api/user routing
router
  .route("/")
  .get(getAllUsers)
  .post(createUser);
  
// router id routing   
router
  .route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

//router friend
router
  .route ("/:userId/friends/:friendId")
  .post(addFriend)
  .delete(removeFriend);

// user router exports  
module.exports = router;
