const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
    // sets user ID
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    
    //sets unique email to user
    email: {
      type: String,
      unique: true,
      required: true,
      match: [
        /.+@.+\..+/, 'Enter a valid e-mail address'],
    },
    
    //sets unique thought to user
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    //sets number of friends for user
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

//virtual for friendcount
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', UserSchema);

//exports user with username, email, thoughts, and friends 
module.exports = User;
