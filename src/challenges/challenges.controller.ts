import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { CreateChallengesDto } from './dtos/createChallenges.dto';

@Controller('challenges')
export class ChallengesController {
  constructor(private readonly ChallengesServices: ChallengesService) {}

  @Post('new')
  async createNewChallenges(@Body() createChallenges: CreateChallengesDto) {
    const result = await this.ChallengesServices.newChallenges(createChallenges);
    return result;
  }

  @Get('/get')
  async getChallenges() {
    const result = await this.ChallengesServices.getChallenges();
    return result;
  }
}
