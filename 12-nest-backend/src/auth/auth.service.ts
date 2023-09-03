import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

import * as brcrypt from 'bcryptjs';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt.paypload';
import { LoginResponse } from './interfaces/login-response';
import { RegisterDto } from './dto/register.dto';


@Injectable()
export class AuthService {


  constructor(
    @InjectModel( User.name ) 
      private userModel: Model<User>,
      private jwtService: JwtService
  ){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try{

      const { password, ...userData} = createUserDto;
      const newUser = new this.userModel({
        password: brcrypt.hashSync( password, 10 ),
        ...userData
      });

      await newUser.save();
      const { password:_, ...user } = newUser.toJSON();

      return user;
      //TODO:
      
      
      //Generar JWT
      

    }catch (error) {
      if( error.code === 11000){
        throw new BadRequestException(`${ createUserDto.email } already exist`)
      }
      throw new InternalServerErrorException('Something went wrong')
    }
  }

  async register( registerDto: RegisterDto ): Promise<LoginResponse>{
    
    const user = await this.create(registerDto);

    return{
      user: user,
      token: this.getJwt({ id: user._id })
    }

  }

  async login( loginDto: LoginDto):Promise<LoginResponse>{

    const { email, password } = loginDto;

    //? Comprobar si el correo existe
    const user = await this.userModel.findOne({ email });
    if( !user ) {
      throw new UnauthorizedException('Not valid credentials - email')
    }
    
    //? Comprobar si el password es correcto
    if( !brcrypt.compareSync( password, user.password )){
      throw new UnauthorizedException('Not valid credentials - password')
    }

    const { password:_, ...rest} = user.toJSON();

    return {
      user: rest,
      token: this.getJwt({ id: user.id }),
    }

  }

  findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  async findUserById( id: string) {
    const user = await this.userModel.findById(id);
    const { password, ...rest} = user.toJSON();
    return rest
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  getJwt( payload: JwtPayload ){
    const token = this.jwtService.sign(payload);
    return token;
  }

}
