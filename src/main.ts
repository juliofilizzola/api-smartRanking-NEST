import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { httpError } from './common/filters/http-error';
import * as momentTimezone from 'moment-timezone';
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalFilters(new httpError());
  Date.prototype.toJSON = function(): any {
    return momentTimezone(this)
      .tz('America/Sao_Paulo')
      .format('YYYY-MM-DD HH:mm:ss.SSS')
  }
  await app.listen(3000);
}
bootstrap();
