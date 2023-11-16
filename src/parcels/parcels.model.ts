import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type ParcelDocument = HydratedDocument<Parcel>;

export class Parcel {
  _id?: ObjectId;

  @Prop()
  from: string;

  @Prop()
  to: string;

  @Prop()
  type: string;

  @Prop()
  description: string;
}

export const ParcelSchema = SchemaFactory.createForClass(Parcel);
