import { z } from 'zod';

export const bookingZodSchema = z.object({
    body: z.object({
        userId: z.string(),
        bikeId: z.string(),
        startTime: z.date(),
        returnTime: z.date(),
        totalCost: z.number().positive('Total cost must be a positive number'),
        isReturned: z.boolean().optional().default(false),
    })
});
