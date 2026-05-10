
# TaskFlow Pro – Full Stack Assessment Project

## Overview
TaskFlow Pro is a project and task management platform built for team collaboration.  
The application supports authentication, role-based access control, dashboard analytics, project tracking, and task assignment.

This project was designed specifically according to the Ethara AI assessment requirements.

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt

---

## Features

### Authentication
- Register/Login
- JWT based authentication
- Password hashing
- Protected routes

### Role-Based Access
- Admin
- Manager
- Employee

### Project Management
- Create projects
- Assign tasks
- Track progress
- Task status updates

### Dashboard
- Total projects
- Completed tasks
- Pending tasks
- User analytics

### UI/UX
- Responsive design
- Loading states
- Validation handling
- Clean modern interface

---

## Folder Structure

frontend/
backend/

---

## Setup

### Backend
cd backend
npm install
npm run dev

### Frontend
cd frontend
npm install
npm start

### Fullstack Deployment
To run the fullstack app from the repository root after building the frontend:

```bash
npm install
npm run build
npm start
```

This serves the frontend build from the backend server, which is ideal for deployment on Railway or other Node hosting platforms.

### Railway Deployment

#### Prerequisites
- Railway account
- MongoDB database (MongoDB Atlas recommended)
- Git repository with this code

#### Step-by-Step Deployment

1. **Create Railway Project**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Connect your repository

2. **Configure Environment Variables**
   In your Railway project settings, add these environment variables:
   ```
   MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database
   JWT_SECRET=your_very_secure_secret_key_here
   PORT=5000
   NODE_ENV=production
   ```

3. **Deployment Configuration**
   The project includes:
   - `railway.json` - Railway configuration
   - `nixpacks.toml` - Build instructions
   - `Procfile` - Start command
   
   Railway will automatically:
   - Install backend dependencies
   - Install frontend dependencies  
   - Build the frontend
   - Start the Node.js server

4. **Monitor Deployment**
   - Check the "Logs" tab for build progress
   - Once deployed, Railway will provide a URL
   - The app will serve both frontend and backend from the same URL

#### Manual Build (if needed)
If automatic build fails, you can set:
- Build Command: `npm install && npm run build`
- Start Command: `cd frontend/backend && node server.js`

---

## Environment Variables

Copy `backend/.env.example` to `backend/.env` and update the values:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000

Optionally, copy `frontend/.env.example` to `frontend/.env` to override the API URL:

REACT_APP_API_URL=http://localhost:5000

The backend uses MongoDB for authentication, projects, and tasks.

> Note: Project and task creation is restricted to `admin` and `manager` roles. Employees can view tasks and update task status if they are the assignee.

---

## Submission Notes
This project focuses on:
- Clean architecture
- Scalable backend
- Reusable frontend components
- Proper API structure
- Human-written UI and workflow

