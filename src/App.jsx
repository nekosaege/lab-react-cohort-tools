import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <nav>
        <Link to="/" className="text-2xl font-bold text-blue-500">
          Home
        </Link>
        <Link to="/student/1" className="text-2xl font-bold text-blue-500">
          Student Details
        </Link>
        <Link to="/user/1" className="text-2xl font-bold text-blue-500">
          User Profile
        </Link>
      </nav>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student/:id" element={<StudentDetailsPage />} />
        <Route path="/user/:id" element={<UserProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;