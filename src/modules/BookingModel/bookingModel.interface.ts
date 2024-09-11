import { Types } from 'mongoose';

export type TBooking = {
  userId: Types.ObjectId;   // Reference to the User model
  bikeId: Types.ObjectId;   // Reference to the Bike model
  startTime: Date;
  returnTime: Date;
  totalCost: number;
  isReturned: boolean;
};
