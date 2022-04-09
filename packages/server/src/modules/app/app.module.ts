import { Module } from '@nestjs/common';
import { PrismaService, UserService } from '@imagene/lib';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService, PrismaService],
  // exports: [PrismaService, UserService],
})
export class AppModule {}
