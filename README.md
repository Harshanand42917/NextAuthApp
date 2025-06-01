
# 🔐 Next.js 15 Full Stack Authentication System

A secure full-stack authentication system built with **Next.js 15 App Router**, **MongoDB**, **JWT**, **Bcrypt**, and **Bootstrap 5**. This application includes user **Signup**, **Login**, and a **Protected Profile Page**, following modern security best practices.

---

## 📸 Features

- 🔐 **JWT Authentication**: Secure session management with JWTs stored in HttpOnly cookies  
- 🔒 **Password Encryption**: User passwords are hashed using Bcrypt  
- 🧑 **Signup & Login**: With full validation and error handling  
- 👤 **Protected Routes**: Access to profile page is restricted to authenticated users  
- 🧱 **Modular Folder Structure**: Built with App Router in Next.js 15  
- 💅 **Responsive UI**: Styled using Bootstrap 5  

---

## 🛠 Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router), [Bootstrap 5](https://getbootstrap.com/)  
- **Backend**: [Node.js](https://nodejs.org/), [JWT](https://jwt.io/), [Bcrypt](https://www.npmjs.com/package/bcryptjs)  
- **Database**: [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nextjs-auth-app.git
cd nextjs-auth-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
```

### 4. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to view the app.

---

## 🔒 Authentication Flow

### 👨‍💼 Signup

- User registers with email and password  
- Password is hashed with Bcrypt  
- User document is stored in MongoDB  

### 🔑 Login

- User logs in using valid credentials  
- If correct, a JWT is generated  
- JWT is stored in an HttpOnly cookie  

### 📅 Access Profile

- Profile page checks for valid JWT from cookie  
- If valid, user data is returned  
- Else, user is redirected to login  

---

## 📁 Project Structure

```plaintext
├── app/
│   ├── api/
│   │   └── auth/
│   ├── profile/
│   └── layout.jsx
├── components/
├── controllers/
├── models/
├── utils/
├── public/
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

---

## 🧪 Future Improvements

- Add social logins (Google, GitHub)
- Password reset functionality
- Role-based access control
- Email verification

---

## 📄 License

This project is licensed under the MIT License. Feel free to use and modify it.

---

## 💬 Feedback

If you have any questions or suggestions, feel free to open an issue or submit a pull request!
