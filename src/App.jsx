import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Auth/Login'
import SignUp from "./components/Auth/SignUp";
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

