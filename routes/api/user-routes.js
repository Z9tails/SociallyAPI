const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);
router.route("/").get(getUsers);
router.route("/").post(createUser);
router.route("/").delete(deleteUser);
router.route("/").put(updateUser);
router.route("/").get(getUserById);
// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
