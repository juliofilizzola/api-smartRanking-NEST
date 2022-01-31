import { IsEmail, IsString } from "class-validator";

export class updatePlayerDtos {

  @IsString()
  readonly name?: string;

  @IsString()
  readonly phoneCel?: string;

  @IsEmail()
  readonly email?: string;
}