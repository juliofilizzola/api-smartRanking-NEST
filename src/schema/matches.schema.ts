import * as mongoose from 'mongoose';

export const MatchesSchema = new mongoose.Schema({
  category: { type: String},
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "players"
  }],
  def: { type: mongoose.Schema.Types.ObjectId },
  result: [
    { set: { type: String } }
  ]
}, { timestamps: true, collection: 'players', versionKey: false });