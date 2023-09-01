import { ValidationPipe, Controller, Get, Post, Body, Patch, Param, Res, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,private jwtService:JwtService) { }

  @Post('add')
  async create(@Res() response:Response,
    @Body(new ValidationPipe({ transform: true })) createUserDto: CreateUserDto) {
    const newUser = await this.userService.create(createUserDto)
    if (!newUser) {
      throw new HttpException(
        'Invalid request body',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    return response.status(HttpStatus.CREATED).json({
      success:true,
      message:'user added',
      newUser
    });
  }


  @Get('login')
  async userLogin(@Res() response:Response,
  @Body() loginDto:UpdateUserDto 
  ){
    const existingUser=await this.userService.getUser(loginDto);
    const payload={
      email:existingUser.email
    }
    const token=this.jwtService.sign(payload);
    if(!existingUser){
      throw new HttpException(
        'Not Found ',
        HttpStatus.NOT_FOUND
      );
    }
    return response.status(HttpStatus.CREATED).json({
      success:true,
      message:'user found',
      existingUser,
      token
    });
  }

  @Get('all-users')
  async allUsers(@Res() response:Response){
    const data=await this.userService.getAllUsers();
    if(!data){
      throw new HttpException(
        'Not Found ',
        HttpStatus.NOT_FOUND
      );
    }
    return response.status(HttpStatus.OK).json({
      success:true,
      messsage:'All the users',
      data
    })
  }
}
