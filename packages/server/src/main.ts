import { NestFactory } from '@nestjs/core';

import { APIModule } from './modules/api.module';

import {Test} from '@imagene/lib';

const t1 = new Test('test depend');

console.log(t1.get_string());

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(APIModule);
  const config = app.get('ConfigService').envConfig;
  app.enableCors({ origin: config.CORS_WHITELIST.split(',') });
  await app.listen(config.PORT);
}

bootstrap();
