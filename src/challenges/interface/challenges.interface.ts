import { Document } from 'mongoose';

import { player } from "src/players/interface/player.interface";

export interface challenges extends Document {
  request: String,
  category: String, 
  players: Array<player>,
  matches: String
}