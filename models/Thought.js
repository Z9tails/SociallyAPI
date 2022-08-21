const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');



const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal),
    },
  },

  {
    toJSON: {
      getters: true,
    },

    _id: false,
  }
);


const ThoughtSchema = new Schema(
  {
    //creates thought with length limits.
    thoughtText: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
      maxLength: 280,
    },

    //assigns date/time to thought
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },

    //assigns thought to username
    username: {
      type: String,
      required: true,
    },
    //assigns reaction to thought
    reactions: [ReactionSchema],
    
  },
);

//get total number of reactions 
 ThoughtSchema.virtual('reactionCount').get(function() {
   return this.reactions.length;
 });

const Thought = model('Thought', ThoughtSchema);

//exports thought with text, time of creation, username, reaction to nosql.
module.exports = Thought;
