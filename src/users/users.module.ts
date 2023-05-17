import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersSchema } from "./users.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
     imports: [MongooseModule.forRoot('mongodb://localhost:27017/usersDB'),
    MongooseModule.forFeature([{ name: 'users', schema: UsersSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
  })
  export class   UsersModule {}