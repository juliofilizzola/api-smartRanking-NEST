import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  category: { type: String, unique: true },
  description: { type: String },
  event: [
    {
      name: { type: String },
      operation: { type: String },
      value: { type: Number }
    }
  ],
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "players"
  }] 
}, { timestamps: true, collection: 'category', versionKey: false });