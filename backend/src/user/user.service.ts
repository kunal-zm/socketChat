import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { user } from './Schema';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(user.name) private UserModel:Model<user>){}
  async getAllUsers(){
    try{
      const data=await this.UserModel.find();
      return data;
    }catch(err){
      throw new Error('Failed to get all users');
    }
  }
  async create(createUserDto: CreateUserDto) {
    try{
      const newUser=new this.UserModel(createUserDto);
      const salt=10;
      const hashpassword=await bcrypt.hash(newUser.password,salt);
      newUser.password=hashpassword;
      return newUser.save();
    }
    catch(err){
      throw new Error('Failed to create user');
    }
  }

  async getUser(loginUserDto:UpdateUserDto){
    try{
      const {email,password}=loginUserDto;
      const existedUser=await this.UserModel.findOne({email}).exec();
      let access=await bcrypt.compare(password,existedUser.password);
      if(!access){
        throw new NotFoundException('password')
      }
      return existedUser;
    }catch(err){
      throw new Error('Failed to get user')
    }
  }
}
