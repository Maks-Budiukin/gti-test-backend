import { ApiResponseProperty } from '@nestjs/swagger';
import { ParcelTypes } from './parcel-types.dto';
import { IsEnum, IsString } from 'class-validator';
import { Date, ObjectId } from 'mongoose';

export class ParcelResponseDto {
  @ApiResponseProperty({
    example: '64e7b40704f6b0d4d0440b26',
  })
  @IsString()
  _id: ObjectId;

  @ApiResponseProperty({
    example: 'London',
  })
  @IsString()
  from: string;

  @ApiResponseProperty({
    example: 'Paris',
  })
  @IsString()
  to: string;

  @ApiResponseProperty({
    example: 'Drinks',
  })
  @IsEnum(ParcelTypes)
  type: ParcelTypes;

  @ApiResponseProperty({
    example: 'High quality craft beer. FRAGILE AND VERY EXPENSIVE!',
  })
  @IsString()
  description: string;

  @ApiResponseProperty({
    example: '2023-11-16T15:23:16.326Z',
  })
  @IsString()
  createdAt?: Date;

  @ApiResponseProperty({
    example: '2023-11-16T15:23:16.326Z',
  })
  @IsString()
  updatedAt?: Date;
}
