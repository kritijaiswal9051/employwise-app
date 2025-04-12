# EmployWise User Management App

A React application that integrates with the Reqres API to perform basic user management functions.

## Features

- User authentication
- List users with pagination
- Edit user details
- Delete users
- Responsive design using Bootstrap
- Error handling and notifications

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup Instructions

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd employwise-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173)

## Login Credentials

Use the following credentials to log in:
- Email: eve.holt@reqres.in
- Password: cityslicka

## Technologies Used

- React (Vite)
- React Router DOM
- Axios for API calls
- Bootstrap for styling
- React Toastify for notifications

## Features Implemented

1. Authentication Screen
   - Login form with email and password
   - Token-based authentication
   - Error handling for invalid credentials

2. Users List
   - Paginated list of users
   - Card layout with user details
   - Edit and Delete options for each user
   - Responsive grid layout

3. Edit User
   - Pre-filled form with user details
   - Form validation
   - Success/error notifications
   - Cancel option to return to users list

## API Integration

The application uses the Reqres API (https://reqres.in) for all operations:
- POST /api/login - Authentication
- GET /api/users - Fetch users list
- PUT /api/users/{id} - Update user
- DELETE /api/users/{id} - Delete user
