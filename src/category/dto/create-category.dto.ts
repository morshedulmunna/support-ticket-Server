import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public type: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public assign_to: string;
}
