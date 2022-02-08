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
}
