import { Document } from "mongoose";
import { player } from "src/players/interface/player.interface";

export interface Match extends Document {
  category: string
  players: Array<player>
  def: player
  result: Result
}

export interface Result {
  set: string
}