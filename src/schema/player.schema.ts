import * as mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema({
  phoneCel: { type: String, unique: true },
  email: { type: String, unique: true },
  name: String,
  ranking: String,
  positon: Number,
  urlPhoto: String,
}, { timestamps: true, collection: 'players', versionKey: false });