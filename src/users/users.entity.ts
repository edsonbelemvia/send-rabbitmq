import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose';

@Schema()
export class Users extends Document{
   @Prop()
   codigo: string;
   @Prop()
   name : string;
   @Prop() 
   email: string;
   @Prop()
   dataCompra: Date;
   @Prop()
   password: string;

}
export const UsersSchema = SchemaFactory.createForClass(Users);
