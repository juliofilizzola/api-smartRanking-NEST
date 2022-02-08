import { Document } from 'mongoose';

import { player } from "src/players/interface/player.interface";
import { ChallengesStatus } from '../enum/challengesStatus.enum';

export interface challenges extends Document {
  dateChallenge: Date,
  status: ChallengesStatus,
  request: String,
  RequestDate: Date,
  ResponseDate: Date,
  category: String, 
  players: Array<player>,
  matches: String
}