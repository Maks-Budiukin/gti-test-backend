import { ApiProperty } from '@nestjs/swagger';
import { ParcelTypes } from './parcel-types.dto';
import { IsEnum, IsString } from 'class-validator';

export class ParcelCreateDto {
  @ApiProperty({
    example: 'London',
    description: 'The city from which the parcel is sent',
  })
  @IsString()
  from: string;

  @ApiProperty({
    example: 'Paris',
    description: 'The city to which the parcel is sent',
  })
  @IsString()
  to: string;

  @ApiProperty({
    example: 'Drinks',
    description: 'Type of parcel (gadgets, drinks, clothes, medicines, other)',
  })
  @IsEnum(ParcelTypes)
  type: ParcelTypes;

  @ApiProperty({
    example: 'High quality craft beer. FRAGILE AND VERY EXPENSIVE!',
    description: 'Parcel description',
  })
  @IsString()
  description: string;
}
