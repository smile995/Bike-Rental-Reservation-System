import { z } from 'zod';

// Zod validation schema for the User
const userValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    phone: z.string(),
    address: z.string().min(1, { message: "Address is required" }),
    role: z.enum(['admin', 'user'], { message: "Role must be either 'admin' or 'user'" })
  })
});

// Exporting for use
export default userValidationSchema;
