# Uber Clone API Documentation
---
## Overview

This is the backend API for the Uber Clone application. It provides endpoints for user authentication, user management, and other core functionalities of the application.

---

## Table of Contents

1. [Base URL](#base-url)
2. [Authentication](#authentication)
3. [User Endpoints](#user-endpoints)
4. [Error Codes](#error-codes)
5. [Request/Response Format](#requestresponse-format)
6. [Environment Variables](#environment-variables)
7. [Running Locally](#running-locally)
8. [Testing](#testing)
9. [Conclusion](#conclusion)

---

## Base URL

The base URL for all endpoints is:

## Authentication

- All API requests (except for public routes like registration and login) require authentication.
- Authentication is done via a **Bearer Token** in the `Authorization` header.

---

## User Endpoints

### 1.  */api/users/register* - `POST` 

#### Description
This endpoint is used to register a new user by providing the user's details.
 
##### Request Body
```
{
  "fullname": {
     `"firstname"`: (string),
     `"lastname"`: (string)
  },
   "email": (email),
   "password": (string)
}
```
##### Response
 - Success (201)
``` 
{
  "token": (JWT token),
  "user": {
    "id": (string),
    "firstname": (string),
    "lastname": (string),
    "email": (email)
  }
}
```
 - Error (400): If the required fields are missing.
``` 
{
  "errors": [
    {
      "msg": "All fields (firstname, lastname, email, password)
              are required.",
      "param": "fullname",
      "location": "body"
    }
  ]
}
```
### 2.  */api/users/login* - `POST` 

#### Description
This endpoint is used to login user by providing the user's details.
 
##### Request Body
```
{
   "email": (email),
   "password": (string)
}
```
##### Response
 - Success (201)
``` 
{
  "token": (JWT token),
  "user": {
    "id": (string),
    "firstname": (string),
    "lastname": (string),
    "email": (email)
  }
}
```
 - Error (401): If the required fields are wrong.
``` 
{
      "message": "Invalid email or password"
}
```

---
### Error Codes
The API returns standard HTTP status codes to indicate the status of the request:

- 200 OK – The request was successful.
- 201 Created – A resource was created successfully (e.g., user registration).
- 400 Bad Request – The request is malformed or missing required parameters.
- 401 Unauthorized – The user is not authenticated or the provided token is invalid.
- 403 Forbidden – The user does not have permission to perform the action.
- 404 Not Found – The requested resource could not be found.
- 500 Internal Server Error – There was an error processing the request on the server
---
### Request/Response Format
- All request bodies are in JSON format.
- All responses are returned in JSON format.
---
### Environment Variables
The application requires the following environment variables to be set:

- **DB_CONNECT**: MongoDB connection string (e.g., mongodb+srv://-username:password@cluster.mongodb.net/dbname).
- **JWT_SECRET**: Secret key for JWT token signing.
- **PORT**: Port to run the backend (default is 4000).
- **NODE_ENV**: Environment mode (e.g., development or production).

---
### Running Locally
**1. Clone the repository:**

```git clone https://github.com/yourusername/uber.git ```

**2. Navigate to the project folder:**
```
cd uber/backend
```
**3. Install dependencies:**
```
npm install
```
**4. Set environment variables in a .env file:**
```
DB_CONNECT=mongodb+srv://username:password@cluster.mongodb.net/uber
JWT_SECRET=your_jwt_secret_key
PORT=4000
```
**5. Run the application:**

```
npm start
```
The API will now be running on http://localhost:4000.

---
### Conclusion

This Markdown file contains all the key sections, including endpoint details, request/response formats, error codes, and more..

