import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MatchesDto } from './dto/matches.dto';
import { MatchesService } from './matches.service';

@Controller('api/v1/matches')
export class MatchesController {
  constructor(private readonly matchService: MatchesService){}

  @Post('/newMatch')
  async setNewMatch(@Body() match: MatchesDto) {
    const result = await this.matchService.newMatch(match);
    return result;
  }

  @Get('/match')
  async getAllMatch() {
    const result = await this.matchService.getMatch();
    return result;
  }

  @Get('/match/:id')
  async getMatchById(@Param('id') id: string) {
    const result = await this.matchService.getMatchById(id);
    return result;
  }
}
