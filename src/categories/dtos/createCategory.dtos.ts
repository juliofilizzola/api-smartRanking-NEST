import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from "class-validator";
import { event } from "../interfaces/categories.interface";

export class createCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly category: string;

  @IsNotEmpty()
  @IsString()
  description: string;
  
  @IsArray()
  @ArrayMinSize(1)
  event: Array<event>
}