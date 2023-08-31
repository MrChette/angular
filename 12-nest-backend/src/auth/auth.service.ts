import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';


@Injectable()
export class AuthService {


  constructor(
    @InjectModel( User.name ) 
      private userModel: Model<User>
  ){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try{
      const newUser = new this.userModel( createUserDto );

      //TODO:
      //Encriptar password

      //Guardar usuario

      //Generar JWT

      return await newUser.save();
    }catch (error) {
      if( error.code === 11000){
        throw new BadRequestException(`${ createUserDto.email } already exist`)
      }
      throw new InternalServerErrorException('Something went wrong')
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
