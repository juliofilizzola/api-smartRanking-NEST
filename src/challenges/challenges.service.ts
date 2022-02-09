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
      .populate("matches");
    
    return result;
  }

  async getChallengeById(id: string): Promise<Challenges> {
    const result = await this.ChallengesModel.findById({ _id: id })
      .populate("playes")
      .populate("matches");
    
    return result;
  }

  async deleteChallenge(id: string): Promise<any> {
    const result = await this.ChallengesModel.findByIdAndDelete({ _id: id });
    return result;
  }
}
