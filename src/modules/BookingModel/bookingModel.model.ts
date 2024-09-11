import { Schema, model } from 'mongoose';
import { TBooking } from './bookingModel.interface';

const bookingSchema = new Schema<TBooking>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',   // Reference to User model
        required: true,
    },
    bikeId: {
        type: Schema.Types.ObjectId,
        ref: 'Bike',   // Reference to Bike model
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    returnTime: {
        type: Date,
        required: true,
    },
    totalCost: {
        type: Number,
        required: true,
    },
    isReturned: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export const BookingModel = model<TBooking>('Booking', bookingSchema);
