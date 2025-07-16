// utils/userStorage.js

const USER_KEY = 'currentUser';

export const userStorage = {
  // Save user to localStorage
  setCurrentUser: (userData) => {
    try {
      localStorage.setItem(USER_KEY, JSON.stringify(userData));
      return true;
    } catch (error) {
      console.error('Error saving user:', error);
      return false;
    }
  },

  // Get user from localStorage
  getCurrentUser: () => {
    try {
      const user = localStorage.getItem(USER_KEY);
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  },

  // Remove user from localStorage
  removeCurrentUser: () => {
    try {
      localStorage.removeItem(USER_KEY);
      return true;
    } catch (error) {
      console.error('Error removing user:', error);
      return false;
    }
  },

  // Check if user exists
  hasCurrentUser: () => {
    return !!userStorage.getCurrentUser();
  }
};