import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class user{

    @Prop({required:true})
    username:string

    @Prop({required:true})
    email:string

    @Prop({required:true})
    password:string
}

export type userDocument=Document & user;
export const userSchema=SchemaFactory.createForClass(user); 