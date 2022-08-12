const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
    
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of comments and replies on retrieval
Schema.virtual('reactionCount').get(function() {
  return this.reaction.reduce(
    (total, reaction) => total + reaction.replies.length + 1,
    0
  );
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
