import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { user,userSchema } from './Schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/strategy/constants';

@Module({
  imports:[MongooseModule.forFeature([{name:user.name,schema:userSchema}]), JwtModule.register({
    secret:jwtConstants.secret,
    signOptions:{
      expiresIn:'7d'
    },
  })],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
