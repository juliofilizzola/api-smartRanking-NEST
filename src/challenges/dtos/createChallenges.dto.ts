import { ArrayMaxSize, ArrayMinSize, IsArray, IsDateString, IsNotEmpty } from 'class-validator';
import { player } from '../../players/interface/player.interface';

export class CreateChallengesDto {
  @IsNotEmpty()
  @IsDateString()
  dateChallenge: Date;

  @IsNotEmpty()
  requester: player;

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  players: Array<player>
}