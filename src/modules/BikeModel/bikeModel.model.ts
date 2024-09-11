import { Schema, model } from 'mongoose';
import { TBike } from './bikeModel.interface';


const bikeSchema = new Schema<TBike>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  cc: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const BikeModel = model<TBike>('Bike', bikeSchema);
