import { IsNotEmpty } from "class-validator";
import { player } from "src/players/interface/player.interface";
import { Result } from "../inteface/matches.interface";

export class MatchesDto {
  
  @IsNotEmpty()
  def: player;

  @IsNotEmpty()
  result: Array<Result>;

}