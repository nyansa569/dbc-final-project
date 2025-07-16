import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/documents';
const DEFAULT_ERROR = { error: 'An unexpected error occurred' };

const handleApiError = (error) => {
  // Prioritize server response error if available
  if (error.response?.data?.error) {
    return { error: error.response.data.error };
  }
  return { error: error.message || DEFAULT_ERROR.error };
};

const documentRepository = {
  /**
   * Fetch all documents
   * @returns {Promise<Array|{error: string}>}
   */
  getAll: async () => {
    try {
      const { data } = await axios.get(API_BASE_URL);
      return data || [];
    } catch (error) {
      return handleApiError(error);
    }
  },

  /**
   * Fetch single document by ID
   * @param {string} id - Document ID
   * @returns {Promise<Object|{error: string}>}
   */
  getById: async (id) => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/${id}`);
      return data || null;
    } catch (error) {
      return handleApiError(error);
    }
  },

  /**
   * Create new document
   * @param {Object} documentData - Document data
   * @param {File} [file] - Optional file attachment
   * @returns {Promise<{success: boolean, id?: string}|{error: string}>}
   */
  create: async (documentData ) => {
    try {
      console.log("Document data to send:", documentData);
      const data = await axios.post(API_BASE_URL, documentData);
      
      return data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  /**
   * Update existing document
   * @param {string} id - Document ID
   * @param {Object} updates - Document updates
   * @param {File} [file] - Optional new file
   * @returns {Promise<{success: boolean}|{error: string}>}
   */
  update: async (id, updates, file = null) => {
    try {
      const formData = new FormData();
      
      // Append updated fields
      if (updates.title) formData.append('title', updates.title);
      if (updates.documentType) formData.append('document_type', updates.documentType);
      if (updates.propertyDetails) {
        formData.append('property_details', JSON.stringify(updates.propertyDetails));
      }
      if (updates.customerDetails) {
        formData.append('customer_details', JSON.stringify(updates.customerDetails));
      }
      if (updates.agents) {
        formData.append('agents', JSON.stringify(updates.agents));
      }
      
      // Append new file if provided
      if (file) {
        formData.append('file', file);
      }

      const { data } = await axios.put(`${API_BASE_URL}/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      return data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  /**
   * Delete document
   * @param {string} id - Document ID
   * @returns {Promise<{success: boolean}|{error: string}>}
   */
  delete: async (id) => {
    try {
      const { data } = await axios.delete(`${API_BASE_URL}/${id}`);
      return data;
    } catch (error) {
      return handleApiError(error);
    }
  }
};

export default documentRepository;
