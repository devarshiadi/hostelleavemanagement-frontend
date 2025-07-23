import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// LAYOUTS
import AuthLayout from './components/AuthLayout/AuthLayout';
import StudentLayout from './components/StudentLayout/StudentLayout';
import AdminLayout from './components/AdminLayout/AdminLayout';

// AUTH PAGES
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import AdminSignin from './pages/Admin/AdminSignin/AdminSignin';
import AdminSignup from './pages/Admin/AdminSignup/AdminSignup';

// STUDENT PAGES
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import ApplyLeave from './pages/ApplyLeave/ApplyLeave';
import LeaveHistory from './pages/LeaveHistory/LeaveHistory';
import Notifications from './pages/Notifications/Notifications';
import Profile from './pages/Profile/Profile';

// ADMIN PAGES
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard';
import ReviewRequests from './pages/Admin/ReviewRequests/ReviewRequests';
import AdminReviewRequestLeaveDetails from './pages/Admin/AdminReviewRequestLeaveDetails/AdminReviewRequestLeaveDetails';
import Analytics from './pages/Admin/Analytics/Analytics';
import StudentHistory from './pages/Admin/Analytics/StudentHistory/StudentHistory'; // <-- IMPORT
import AdminNotifications from './pages/Admin/AdminNotifications/AdminNotifications';
import AdminProfile from './pages/Admin/AdminProfile/AdminProfile';
import Settings from './pages/Admin/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* === AUTHENTICATION ROUTES === */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/login" element={<AdminSignin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />

        {/* === STUDENT ROUTES === */}
        <Route element={<StudentLayout />}>
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/apply-leave" element={<ApplyLeave />} />
          <Route path="/history" element={<LeaveHistory />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* === ADMIN ROUTES === */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="requests" element={<ReviewRequests />} />
          <Route path="requests/:requestId" element={<AdminReviewRequestLeaveDetails />} />
          <Route path="analytics" element={<Analytics />} />
          {/* 👇 ADDED DYNAMIC ROUTE FOR STUDENT HISTORY */}
          <Route path="analytics/student/:studentId" element={<StudentHistory />} />
          <Route path="notifications" element={<AdminNotifications />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        
        {/* === DEFAULT ROUTE === */}
        <Route path="/" element={<Navigate to="/login" />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;