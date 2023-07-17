# Web Application with Redux, JWT Authentication, and Database Integration

This project is a web application that utilizes React with Redux for global state management, JWT authentication and authorization for user authentication, and a preferred database for data storage. It includes separate user and admin functionalities.

## Features

### User Side

- **Login/Register**: Users can create an account or log in to an existing account.
- **Home Page**: Displays a user's homepage with navigation to their profile.
- **User Profile Page**: Allows users to view and update their profile information, including uploading a profile image.

### Admin Side

- **Login**: Admins can log in to access the admin functionality.
- **User Data Management**: Admins can view and search user data.
- **Create, Delete, and Edit User Data**: Admins have the ability to create new user accounts, delete existing accounts, and edit user information.

## Technologies Used

- Frontend: React, Redux
- Backend: Django Rest Framework
- Database: Postgres

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Rahil-Nelliyali/Django-React-Authentication.git
```

2. Install dependencies:

```bash
cd frontend
npm install
```

3. Start the frontend development server:

```bash
npm start
```

4. Set up and start the backend server according to the instructions provided in the backend repository.

5. Access the application by opening `http://localhost:3000` in your web browser.

## Configuration

Make sure to update the necessary configuration files for both the frontend and backend:

- Frontend: Update the API endpoint URLs in the relevant files (e.g., `src/api.js`) to match your backend server's address.
- Backend: Configure the database connection settings in the backend project to match your preferred database.





