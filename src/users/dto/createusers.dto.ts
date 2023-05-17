import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Users } from "../users.entity";


export class CreateUsersDto {
  
    @IsString()
    @IsNotEmpty()
    codigo: string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;
 
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    datacompra: Date;

    @IsString()
    @MaxLength(250)
    @IsNotEmpty()
    password: string;

     public toEntityFull(): Users{
       let users = new Users();
        users.email = this.email;
        users.name= this.name;
        users.codigo = this.codigo;
        users.dataCompra = this.datacompra;
        users.password = this.password;
        return users;
    }
 
     public toEntityNeed(): Users{
        let users = new Users();
         users.codigo = this.codigo;
         users.dataCompra = this.datacompra;
         return users;
     }

}