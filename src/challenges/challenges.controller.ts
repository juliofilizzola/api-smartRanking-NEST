import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { CreateChallengesDto } from './dtos/createChallenges.dto';

@Controller('api/v1/challenges')
export class ChallengesController {
  constructor(private readonly ChallengesServices: ChallengesService) {}

  @Post('/new')
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

  @Delete('/delete/:id')
  async deleteChallenge(@Param('id') id: string) {
    const result = await this.ChallengesServices.deleteChallenge(id);
    return result;
  }

  @Put('/up/:id')
  async updateChallenge(
    @Param('id') id: string,
    @Body() upChallenges: CreateChallengesDto
  ) {
    const result = await this.ChallengesServices.upChallenge(id, upChallenges);
    return result;
  }
}
