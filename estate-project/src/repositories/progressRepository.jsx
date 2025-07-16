import axios from "axios";

const BASE_URL = "http://localhost:8000";

const projectRepository = {
  // Get all projects
  getAll: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/projects`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Get project by ID (includes progress details)
  getById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/projects/${id}`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Create new project with image
  create: async (formData) => {
    for (let [key, value] of formData.entries()) {
      console.log(`from repo - ${key}:`, value);
    }
    try {
      const response = await axios.post(`${BASE_URL}/projects`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Update project with optional new image
  update: async (id, formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/projects/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Delete project
  delete: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/projects/${id}`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },

  // Add project progress with image
  addProgress: async (projectId, formData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/projects/${projectId}/progress`,
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

  // Update progress with optional new image
  updateProgress: async (progressId, formData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/progress/${progressId}`,
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

  // Delete progress
  deleteProgress: async (progressId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/progress/${progressId}`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  },
};

export default projectRepository;
