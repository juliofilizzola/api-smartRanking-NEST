import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { MatchesDto } from './dto/matches.dto';
import { MatchesService } from './matches.service';

@Controller('api/v1/matches')
export class MatchesController {
  constructor(private readonly matchService: MatchesService){}

  @Post('/new')
  @UsePipes(ValidationPipe)

  async setNewMatch(@Body() match: MatchesDto) {
    const result = await this.matchService.newMatch(match);
    return result;
  }

  @Get('/all')
  async getAllMatch() {
    const result = await this.matchService.getMatch();
    return result;
  }

  @Get('/:id')
  async getMatchById(@Param('id') id: string) {
    const result = await this.matchService.getMatchById(id);
    return result;
  }

  @Delete('/delete/:id')
  async deleteMatch(@Param('id') id: string) {
    const result = await this.matchService.deleteMatch(id);
    return result;
  }

  @Put('/up/:id')
  async updateMatch(
    @Param('id') id: string,
    @Body() matchUp: MatchesDto
  ) {
    const result = await this.matchService.updateMatch(id, matchUp);
    return result;
  }
}
