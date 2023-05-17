import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.entity';
import { CreateUsersDto } from './dto/createusers.dto';
import {md5}  from 'md5';
import * as dotenv from 'dotenv';
@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {
    dotenv.config();
  }

  async createService(usersDto: CreateUsersDto): Promise<Users> {
    let users = new Users();
    users = usersDto.toEntityFull(); 
    users.password =  this.criptografia(usersDto);
    const usersResponse = new this.usersModel(users);
    return await usersResponse.save();
  }

  async findAllService(): Promise<Users[]> {
    return await this.usersModel.find().exec();
  }

  async findByCodigoService(codigo: string): Promise<Users[]> {
    return await this.usersModel.find({ codigo }).exec();
  }
  async updatedService(id: string, users: Users): Promise<Users> {
    return this.usersModel.findByIdAndUpdate(id, users).exec();
  }

  async removeService(id: string) : Promise<Users>{
  return await this.usersModel.findOneAndDelete({ _id: id }).exec();
  }

  criptografia(usersDto : CreateUsersDto){
    let bloco1 = md5('123456' + process.env.CHAVE );
    let bloco2 =  md5(usersDto.email + process.env.CHAVE );
    let bloco3 =md5(new Date().toISOString + process.env.chave);
    return bloco1 + bloco2 +bloco3;
  }

}
 
 