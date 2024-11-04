# Resume Builder

A full-stack resume builder application that allows users to create, manage, and export resumes. This project uses **Clerk** for user authentication, **Strapi** as the backend for content management, and **React** with **TypeScript** for the frontend.

---

## Features

- **User Authentication**: Secure sign-in and sign-up using Clerk.
- **Resume Management**: Users can create, edit, and delete resumes.
- **Dynamic Forms**: Sections for personal info, work experience, education, skills, etc.
- **Export Options**: Export resumes in PDF format.
- **Backend Management**: Manage data through Strapi's CMS.
- **Type Safety**: Built with TypeScript for improved code reliability.

---

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS (optional for styling)
- **Backend**: Strapi (Node.js-based CMS)
- **Authentication**: Clerk
- **Deployment**: Netlify/Vercel (frontend), Heroku/Render (backend)

---

## Getting Started

### Prerequisites

- **Node.js** (v14+)
- **Yarn** or **npm**
- **Strapi** (for backend CMS setup)
- **Clerk** account for authentication setup

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/resume-builder.git
   cd resume-builder
  ```
2. **to run the backend**
   ```bash
  cd strapibackend
  #create .env
    
    # Server
    HOST=0.0.0.0
    PORT=1337

    # Secrets
    APP_KEYS=KEY
    API_TOKEN_SALT=TOKEN
    ADMIN_JWT_SECRET=JWT_SECRET
    TRANSFER_TOKEN_SALT=TOKEN
    # Database
    DATABASE_CLIENT=sqlite
    DATABASE_HOST=
    DATABASE_PORT=
    DATABASE_NAME=
    DATABASE_USERNAME=
    DATABASE_PASSWORD=
    DATABASE_SSL=false
    DATABASE_FILENAME=.tmp/data.db
    JWT_SECRET=v1YwRAmOwqm4JfnqiPz5CQ==
```
```bash
   cd strapibackend
    #run the server
    npm run develop

  ```
