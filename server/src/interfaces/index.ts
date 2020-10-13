import { Document } from 'mongoose';
import { IUser } from './user.interface';

export interface IStat extends Document {
  id: number;
  station: string;
  duration: number;
  tagUsed?: string | null;
  user: IUser;
  date: string;
}