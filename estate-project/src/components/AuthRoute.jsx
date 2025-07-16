// components/AuthRoute.js
import { Navigate, Outlet } from 'react-router-dom';
import authRepository from '../repositories/authRepository';

const AuthRoute = ({ redirectPath = '/app/dashboard' }) => {
  if (authRepository.isAuthenticated()) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default AuthRoute;