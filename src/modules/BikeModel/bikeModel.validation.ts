import { z } from 'zod';

export const bikeZodSchema = z.object({
    body: z.object({
        name: z.string().min(1, 'Name is required'),
        description: z.string().min(1, 'Description is required'),
        pricePerHour: z.number(),
        isAvailable: z.boolean().optional().default(true),
        cc: z.number().positive('CC must be a positive number'),
        year: z.number().int().min(1900, 'Year must be a valid year'),
        model: z.string().min(1, 'Model is required'),
        brand: z.string().min(1, 'Brand is required'),
    })
});
