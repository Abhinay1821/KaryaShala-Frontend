import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Example Components
import Login from "./Login";
import Home from "./Home";
import UserProfile from "./pages/profile";
import Navbar from "./component/navbar";
import AboutPage from "./pages/about";
import Nav from "./component/nav";
import withSplashScreen from "./component/splashScreen";

// ProtectedRoute Component
const ProtectedRoute = ({ element, auth }) => {
  return auth ? element : <Navigate to="/login" />;
};

// AppRoutes Component
const AppRoutes = () => {
  const isAuthenticated = localStorage.getItem("authToken") ? true : false;

  return (
    <div>
      {isAuthenticated ? <Navbar /> : <Nav />}
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />{" "}
        <Route
          path="/"
          element={<ProtectedRoute element={<Home />} auth={isAuthenticated} />}
        />
        <Route
          path="/userProfile"
          element={
            <ProtectedRoute element={<UserProfile />} auth={isAuthenticated} />
          }
        />
        <Route path="/about" element={<AboutPage />} /> {/* Public route */}
      </Routes>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default withSplashScreen(App);
