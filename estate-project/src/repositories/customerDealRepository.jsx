import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const customerDealRepository = {
  // Create a new offer or deal
  create: async (payload) => {
    try {
      const response = await axios.post(`${BASE_URL}/offers-deals`, payload);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Get all offers or deals
  getAll: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/offers-deals`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Get one offer or deal by ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/offers-deals/${id}`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Update an offer or deal by ID
  update: async (id, payload) => {
    try {
      const response = await axios.put(`${BASE_URL}/offers-deals/${id}`, payload);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Delete an offer or deal by ID
  delete: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/offers-deals/${id}`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
};

export default customerDealRepository;
