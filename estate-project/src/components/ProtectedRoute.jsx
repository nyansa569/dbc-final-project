// components/ProtectedRoute.js
import { Navigate, Outlet } from 'react-router-dom';
import authRepository from '../repositories/authRepository';

const ProtectedRoute = ({ redirectPath = '/auth' }) => {
  if (!authRepository.isAuthenticated()) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;