import axios from "axios";

const BASE_URL = "http://localhost:8000";

const propertyRepository = {
  // Get all properties
  getAll: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/properties`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Get a specific property by ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/properties/${id}`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Create a new property (with image)
  create: async (payload) => {
    console.log("Creating new property with payload:", payload);
    try {
      const response = await axios.post(`${BASE_URL}/properties`, payload, {
        headers: {
          "Content-Type": "application/json", // Explicitly set JSON content type
        },
      });
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Update an existing property
  update: async (id, formData) => {
    console.log("Updating property with ID:", id);
    console.log("Form data:", formData);
    try {
      const response = await axios.post(
        `${BASE_URL}/properties/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Delete a property
  delete: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/properties/${id}`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },
};

export default propertyRepository;
