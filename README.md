# Employee Management System (EMS)

A full-stack Employee Management System built with **React**, **Vite**, **Tailwind CSS** (frontend), and **Node.js**, **Express**, **MongoDB** (backend).

## Features

- User authentication (Sign Up, Login)
- Admin and Employee dashboards
- Task creation and assignment (Admin)
- Task listing and status tracking (Employee)
- Responsive UI with Tailwind CSS

## Project Structure

```
EMS/
│
├── Backend/                # Express + MongoDB backend
│   ├── app.js
│   ├── package.json
│   └── .gitignore
│
├── src/                    # React frontend
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Auth/           # Login, SignUp components
│   │   ├── Dashboard/      # AdminDashboard, EmployeeDashboard
│   │   ├── TaskList/       # Task cards and lists
│   │   └── other/          # Header, CreateTask, etc.
│   ├── context/            # AuthProvider
│   └── utils/              # Utility functions
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd EMS
   ```

2. **Install frontend dependencies:**
   ```sh
   npm install
   ```

3. **Setup and run the backend:**
   ```sh
   cd Backend
   npm install
   npm start
   ```
   The backend will run on [http://localhost:3000](http://localhost:3000).

4. **Run the frontend:**
   ```sh
   cd ..
   npm run dev
   ```
   The frontend will run on [http://localhost:5173](http://localhost:5173) (default Vite port).

## Usage

- **Sign Up:** Register as a new user (employee).
- **Login:** Log in with your credentials.
- **Admin Dashboard:** Create and assign tasks to employees.
- **Employee Dashboard:** View assigned tasks and their statuses.

## Configuration

- **Backend MongoDB Connection:**  
  Update the MongoDB URI in [`Backend/app.js`](Backend/app.js) if needed.

## Scripts

- `npm run dev` - Start the frontend in development mode
- `npm run build` - Build the frontend for production
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview the production build

## License

This project is licensed under the MIT License.

---

*Built with React, Vite, Tailwind CSS, Node.js, Express,
