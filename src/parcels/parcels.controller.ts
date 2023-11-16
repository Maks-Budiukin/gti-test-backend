import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { ParcelCreateDto } from './dto/parcel-create.dto';
import { ParcelResponseDto } from './dto/parcel-response.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Parcel } from './parcels.model';
import { ParcelUpdateDto } from './dto/parcel-update.dto';

@Controller('parcels')
export class ParcelsController {
  constructor(private readonly parcelsService: ParcelsService) {}

  @Post('')
  @ApiOperation({ summary: 'Create Parcel' })
  @ApiResponse({
    status: 201,
    description: 'Parcel created',
    type: ParcelResponseDto,
  })
  async createParcel(@Body() dto: ParcelCreateDto): Promise<ParcelResponseDto> {
    return this.parcelsService.createParcel(dto);
  }

  @Get('')
  @ApiOperation({ summary: 'Get all Parcels' })
  @ApiResponse({
    status: 200,
    description: 'List of Parcels',
    type: ParcelResponseDto,
  })
  async findAllParcels(): Promise<ParcelResponseDto[]> {
    return this.parcelsService.getAllParcels();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get one Parcel by ID' })
  @ApiResponse({
    status: 200,
    description: "One Parcel by it's ID",
    type: ParcelResponseDto,
  })
  async findById(@Param('id') _id: string): Promise<ParcelResponseDto> {
    return this.parcelsService.getParcelById(_id);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update one Parcel by ID' })
  @ApiResponse({
    status: 200,
    description: 'One updated Parcel',
    type: ParcelResponseDto,
  })
  async updateParcel(
    @Param('id') _id: string,
    @Body() dto: ParcelUpdateDto,
  ): Promise<ParcelResponseDto> {
    return this.parcelsService.updateParcel(_id, dto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete one Parcel by ID' })
  @ApiResponse({
    status: 200,
    description: 'One deleted Parcel',
    type: ParcelResponseDto,
  })
  async deleteParcel(@Param('id') _id: string): Promise<ParcelResponseDto> {
    return this.parcelsService.deleteParcel(_id);
  }
}
