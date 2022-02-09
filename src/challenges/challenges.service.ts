import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChallengesDto } from './dtos/createChallenges.dto';
import { Challenges } from './interface/challenges.interface';

@Injectable()
export class ChallengesService {
  constructor(
    @InjectModel("challenges") private readonly ChallengesModel: Model<Challenges>
  ) {}

  async newChallenges(challengesNew: CreateChallengesDto): Promise<Challenges> {
    const challenges = new this.ChallengesModel(challengesNew);
    const result = challenges.save();
    return result;
  }

  async getChallenges(): Promise<Challenges[]> {
    const result = await this.ChallengesModel.find()
      .populate("playes")
      .populate("matches")
    return result;
  }
  
}
