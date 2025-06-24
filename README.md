# Chatty Social App

A full-stack social media application built with React (frontend) and Node.js/Express (backend).  
This project allows users to register, log in, create posts, like, comment, follow/unfollow users, and update their profiles.

---

## Features

- **User Authentication:** Register, login, and logout with JWT-based authentication.
- **Multi-theming:** Change light/dark mode
- **Profile Management:** Update profile info and upload profile/cover images.
- **Posts:** Create, view, and delete posts with image support.
- **Likes & Comments:** Like/unlike posts and add comments.
- **Follow System:** Follow and unfollow other users.
- **Responsive UI:** Modern, responsive design using React and SCSS.
- **API:** RESTful backend with Express and MySQL.

---

## Tech Stack

- **Frontend:** React, React Router, Context API, SCSS, Axios, React Query
- **Backend:** Node.js, Express, MySQL, JWT, bcryptjs, cookie-parser, cors
- **Other:** Nodemon (dev), PowerShell scripts for housekeeping

---

## Folder Structure

```
Chatty/         # React frontend
  src/
    components/
    context/
    pages/
    App.js
    axios.js
api/            # Node.js backend
  controllers/
  routes/
  connect.js
  index.js
  package.json
.history/       # (ignored by git, used for local file history)
scripts/
   cleanup.ps1     # PowerShell script to clean redundant files
.gitignore
```

---

## Getting Started

### Prerequisites

- Node.js & npm
- MySQL database

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2. Setup the Backend

```bash
cd api
npm install
```

- Configure your MySQL connection in `connect.js`.
- Start the backend server:

```bash
npm start
```

### 3. Setup the Frontend

```bash
cd ../Chatty
npm install
npm start
```

- The frontend will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Housekeeping

- **Redundant File Cleanup:**  
  Use `cleanup.ps1` to remove old file versions (with timestamps) and keep only the latest in all folders.
  ```powershell
  powershell -ExecutionPolicy Bypass -File .\cleanup.ps1
  ```

- **.history Folder:**  
  The `.history` folder is used for local file history and is **ignored by git**.

---

## Environment Variables

- Create a `.env` file in `api/` for sensitive config (e.g., DB credentials, JWT secret).

---

## License

This project is licensed under the MIT License.

---

## Credits

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [SCSS](https://sass-lang.com/)
