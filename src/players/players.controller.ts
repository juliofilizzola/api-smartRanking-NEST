import { Body, Controller, Post, Put } from '@nestjs/common';
import { createPlayerDto } from './dtos/createPlayer.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playerServices: PlayersService) {}

  @Post('/new')
  async createNewPlayer(@Body() newPlayer: createPlayerDto) {

  }

  @Put('/updateRegister')
  async updatePlayer(@Body()setUpdate ) {

  }

}
