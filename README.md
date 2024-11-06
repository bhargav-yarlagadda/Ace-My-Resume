# Resume Builder

A full-stack resume builder application that allows users to create, manage, and export resumes. This project uses **Clerk** for user authentication, **Strapi** as the backend for content management, and **React** with **TypeScript** for the frontend.

---

## Features

- **User Authentication**: Secure sign-in and sign-up using **Clerk**.
- **Resume Management**: Users can create, edit, and delete resumes.
- **Dynamic Forms**: Sections for personal info, work experience, education, skills, etc.
- **Export Options**: Export resumes in **PDF** format.
- **Backend Management**: Manage data through **Strapi's CMS**.
- **Type Safety**: Built with **TypeScript** for improved code reliability.
- **Responsive UI**: Designed with **Tailwind CSS** for mobile-first, responsive UI.

---

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS (optional for styling)
- **Backend**: Strapi (Node.js-based CMS)
- **Authentication**: Clerk (for user authentication)
- **Deployment**: Netlify/Vercel (Frontend), Heroku/Render (Backend)

---

## Getting Started

### Prerequisites

- **Node.js** (v14+)
- **Yarn** or **npm**
- **Strapi** (for backend CMS setup)
- **Clerk** account for authentication setup

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/resume-builder.git
cd resume-builder
npm run install
```

#### 1. start the front end

```bash
  npm run dev
```

#### 2. Clone the backend and set it up accordingly

create _.env_

```bash
# Server
HOST=0.0.0.0
PORT=1337

# Secrets (you will get these from Strapi & Clerk setup)
APP_KEYS=KEY
API_TOKEN_SALT=TOKEN
ADMIN_JWT_SECRET=JWT_SECRET
TRANSFER_TOKEN_SALT=TOKEN

# Database (choose the database of your preference, default is SQLite)
DATABASE_CLIENT=sqlite
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=false
DATABASE_FILENAME=.tmp/data.db

# JWT Secret for Strapi authentication
JWT_SECRET=v1YwRAmOwqm4JfnqiPz5CQ==

```

### install the deps

```bash
npm install
```

### run the server

```bash

cd strapibackend
npm run develop
```

Here's the enhanced Markdown README for your Resume Builder application, including detailed instructions for using Clerk for authentication and Strapi for the backend:

markdown
Copy code
# Resume Builder

A full-stack resume builder application that allows users to create, manage, and export resumes. This project uses **Clerk** for user authentication, **Strapi** as the backend for content management, and **React** with **TypeScript** for the frontend.

---

## Features

- **User Authentication**: Secure sign-in and sign-up using **Clerk**.
- **Resume Management**: Users can create, edit, and delete resumes.
- **Dynamic Forms**: Sections for personal info, work experience, education, skills, etc.
- **Export Options**: Export resumes in **PDF** format.
- **Backend Management**: Manage data through **Strapi's CMS**.
- **Type Safety**: Built with **TypeScript** for improved code reliability.
- **Responsive UI**: Designed with **Tailwind CSS** for mobile-first, responsive UI.

---

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS (optional for styling)
- **Backend**: Strapi (Node.js-based CMS)
- **Authentication**: Clerk (for user authentication)
- **Deployment**: Netlify/Vercel (Frontend), Heroku/Render (Backend)

---

## Getting Started

### Prerequisites

- **Node.js** (v14+)
- **Yarn** or **npm**
- **Strapi** (for backend CMS setup)
- **Clerk** account for authentication setup

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/resume-builder.git
cd resume-builder
2. Setup the Backend (Strapi)
Navigate to the Strapi backend directory:
bash
Copy code
cd strapi-backend
Create a .env file for configuration:
Create the .env file in the strapi-backend folder and add the following configuration:

env
Copy code
# Server
HOST=0.0.0.0
PORT=1337

# Secrets (you will get these from Strapi & Clerk setup)
APP_KEYS=KEY
API_TOKEN_SALT=TOKEN
ADMIN_JWT_SECRET=JWT_SECRET
TRANSFER_TOKEN_SALT=TOKEN

# Database (choose the database of your preference, default is SQLite)
DATABASE_CLIENT=sqlite
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=false
DATABASE_FILENAME=.tmp/data.db

# JWT Secret for Strapi authentication
JWT_SECRET=v1YwRAmOwqm4JfnqiPz5CQ==
Install dependencies:
bash
Copy code
npm install
Run the Strapi backend:
bash
Copy code
npm run develop
This will start your Strapi server at http://localhost:1337 by default.
```
### 3. Setup the Frontend (React + Clerk Authentication)
Navigate to the frontend directory:
Configure Clerk:
Sign up for a Clerk account at Clerk.
Create a new React application in your Clerk dashboard to get the API keys.
Add the Clerk keys to your frontend environment configuration:
Create a .env file in the frontend directory.
Add the following environment variables:
env
Copy code
```bash
REACT_APP_CLERK_FRONTEND_API=your-clerk-frontend-api-url
REACT_APP_CLERK_API_KEY=your-clerk-api-key
```