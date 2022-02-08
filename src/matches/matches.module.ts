import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchesSchema } from 'src/schema/matches.schema';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'matches', schema: MatchesSchema }]),
  ],
  providers: [MatchesService],
  controllers: [MatchesController]
})
export class MatchesModule {}
