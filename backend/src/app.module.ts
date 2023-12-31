import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GateModule } from './gateway/gateway.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [UserModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/chat'),GateModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
