const  User  = require('../models/User');

const UserController = {
    // createUser
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },
  
  
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        res.sendStatus(400);
      });
  },

  // get one user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => {
        if(!dbUserData) {
                    res.status(404).json({ message: 'No user found' })
                    return;}
        res.json(dbUserData)})
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },



  // update user by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // delete user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
         if(!dbUserData){
                res.status(400).json({ message: 'No user found' });
                return;
            }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  //friend functions
  //add friend
 addFriend({ params }, res) {
    User.findOneAndUpdate({_id: params.id}, {$push:{friends: params.friendId}}, {new: true, runValidators: true})
      .then(dbUserData =>  {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found' });
                    return;
                } res.json(dbUserData);
              })
      .catch(err => res.json(err));
  },

  removeFriend({ params, }, res) {
    User.findOneAndUpdate({ _id: params.id }, {$pull:{friends: body.friendId}}, {new: true} )
      .then(dbUserData => {
                if(!dbUpdatedUser) {
                    return res.status(404).json({ message: 'No friend found' })
                }
         res.json(dbUserData);
              })
      .catch(err => res.json(err));
  },

};


module.exports = UserController;
