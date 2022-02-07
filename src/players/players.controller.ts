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
    
    return result;
  }

  @Put('/updateRegister/:id')
  @UsePipes(ValidationPipe)
  async updatePlayer(@Param('id') id: number ,@Body() setUpdate: updatePlayerDtos) {
    const result = await this.playerServices.updatePlayer(id, setUpdate);
    if (!result) {
      throw new NotFoundException("Não existe nenhum jogador com esse id para ser atualizado.");
    }
    return result;
  };

  @Get('/Players')
  async getPlayers() {
    const result = await this.playerServices.getPlayer();
    if (!result) {
      throw new NotFoundException(
        "Ainda não tem nenhum jogador cadastrado no nosso banco de dados");
    }
    return result;
  }

  @Get('/Players/:id')
  async getPlayersByID(@Param('id') id: string) {
    const result = await this.playerServices.getPlayerById(id);
    if (!result) {
      throw new NotFoundException("Não existe o jogador com esse id");
    }
    return result;
  }

  @Get('/Players/:name')
  async getPlayersByName(@Param('name') name: string) {
    return this.playerServices.getPlayerByName(name);
  }

  @Delete('/Deleted/:id')
  async deletedPlayer(@Param('id') id: string) {
    return this.playerServices.deletedPlayer(id);
  }
  
}
