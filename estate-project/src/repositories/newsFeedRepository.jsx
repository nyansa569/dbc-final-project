// import axios from 'axios';

// const BASE_URL = 'http://localhost:8000';

// const newsFeedRepository = {
//   // Get all posts
//   getAll: async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/news-feeds`);
//       return response.data;
//     } catch (error) {
//       return { error: error.message };
//     }
//   },

//   // Get single post by ID
//   getById: async (id) => {
//     try {
//       const response = await axios.get(`${BASE_URL}/news-feeds/${id}`);
//       return response.data;
//     } catch (error) {
//       return { error: error.message };
//     }
//   },

//   // Create post with image
//   create: async (formData) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/news-feeds`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return { error: error.message };
//     }
//   },

//   // Update post (with optional new image)
//   update: async (id, formData) => {
//     try {
//       const response = await axios.put(`${BASE_URL}/news-feeds/${id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return { error: error.message };
//     }
//   },

//   // Delete post
//   delete: async (id) => {
//     try {
//       const response = await axios.delete(`${BASE_URL}/news-feeds/${id}`);
//       return response.data;
//     } catch (error) {
//       return { error: error.message };
//     }
//   }
// };

// export default newsFeedRepository;


import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const newsFeedRepository = {
  getAll: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/news-feeds`);
      return res.data;
    } catch (e) { return { error: e.message }; }
  },
  create: async (payload) => {
    try {
      const res = await axios.post(`${BASE_URL}/news-feeds`, payload);
      return res.data;
    } catch (e) { return { error: e.message }; }
  },
  update: async (id, payload) => {
    try {
      const res = await axios.put(`${BASE_URL}/news-feeds/${id}`, payload);
      return res.data;
    } catch (e) { return { error: e.message }; }
  },
  delete: async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/news-feeds/${id}`);
      return res.data;
    } catch (e) { return { error: e.message }; }
  },
};

export default newsFeedRepository;
