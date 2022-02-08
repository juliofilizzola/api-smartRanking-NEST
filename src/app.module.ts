import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersModule } from './players/players.module';
import { CategoriesModule } from './categories/categories.module';
import { ChallengesModule } from './challenges/challenges.module';
import { MatchesController } from './matches/matches.controller';
import { MatchesModule } from './matches/matches.module';
import 'dotenv/config'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
}

const password = process.env.DB_PASS;

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://devSmart:${password}@smartranking.f9xnj.mongodb.net/ranking?retryWrites=true&w=majority`, options), CategoriesModule, PlayersModule, ChallengesModule, MatchesModule],
  controllers: [MatchesController],
  providers: [],
})
export class AppModule {}
