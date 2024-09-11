# Bike Renting System Backend

## Project Overview

This project implements the backend for a **Bike Renting System** in the coastal town of Cox's Bazar. The system allows users to register, rent bikes, and manage bookings. The primary focus of this project is on **error handling**, **CRUD operations**, **authentication**, **authorization**, and **transactions**. It has been developed using **TypeScript** and **Node.js (Express.js)**, with **MongoDB** as the database, using **Mongoose** and **Zod** for schema validation.

## Story

In the bustling town of Cox's Bazar, known for its breathtaking beaches, Jhankar Mahbub, a local entrepreneur, launched a bike rental service to cater to the growing tourist demand. This system was built to handle user registrations, bike availability, and booking management efficiently, ensuring a seamless experience for both the business owner and the customers.

## Key Features

- **User Authentication**: Allows users to sign up, log in, and update their profiles.
- **Bike Management**: Admins can add, update, and delete bikes from the system.
- **Booking Management**: Users can rent available bikes, and admins can manage bike returns.
- **Role-based Authorization**: Separate roles for users and admins to access their respective features.
- **Error Handling**: Comprehensive error handling for invalid data, authorization, and not found routes.
- **Transaction Handling**: Ensures data integrity, particularly for the rental and return operations.

## Technology Stack

- **Programming Language**: TypeScript
- **Web Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Validation**: Zod for schema validation

## Models

### User Model
- **name**: User's full name.
- **email**: User's contact email.
- **password**: Hashed password for authentication.
- **phone**: User's phone number.
- **address**: Physical address.
- **role**: Either `admin` or `user`.

### Bike Model
- **name**: Name of the bike model.
- **description**: A short description of the bike.
- **pricePerHour**: Rental price per hour.
- **isAvailable**: Availability status of the bike (default: true).
- **cc**: Engine capacity in cubic centimeters.
- **year**: Manufacturing year of the bike.
- **model**: Model identifier for the bike.
- **brand**: Bike's brand.

### Booking Model
- **userId**: Reference to the User who rented the bike.
- **bikeId**: Reference to the Bike being rented.
- **startTime**: The time when the bike rental starts.
- **returnTime**: The time when the bike is returned.
- **totalCost**: The calculated total cost of the rental.
- **isReturned**: Whether the bike has been returned (default: false).

## API Endpoints

### Authentication Routes

- **Sign Up**  
  `POST /api/auth/signup`  
  Allows users to register.  
  Request Body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "1234567890",
    "address": "123 Main St, Anytown",
    "role": "user"
  }
