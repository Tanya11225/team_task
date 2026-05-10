# TaskFlow Pro – Full Stack Assessment Project

[![Live Demo](https://img.shields.io/badge/Live-Demo-4461F2?style=for-the-badge&logo=railway)](https://teamtask-production-b010.up.railway.app)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)](https://reactjs.org)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat&logo=node.js)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.18.0-000000?style=flat&logo=express)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb)](https://mongodb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

🔗 **Live App:** https://teamtask-production-b010.up.railway.app

> A full-stack project and task management platform built for team collaboration with role-based access control, dashboard analytics, and real-time task tracking. Created for the Ethara AI Full Stack Assessment.

---

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/Tanya11225/team_task.git
cd team_task

# Install all dependencies
npm install

# Set up environment variables
cp backend/.env.example backend/.env
# Edit backend/.env with your MongoDB URI and JWT_SECRET

# Start the application
npm start
Visit http://localhost:5000 in your browser.
Features
🔐 Authentication & Authorization
User registration & login with JWT
Password hashing with bcrypt
Protected routes & role-based access control
Session management
👥 Role-Based Access Control
Role	Permissions
Admin	Full access: manage users, projects, tasks
Manager	Create/edit projects, assign tasks, view analytics
Employee	View assigned tasks, update task status
📊 Project Management
Create, edit, and delete projects
Assign team members to projects
Track project progress with visual indicators
Filter and search projects
✅ Task Management
Create tasks with titles, descriptions, and due dates
Assign tasks to team members
Update task status: Todo → In Progress → Done
Filter tasks by status, assignee, or project
📈 Dashboard Analytics
Total projects count
Completed vs. pending tasks
User activity metrics
Visual charts and statistics
UI/UX
Fully responsive design (mobile, tablet, desktop)
Loading states & skeleton screens
Form validation with user-friendly errors
Clean, modern interface with Tailwind CSS
Tech Stack
Frontend
Technology	Purpose
React 18	UI library
React Router	Client-side routing
Axios	HTTP client for API calls
Tailwind CSS	Utility-first styling
Context API	State management (Auth)

Backend
Technology	Purpose
Node.js	JavaScript runtime
Express.js	Web framework
MongoDB	NoSQL database
Mongoose	ODM for MongoDB
JWT	Authentication tokens
bcrypt	Password hashing
DevOps & Deployment
Tool	Purpose	
Railway	Cloud hosting & CI/CD	
Nixpacks	Auto-build configuration	
Git/GitHub	Version control	

📁 Folder Structure
team_task/
├── public/                 # React public assets
│   └── index.html          # HTML entry point
├── src/                    # React frontend source
│   ├── components/         # Reusable UI components
│   │   ├── DashboardPage.js
│   │   ├── LoginPage.js
│   │   ├── RegisterPage.js
│   │   ├── ProjectsPage.js
│   │   ├── TasksPage.js
│   │   └── ProtectedRoute.js
│   ├── App.js              # Main app component
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   ├── AuthContext.js      # Authentication context
│   └── api.js              # Axios API configuration
├── backend/                # Node.js/Express backend
│   ├── server.js           # Backend entry point
│   ├── models/             # Mongoose schemas
│   │   ├── User.js
│   │   ├── Project.js
│   │   ── Task.js
│   ├── routes/             # API route handlers
│   │   ├── auth.js
│   │   ├── projects.js
│   │   └── tasks.js
│   └── middleware/         # Auth & error middleware
├── package.json            # Root package configuration
├── railway.json            # Railway deployment config
├── nixpacks.toml           # Build instructions
├── server.js               # Production server (serves React build)
└── README.md               # This file
🔧 Environment Variables
Backend (backend/.env)
MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/taskflow
JWT_SECRET=your_super_secure_secret_key_here
PORT=5000
NODE_ENV=production
Frontend (frontend/.env or .env.local)
REACT_APP_API_URL=http://localhost:5000
🌐 Deployment (Railway)
One-Click Deploy
Go to railway.app
Click "New Project" → "Deploy from GitHub repo"
Connect your team_task repository
Railway auto-detects railway.json and builds automatically
License
Distributed under the MIT License. See LICENSE for more information.
MIT License

Copyright (c) 2026 TaskFlow Pro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.







Acknowledgments
React Documentation
Express.js Guide
MongoDB University
Tailwind CSS
Railway Documentation
📬 Contact
Developer: Tanya
GitHub: @Tanya11225
Project Link: https://github.com/Tanya11225/team_task
Live Demo: https://teamtask-production-b010.up.railway.app






