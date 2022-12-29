import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class UserListInputDTO {
  @IsOptional()
  @IsString()
  order: string;

  @IsOptional()
  @IsBoolean()
  asc: boolean;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsNumber()
  provinceId: number;

  @IsOptional()
  @IsNumber()
  cityId: number;

  @IsOptional()
  @IsNumber()
  condition: number;
}
