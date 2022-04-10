import { Module } from '@nestjs/common';
import { DatasetService, PrismaService, UserService } from '@imagene/lib';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService, PrismaService, DatasetService],
  // exports: [PrismaService, UserService],
})
export class AppModule {}
