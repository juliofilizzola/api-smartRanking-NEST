import { Document } from "mongoose";

export interface player extends Document {
  readonly phoneCel: string,
  readonly email: string,
  name: string,
  ranking: string,
  position: number,
  urlPhoto: string,
}