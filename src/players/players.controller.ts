import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createPlayerDto } from './dtos/createPlayer.dto';
import { updatePlayerDtos } from './dtos/updatePlayer.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playerServices: PlayersService) {}

  @Post('/new')
  async createNewPlayer(@Body() newPlayer: createPlayerDto) {
    return this.playerServices.createPlayer(newPlayer);
  }

  @Put('/updateRegister/:id')
  async updatePlayer(@Param('id') id: number ,@Body() setUpdate: updatePlayerDtos) {
    return this.playerServices.updatePlayer(id, setUpdate);
  };

  @Get('/Players')
  async getPlayers() {
    return this.playerServices.getPlayer();
  }

  @Get('/Players/:id')
  async getPlayersByID(@Param('id') id: number) {
    return this.playerServices.getPlayerById(id);
  }

  @Get('/Players/:name')
  async getPlayersByName(@Param('name') name: string) {
    return this.playerServices.getPlayerByName(name);
  }

  @Delete('/Deleted/:id')
  async deletedPlayer(@Param('id') id: number) {
    return this.playerServices.deletedPlayer(id);
  }
  
}
