import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsNotEmpty,
  IsEnum,
  IsIn,
} from 'class-validator';

export class UserListInputDTO {
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
