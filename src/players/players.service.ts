import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createPlayerDto } from './dtos/createPlayer.dto';
import { updatePlayerDtos } from './dtos/updatePlayer.dto';
import { player } from './interface/player.interface';

@Injectable()
export class PlayersService {
  private readonly logger = new Logger(PlayersService.name);

  constructor(@InjectModel('players') private readonly playerModel: Model<player>) {}

  async createPlayer(player: createPlayerDto): Promise<player | object > {
    this.logger.log(`create Player: ${player}`);
    const createPlayer = new this.playerModel(player);
    return createPlayer.save();
  }

  async getPlayer(): Promise<player[]> {
    return this.playerModel.find().exec();

  }

  async getPlayerById(id: string): Promise<player> {
    const response = await this.playerModel.findOne({ _id: id });
    return response;
  }

  async getPlayerByName(name: string): Promise<player> {
    const response = await this.playerModel.findOne({ name: name });
    return response;
  }

  async updatePlayer(id: string, upPlayer: updatePlayerDtos): Promise<player> {
    const responseUpdate = await this.playerModel.findOneAndUpdate({_id: id},
      {$set: upPlayer}).exec();
    return responseUpdate;
  }

  async deletedPlayer(id: string): Promise<any> {
    const responseDelete = await this.playerModel.deleteOne({_id: id});
    return responseDelete;
  }

}
