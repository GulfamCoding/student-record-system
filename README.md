
# 🧑‍🎓 Student Record System API

A secure and simple backend API for managing student records — built with Node.js, Express, and MongoDB.

> 🧪 Example:

To access protected routes, add this header in your HTTP requests:

```
Authorization: Bearer <your-jwt-token>
```

### Example: Create a new student

**Request:**

POST `/api/v1/students`  
Headers:  
`Authorization: Bearer <your-jwt-token>`

Body (JSON):

```json
{
  "name": "Ali Khan",
  "rollNumber": "12345",
  "grade": "9th"
}
```

**Response:**

```json
{
  "status": "success",
  "data": {
    "_id": "645f4e...",
    "name": "Ali Khan",
    "rollNumber": "12345",
    "grade": "9th",
    "createdAt": "2025-06-21T12:34:56.789Z"
  }
}
```

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)

---

## 🔐 Features

- User Signup/Login with JWT Authentication  
- Role-based access control (Admin/Teacher)  
- Create, Read, Update, and Delete (CRUD) student records  
- Protected routes using middleware  
- MongoDB database with Mongoose schema validation  

## 📦 Tech Stack

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JSON Web Tokens (JWT)  
- bcrypt.js  

## 🚀 API Endpoints

### 🔑 Auth

| Method | Endpoint            | Description          |
|--------|---------------------|----------------------|
| POST   | /api/v1/auth/signup | Signup a new user    |
| POST   | /api/v1/auth/login  | Login and get JWT    |

### 🎓 Students (Protected)

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| GET    | /api/v1/students     | Get all students    |
| GET    | /api/v1/students/:id | Get single student  |
| POST   | /api/v1/students     | Create new student  |
| PATCH  | /api/v1/students/:id | Update student      |
| DELETE | /api/v1/students/:id | Delete student      |

> 🔐 All `/students` routes require a Bearer Token in the `Authorization` header.

## 🛠️ How to Run

1. Clone the repo  
2. Run `npm install`  
3. Start MongoDB locally  
4. Run `node app.js`  

---

## ✅ Next Step: Deploy it online (Render or Cyclic)

Would you like me to:  
- Deploy it for you on **Render** (free, easy, professional)?  
- Or provide a step-by-step deployment guide so you can do it yourself?

Let me know — let’s launch it! 🚀

---

## 👤 Author

Gulfam Zafar — Backend Developer  
[Your GitHub Link] | [Your LinkedIn] | [Your Website]
=======