import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CitiesDocument = Cities & Document;

@Schema()
export class Cities{
    @Prop()
    cityName: string;    

    @Prop()
    state : string;
}

export const citiesSchema = SchemaFactory.createForClass(Cities)

