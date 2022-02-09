import { Body, Controller, Get, Post, Param } from '@nestjs/common';
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

  @Get('/get/:id')
  async getChallengeById(@Param('id') id: string) {
    const result = await this.ChallengesServices.getChallengeById(id);
    return result;
  }
}
