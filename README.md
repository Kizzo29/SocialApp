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

---

## Database Setup

To use this app, you need a MySQL database with the following tables.  
Run these SQL statements in your MySQL client to create the required schema:

```sql
-- Users table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  profilePic VARCHAR(255),
  coverPic VARCHAR(255),
  city VARCHAR(100),
  website VARCHAR(100)
);

-- Posts table
CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  desc TEXT,
  img VARCHAR(255),
  created DATETIME DEFAULT CURRENT_TIMESTAMP,
  userId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

-- Comments table
CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  desc TEXT NOT NULL,
  created DATETIME DEFAULT CURRENT_TIMESTAMP,
  userId INT NOT NULL,
  postId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE
);

-- Likes table
CREATE TABLE likes (
  userId INT NOT NULL,
  postId INT NOT NULL,
  PRIMARY KEY (userId, postId),
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE
);

-- Relationships (followers) table
CREATE TABLE relationships (
  followerUserId INT NOT NULL,
  followedUserId INT NOT NULL,
  PRIMARY KEY (followerUserId, followedUserId),
  FOREIGN KEY (followerUserId) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (followedUserId) REFERENCES users(id) ON DELETE CASCADE
);
```

Be sure to update your `api/connect.js` and `.env` with your database credentials.

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
