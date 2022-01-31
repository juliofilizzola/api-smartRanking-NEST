import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class createPlayerDto {

  @IsNotEmpty()
  @IsString()
  readonly phoneCel: string;

  @IsEmail()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;
}