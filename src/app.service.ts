
import { CustomTransportStrategy, Server } from '@nestjs/microservices';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  
  mySuperLongProcessOfUser(data: any) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`done processing ${JSON.stringify(data)}`);
       }, 10000);
    });
  }




    // public async signup(data: CreateUs  erDto) {
    //   try {
    //     const { email, password, firstname, lastname } = data;
    //     const checkUser = await this.userRepository.findUserAccountByEmail(email);
    //     if (checkUser) {
    //       throw new HttpException('USER_EXISTS', HttpStatus.CONFLICT);
    //     }
    //     const hashPassword = this.createHash(password);
    //     const newUser = new User();
    //     newUser.email = data.email;
    //     newUser.password = hashPassword;
    //     newUser.name = name.trim();
    //     newUser.role = Role.USER;
    //     const user = await this.userRepository.save(newUser);
    //     const createTokenResponse = await firstValueFrom(
    //       this.tokenClient.send('token_create', JSON.stringify(user)),
    //     );
    //     delete user.password;
    //     return {
    //       ...createTokenResponse,
    //       user,
    //     };
    //   } catch (e) {
    //     throw new InternalServerErrorException(e);
    //   }
    // }

  }


