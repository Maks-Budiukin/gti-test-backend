import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
import { ParcelTypes } from './dto/parcel-types.dto';

export type ParcelDocument = HydratedDocument<Parcel>;

@Schema({ versionKey: false, timestamps: true })
export class Parcel {
  _id?: ObjectId;

  @Prop()
  from: string;

  @Prop()
  to: string;

  @Prop({ enum: ParcelTypes })
  type: ParcelTypes;

  @Prop()
  description: string;
}

export const ParcelSchema = SchemaFactory.createForClass(Parcel);
