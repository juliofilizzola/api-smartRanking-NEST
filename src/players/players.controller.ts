import { Body,
  Controller,
  Delete,
  NotFoundException,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createPlayerDto } from './dtos/createPlayer.dto';
import { updatePlayerDtos } from './dtos/updatePlayer.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playerServices: PlayersService) {}

  @Post('/new')
  @UsePipes(ValidationPipe)
  async createNewPlayer(@Body() newPlayer: createPlayerDto) {
    const result = await this.playerServices.createPlayer(newPlayer);
    if (!result) {
      throw new NotFoundException("Ainda não tem nenhuma categoria registrada.");
    }
    return result;
  }

  @Put('/updateRegister/:id')
  @UsePipes(ValidationPipe)
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
