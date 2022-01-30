import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersModule } from './players/players.module';
import 'dotenv/config'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
}

const password = process.env.DB_PASS;

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://${password}:smartDev@smartranking.f9xnj.mongodb.net/ranking?retryWrites=true&w=majority`, options), PlayersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
