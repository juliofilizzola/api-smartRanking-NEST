import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MatchesDto } from './dto/matches.dto';
import { Match } from './inteface/matches.interface';

@Injectable()
export class MatchesService {
  constructor(
    @InjectModel("matches") private readonly MatchModel: Model<Match>
  ) {}

  async newMatch(newMatch: MatchesDto): Promise<Match> {
    const match = new this.MatchModel(newMatch);
    const result = await match.save();
    return result;
  }

  async getMatchById(id: string): Promise<Match> {
    const result = await this.MatchModel.findById({ _id: id })
    .populate('players');
    return result;
  }

  async getMatch(): Promise<Match[]> {
    const result = await this.MatchModel.find().populate('players');
    return result;
  }

  async deleteMatch(id: string): Promise<any> {
    const result = await this.MatchModel.findByIdAndDelete(id);
    return result;
  }

  async updateMatch(id: string, matchUp: MatchesDto): Promise<Match> {
    const result = await this.MatchModel.findByIdAndUpdate(id, matchUp);
    return result;
  }
}
