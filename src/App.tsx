import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import LoginPage from './components/LoginPage';
import GirlfriendDashboard from './components/GirlfriendDashboard';
import FriendDashboard from './components/FriendDashboard';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
}

function App() {
  const userType = useAuthStore((state) => state.userType);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {userType === 'girlfriend' ? <GirlfriendDashboard /> : <FriendDashboard />}
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;