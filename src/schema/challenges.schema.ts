import * as mongoose from 'mongoose';

export const challengesSchema = new mongoose.Schema({
  dateChallenge: { type: Date },
  status: { type: String },
  RequestDate: { type: Date },
  ResponseDate: { type: Date },
  requester: { type: mongoose.Schema.Types.ObjectId, ref: "players" },
  category: { type: String },
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "players"
  }],
  matches: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "matches"
  },
}, { timestamps: true, collection: 'challenges', versionKey: false });