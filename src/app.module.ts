import { Module } from '@nestjs/common';
import { PlayersService } from './players/players.service';
import { PlayersController } from './players/players.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersModule } from './players/players.module';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false
  // useCreateIndex: true,
}

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://devSmart:smartDev@smartranking.f9xnj.mongodb.net/ranking?retryWrites=true&w=majority', options), PlayersModule],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class AppModule {}
