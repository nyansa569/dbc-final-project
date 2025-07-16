// components/AuthChecker.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authRepository from '../repositories/authRepository';

const AuthChecker = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await authRepository.checkAuth();
      } catch (error) {
        authRepository.removeCurrentUser();
        navigate('/auth');
      }
    };

    if (authRepository.isAuthenticated()) {
      checkAuth();
    }
  }, [navigate]);

  return children;
};

export default AuthChecker;