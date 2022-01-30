import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createPlayerDto } from './dtos/createPlayer.dto';
import { updatePlayerDtos } from './dtos/updatePlayer.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playerServices: PlayersService) {}

  @Post('/new')
  async createNewPlayer(@Body() newPlayer: createPlayerDto) {

  }

  @Put('/updateRegister')
  async updatePlayer(@Body() setUpdate: updatePlayerDtos ) {

  }

  @Get('/Players')
  async getPlayers() {

  }

  @Get('/Players/:id')
  async getPlayersByID(@Param() id: string) {

  }

  @Get('/Players/:name')
  async getPlayersByName(@Param() name: string) {

  }

  @Delete('/Deleted/:id')
  async deletedPlayer(@Param() id: string) {

  }
  
}
