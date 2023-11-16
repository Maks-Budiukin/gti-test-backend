import { ApiPropertyOptional } from '@nestjs/swagger';
import { ParcelTypes } from './parcel-types.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class ParcelUpdateDto {
  @ApiPropertyOptional({
    example: 'London',
    description: 'The city from which the parcel is sent',
  })
  @IsString()
  @IsOptional()
  from: string;

  @ApiPropertyOptional({
    example: 'Paris',
    description: 'The city to which the parcel is sent',
  })
  @IsString()
  @IsOptional()
  to: string;

  @ApiPropertyOptional({
    example: 'Drinks',
    description: 'Type of parcel (gadgets, drinks, clothes, medicines, other)',
  })
  @IsEnum(ParcelTypes)
  @IsOptional()
  type: ParcelTypes;

  @ApiPropertyOptional({
    example: 'High quality craft beer. FRAGILE AND VERY EXPENSIVE!',
    description: 'Parcel description',
  })
  @IsString()
  @IsOptional()
  description: string;
}
