# API Documentation

This document provides a summary of the available API endpoints for the Node.js Express REST API.

## Base URL
`http://localhost:3000`

## Health Check

### Get Health Status
- **URL:** `/`
- **Method:** `GET`
- **Description:** Returns the health status of the API.
- **Sample Response:**
  ```json
  {
    "status": "success",
    "message": "API is healthy"
  }
  ```

## Users

### Get All Users
- **URL:** `/api/users`
- **Method:** `GET`
- **Description:** Retrieves a list of all users.

### Create User
- **URL:** `/api/users`
- **Method:** `POST`
- **Description:** Creates a new user.
- **Payload:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "password": "securepassword123",
    "status": 1
  }
  ```

### Get User by ID
- **URL:** `/api/users/:id`
- **Method:** `GET`
- **Description:** Retrieves a single user by their ID.

### Update User
- **URL:** `/api/users/:id`
- **Method:** `PUT`
- **Description:** Updates an existing user's information.
- **Payload:**
  ```json
  {
    "name": "Jane Smith",
    "status": 0
  }
  ```

### Delete User
- **URL:** `/api/users/:id`
- **Method:** `DELETE`
- **Description:** Deletes a user by their ID.

## Seeding Sample Data
To populate the database with sample data, run:
```bash
node src/config/seed.js
```
