// import axios from 'axios';

// const BASE_URL = 'http://localhost:8000';

// const authRepository = {
//   register: async (payload) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/register`, payload);
//       return response.data;
//     } catch (error) {
//       return { error: error.message };
//     }
//   },

//   login: async (credentials) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/login`, credentials, {
//         withCredentials: true,
//       });
//       return response.data;
//     } catch (error) {
//       return { error: error.message, message: error };
//     }
//   },

//   logout: async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/logout`, {
//         withCredentials: true,
//       });
//       return response.data;
//     } catch (error) {
//       return { error: error.message };
//     }
//   },

//   checkAuth: async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/check-auth`, {
//         withCredentials: true,
//       });
//       return response.data;
//     } catch (error) {
//       return { error: error.message };
//     }
//   },

//   getUserById: async (id) => {
//     try {
//       const response = await axios.get(`${BASE_URL}/users/${id}`);
//       return response.data;
//     } catch (error) {
//       return { error: error.message };
//     }
//   },

//   forgotPassword: async (email) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/forgot-password`, { email });
//       return response.data;
//     } catch (error) {
//       return { error: error.message };
//     }
//   }
// };

// export default authRepository;

import axios from "axios";
import { userStorage } from "./userStorage";

const BASE_URL = "http://localhost:8000";

const authRepository = {
  register: async (payload) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, payload);
      if (response.data.user) {
        userStorage.setCurrentUser(response.data.user);
      }
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  login: async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials, {
        withCredentials: true,
      });
      console.log("User logged in:", response);
      if (response.data.user) {
        console.log("User logged in:", response.data.user);
        userStorage.setCurrentUser(response.data.user);
        console.log("Current user stored:", userStorage.getCurrentUser());
        console.log("Stored user:", response.data.user);
      }
      return response.data;
    } catch (error) {
      return { error: error.message, message: error };
    }
  },

  logout: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/logout`, {
        withCredentials: true,
      });
      userStorage.removeCurrentUser();
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  checkAuth: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/check-auth`, {
        withCredentials: true,
      });
      if (response.data.user) {
        userStorage.setCurrentUser(response.data.user);
      }
      return response.data;
    } catch (error) {
      userStorage.removeCurrentUser();
      return { error: error.message };
    }
  },

  getUserById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  forgotPassword: async (email) => {
    try {
      const response = await axios.post(`${BASE_URL}/forgot-password`, {
        email,
      });
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  getCurrentUser: () => {
    return userStorage.getCurrentUser();
  },

  removeCurrentUser: () => {
    return userStorage.removeCurrentUser();
  },

  isAuthenticated: () => {
    return userStorage.hasCurrentUser();
  },
};

export default authRepository;
