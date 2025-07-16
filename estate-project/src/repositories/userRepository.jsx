import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Update with your API base URL

const userRepository = {
  // Get all users (paginated)
  getAll: async (page = 1, perPage = 10) => {
    try {
      const response = await axios.get(`${BASE_URL}/users`, {
        params: { page, per_page: perPage }
      });
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Get single user by ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Create new user
  create: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      return { error: error.response?.data?.error || error.message };
    }
  },

  // Update user
  update: async (id, userData) => {
    try {
      // Remove password field if empty to prevent overwriting
      if (userData.password === '') {
        delete userData.password;
      }

      const response = await axios.put(`${BASE_URL}/users/${id}`, userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      return { error: error.response?.data?.error || error.message };
    }
  },

  // Delete user (soft delete)
  delete: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Change password
  changePassword: async (id, newPassword) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/users/${id}/change-password`,
        { new_password: newPassword },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      return { error: error.response?.data?.error || error.message };
    }
  },

  // Upload profile image
  uploadProfileImage: async (id, file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(
        `${BASE_URL}/users/${id}/profile-image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
};

export default userRepository;