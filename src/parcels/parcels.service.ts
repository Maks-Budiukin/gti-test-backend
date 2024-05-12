import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Parcel, ParcelDocument } from './parcels.model';
import { Model } from 'mongoose';
import { ParcelCreateDto } from './dto/parcel-create.dto';
import { ParcelResponseDto } from './dto/parcel-response.dto';
import { ParcelUpdateDto } from './dto/parcel-update.dto';

@Injectable()
export class ParcelsService {
  constructor(
    @InjectModel(Parcel.name)
    private readonly parcelModel: Model<ParcelDocument>,
  ) {}

  async expraFunc(): Promise<void> {
    const x = 15;
    return;
  }
  
  async createParcel(dto: ParcelCreateDto): Promise<ParcelResponseDto> {
    const newParcel = await this.parcelModel.create(dto);
    return newParcel;
  }

  async getAllParcels(): Promise<ParcelResponseDto[]> {
    const allParcels = await this.parcelModel.find();
    return allParcels;
  }

  async getParcelById(_id: string): Promise<ParcelResponseDto> {
    const parcel = await this.parcelModel.findOne({ _id });
    return parcel;
  }

  async updateParcel(
    _id: string,
    dto: ParcelUpdateDto,
  ): Promise<ParcelResponseDto> {
    const updatedParcel = await this.parcelModel.findByIdAndUpdate(_id, dto, {
      new: true,
    });
    return updatedParcel;
  }

  async deleteParcel(_id: string): Promise<ParcelResponseDto> {
    const deletedParcel = await this.parcelModel.findByIdAndDelete(_id);
    return deletedParcel;
  }
}
