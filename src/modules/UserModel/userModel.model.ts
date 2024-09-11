import { Schema, model, Document } from 'mongoose';
import { TUser } from './userModel.interface';

// Mongoose schema for the User
const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'], 
    default: 'user',
    required: true,
  }
}, {
  timestamps: true, 
});

// Mongoose model for the User
const UserModel = model<TUser>('User', userSchema);

export default UserModel;
