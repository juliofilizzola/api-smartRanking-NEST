import { Injectable, Logger } from '@nestjs/common';
import { createPlayerDto } from './dtos/createPlayer.dto';
import { updatePlayerDtos } from './dtos/updatePlayer.dto';
import { player } from './interface/player.interface';

@Injectable()
export class PlayersService {
  private readonly logger = new Logger(PlayersService.name);

  async createPlayer(player: createPlayerDto) {
    this.logger.log(`create Player: ${player}`);
  }~

  async getPlayer() {

  }

  async getPlayerById(id: number) {

  }

  async getPlayerByName(name: string) {

  }

  async updatePlayer(id: number, upPlayer: updatePlayerDtos) {
    
  }

  async deletedPlayer(id: number) {

  }


}
