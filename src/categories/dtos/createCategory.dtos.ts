import { IsEmail, isEmpty, IsEmpty, IsString } from "class-validator";

export class createCategoryDto {
  @IsEmpty()
  @IsString()
  readonly category: string;

  @IsEmpty()
  @IsEmail()
  readonly email: string;
  
  @IsEmpty()
  @IsString()
  readonly name: string;
}