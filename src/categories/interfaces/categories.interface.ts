import { Document } from "mongoose";
import { player } from "src/players/interface/player.interface";

export interface event {
  name: string;
  operation: string;
  value: number;
}

export interface categories extends Document {
  readonly category: string;
  description: string;
  event: Array<event>
  players: Array<player>
}