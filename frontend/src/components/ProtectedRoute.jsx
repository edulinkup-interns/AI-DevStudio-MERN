import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="min-h-screen bg-slate-900" />; // simple loading state

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;