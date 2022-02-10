import { Module } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { ChallengesController } from './challenges.controller';
import { ChallengesSchema } from 'src/schema/challenges.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'challenges', schema: ChallengesSchema }])
  ],
  providers: [ChallengesService],
  controllers: [ChallengesController]
})
export class ChallengesModule {}
