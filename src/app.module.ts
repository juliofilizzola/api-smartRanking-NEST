import { Module } from '@nestjs/common';
import { PlayersService } from './players/players.service';
import { PlayersController } from './players/players.controller';

@Module({
  imports: [],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class AppModule {}
