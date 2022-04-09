import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { StatusModule } from './status/status.module';
import { AppModule } from './app/app.module';

@Module({
  imports: [ConfigModule, StatusModule, AppModule],
})
export class APIModule {}
