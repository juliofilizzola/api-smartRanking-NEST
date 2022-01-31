import { ArrayMinSize, IsArray, IsEmpty, IsString } from "class-validator";
import { event } from "../interfaces/categories.interface";

export class createCategoryDto {
  @IsEmpty()
  @IsString()
  readonly category: string;

  @IsEmpty()
  @IsString()
  desciption: string;
  
  @IsArray()
  @ArrayMinSize(1)
  event: Array<event>
}