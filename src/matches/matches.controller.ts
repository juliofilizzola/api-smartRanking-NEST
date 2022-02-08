import { Body, Controller, Post } from '@nestjs/common';
import { MatchesDto } from './dto/matches.dto';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchService: MatchesService){}

  @Post('/newMatch')
  async setNewMatch(@Body() match: MatchesDto) {
    const result = await this.matchService.newMatch(match);
    return result;
  }

  // @Get('/match')
  // async 
}
