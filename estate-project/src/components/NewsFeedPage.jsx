// import React, { useState } from 'react';
// import {
//     FaPlus,
//     FaClock,
//     FaNewspaper,
//     FaBullhorn,
//     FaTrophy,
//     FaChartLine,
//     FaThumbsUp,
//     FaComment,
//     FaShare,
//     FaUser
// } from 'react-icons/fa';
// import '../css/newsFeed.css';

// const CATEGORIES = [
//     { id: 'all', name: 'All News', icon: <FaNewspaper /> },
//     { id: 'announcements', name: 'Announcements', icon: <FaBullhorn /> },
//     { id: 'achievements', name: 'Achievements', icon: <FaTrophy /> },
//     { id: 'market', name: 'Market Updates', icon: <FaChartLine /> }
// ];

// const SAMPLE_NEWS = [
//     {
//         id: 1,
//         category: 'announcements',
//         title: 'New Property Listing Platform Launch',
//         content: 'Were excited to announce the launch of our new property listing platform, making it easier than ever to showcase and find properties.',
//         author: 'John Smith',
//         date: '2h ago',
//         image: '/images/platform-launch.jpg',
//         likes: 24,
//         comments: 8
//     },
//     {
//         id: 2,
//         category: 'achievements',
//         title: 'Record Breaking Sales Quarter',
//         content: 'Our team has achieved a new milestone this quarter with over $50M in property sales. Congratulations to all involved!',
//         author: 'Emma Wilson',
//         date: '5h ago',
//         image: '/images/sales-record.jpg',
//         likes: 56,
//         comments: 12
//     },
//     {
//         id: 3,
//         category: 'market',
//         title: 'Real Estate Market Trends 2025',
//         content: 'Latest analysis shows promising growth in the residential sector. Read our comprehensive market report.',
//         author: 'Michael Chen',
//         date: '1d ago',
//         image: '/images/market-trends.jpg',
//         likes: 32,
//         comments: 15
//     }
// ];

// export default function NewsFeedPage() {
//     const [activeCategory, setActiveCategory] = useState('all');
//     const [filterType, setFilterType] = useState('latest');

//     const filteredNews = SAMPLE_NEWS
//         .filter(news => activeCategory === 'all' || news.category === activeCategory)
//         .sort((a, b) => {
//             if (filterType === 'latest') {
//                 return new Date(b.date) - new Date(a.date);
//             }
//             return b.likes - a.likes;
//         });

//     return (
//         <div className="newsfeed-container">

//             <main className="news-main">
//                 <header className="news-header">
//                     <h2>{CATEGORIES.find(c => c.id === activeCategory)?.name || 'All News'}</h2>
//                     <div className="news-filters">
//                         <button
//                             className={filterType === 'latest' ? 'active' : ''}
//                             onClick={() => setFilterType('latest')}
//                         >
//                             Latest
//                         </button>
//                         <button
//                             className={filterType === 'popular' ? 'active' : ''}
//                             onClick={() => setFilterType('popular')}
//                         >
//                             Popular
//                         </button>
//                     </div>
//                 </header>

//                 <div className="news-grid">
//                     {filteredNews.map(news => (
//                         <article key={news.id} className="news-card">
//                             <img src={news.image} alt={news.title} className="card-image" />
//                             <div className="card-content">
//                                 <div className="card-meta">
//                                     <span><FaUser /> {news.author}</span>
//                                     <span className="separator">•</span>
//                                     <span><FaClock /> {news.date}</span>
//                                 </div>
//                                 <h3>{news.title}</h3>
//                                 <p>{news.content}</p>
//                             </div>
//                             <div className="card-footer">
//                                 <div className="interactions">
//                                     <button>
//                                         <FaThumbsUp /> {news.likes}
//                                     </button>
//                                     <button>
//                                         <FaComment /> {news.comments}
//                                     </button>
//                                 </div>
//                                 <button className="share-btn">
//                                     <FaShare />
//                                 </button>
//                             </div>
//                         </article>
//                     ))}
//                 </div>
//             </main>
//             <aside className="news-sidebar">
//                 <header>
//                     <h2>News Feed</h2>
//                     <button className="create-post-btn">
//                         <FaPlus /> Create Post
//                     </button>
//                 </header>

//                 <div className="categories">
//                     <h3>Categories</h3>
//                     <ul className="category-list">
//                         {CATEGORIES.map(category => (
//                             <li
//                                 key={category.id}
//                                 className={activeCategory === category.id ? 'active' : ''}
//                                 onClick={() => setActiveCategory(category.id)}
//                             >
//                                 {category.icon} {category.name}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </aside>
//         </div>
//     );
// }

// import { useState } from 'react';
// import { FiEdit, FiTrash2, FiBookmark, FiDollarSign, FiUser, FiPhone, FiMail, FiHome, FiMapPin, FiType } from 'react-icons/fi';
// import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
// import './newsFeed.css';

// const NewsFeedPage = () => {
//   // Sample news feed data
//   const initialNewsFeeds = [
//     {
//       id: 1,
//       title: 'New Luxury Villa Listing in Malibu',
//       category: 'Property Post',
//       content: 'We are excited to announce a stunning new luxury villa listing in Malibu with ocean views and premium amenities.',
//       author: 'John Doe',
//       time: '2023-05-10 14:30',
//       images: [
//         'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
//         'https://images.unsplash.com/photo-1580587771525-78b9dba3b914'
//       ],
//       isProperty: true,
//       propertyDetails: {
//         name: 'Luxury Villa in Malibu',
//         location: 'Malibu, California',
//         type: 'Villa',
//         bedrooms: 5,
//         bathrooms: 4,
//         area: 3200,
//         price: 4500000,
//         status: 'for sale'
//       },
//       availability: 'Available'
//     },
//     {
//       id: 2,
//       title: 'Summer Special Offer from Coca-Cola',
//       category: 'Ad',
//       content: 'Cool off this summer with Coca-Cola! Get 20% off on all cases purchased through our partners.',
//       author: 'Marketing Team',
//       time: '2023-05-15 10:15',
//       images: [
//         'https://images.unsplash.com/photo-1554866585-cd94860890b7'
//       ],
//       isProperty: false
//     },
//     {
//       id: 3,
//       title: 'Market Trends: Q2 2023 Real Estate Report',
//       category: 'News',
//       content: 'The latest market trends show a 5% increase in property values across coastal regions. Read our full analysis.',
//       author: 'Analytics Team',
//       time: '2023-05-18 16:45',
//       images: [
//         'https://images.unsplash.com/photo-1450101499163-c8848c66ca85'
//       ],
//       isProperty: false
//     }
//   ];

//   const [newsFeeds, setNewsFeeds] = useState(initialNewsFeeds);
//   const [filterCategory, setFilterCategory] = useState('all');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentFeed, setCurrentFeed] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     category: 'News',
//     content: '',
//     author: 'Admin User',
//     images: [''],
//     isProperty: false,
//     propertyDetails: {
//       name: '',
//       location: '',
//       type: 'Villa',
//       bedrooms: '',
//       bathrooms: '',
//       area: '',
//       price: '',
//       status: 'for sale'
//     },
//     availability: 'Available'
//   });
//   const [contactForm, setContactForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   // Filter news feeds by category
//   const filteredFeeds = newsFeeds.filter(feed => {
//     return filterCategory === 'all' || feed.category === filterCategory;
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle property details changes
//   const handlePropertyChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       propertyDetails: {
//         ...prev.propertyDetails,
//         [name]: value
//       }
//     }));
//   };

//   // Handle image URL changes
//   const handleImageChange = (index, value) => {
//     const newImages = [...formData.images];
//     newImages[index] = value;
//     setFormData(prev => ({
//       ...prev,
//       images: newImages
//     }));
//   };

//   // Add new image URL field
//   const addImageField = () => {
//     setFormData(prev => ({
//       ...prev,
//       images: [...prev.images, '']
//     }));
//   };

//   // Remove image URL field
//   const removeImageField = (index) => {
//     const newImages = formData.images.filter((_, i) => i !== index);
//     setFormData(prev => ({
//       ...prev,
//       images: newImages
//     }));
//   };

//   // Handle contact form changes
//   const handleContactChange = (e) => {
//     const { name, value } = e.target;
//     setContactForm(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newFeed = {
//       id: newsFeeds.length > 0 ? Math.max(...newsFeeds.map(f => f.id)) + 1 : 1,
//       ...formData,
//       time: new Date().toISOString(),
//       propertyDetails: formData.isProperty ? {
//         ...formData.propertyDetails,
//         bedrooms: parseInt(formData.propertyDetails.bedrooms),
//         bathrooms: parseInt(formData.propertyDetails.bathrooms),
//         area: parseInt(formData.propertyDetails.area),
//         price: parseInt(formData.propertyDetails.price)
//       } : null
//     };

//     if (currentFeed) {
//       // Update existing feed
//       setNewsFeeds(newsFeeds.map(feed =>
//         feed.id === currentFeed.id ? newFeed : feed
//       ));
//     } else {
//       // Add new feed
//       setNewsFeeds([...newsFeeds, newFeed]);
//     }

//     // Reset form
//     setFormData({
//       title: '',
//       category: 'News',
//       content: '',
//       author: 'Admin User',
//       images: [''],
//       isProperty: false,
//       propertyDetails: {
//         name: '',
//         location: '',
//         type: 'Villa',
//         bedrooms: '',
//         bathrooms: '',
//         area: '',
//         price: '',
//         status: 'for sale'
//       },
//       availability: 'Available'
//     });
//     setCurrentFeed(null);
//   };

//   // Handle edit action
//   const handleEdit = (feed) => {
//     setCurrentFeed(feed);
//     setFormData({
//       title: feed.title,
//       category: feed.category,
//       content: feed.content,
//       author: feed.author,
//       images: [...feed.images],
//       isProperty: feed.isProperty,
//       propertyDetails: feed.isProperty ? { ...feed.propertyDetails } : {
//         name: '',
//         location: '',
//         type: 'Villa',
//         bedrooms: '',
//         bathrooms: '',
//         area: '',
//         price: '',
//         status: 'for sale'
//       },
//       availability: feed.isProperty ? feed.availability : 'Available'
//     });
//   };

//   // Handle delete action
//   const handleDelete = (id) => {
//     setNewsFeeds(newsFeeds.filter(feed => feed.id !== id));
//   };

//   // Open contact modal
//   const openContactModal = (feed) => {
//     setCurrentFeed(feed);
//     setIsModalOpen(true);
//   };

//   // Submit contact form
//   const submitContactForm = (e) => {
//     e.preventDefault();
//     // Here you would typically send the contact form data to your backend
//     console.log('Contact form submitted:', contactForm);
//     alert('Your inquiry has been sent successfully!');
//     setIsModalOpen(false);
//     setContactForm({
//       name: '',
//       email: '',
//       phone: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="news-feed-page">
//       {/* Filter Controls */}
//       <div className="filter-controls">
//         <div className="filter-group">
//           <label>Filter by Category:</label>
//           <select
//             value={filterCategory}
//             onChange={(e) => setFilterCategory(e.target.value)}
//           >
//             <option value="all">All Categories</option>
//             <option value="Property Post">Property Posts</option>
//             <option value="Ad">Advertisements</option>
//             <option value="News">News & Trends</option>
//           </select>
//         </div>
//       </div>

//       <div className="news-feed-container">
//         {/* News Feed List */}
//         <div className="news-feed-list">
//           {filteredFeeds.length === 0 ? (
//             <div className="no-feeds">
//               <p>No news feeds match your filter criteria.</p>
//             </div>
//           ) : (
//             <div className="feeds-grid">
//               {filteredFeeds.map(feed => (
//                 <div key={feed.id} className={`feed-card ${feed.category.replace(' ', '-').toLowerCase()}`}>
//                   <div className="card-header">
//                     <div className="feed-category">{feed.category}</div>
//                     <div className="feed-time">{feed.time}</div>
//                   </div>

//                   <div className="feed-images">
//                     {feed.images.map((img, index) => (
//                       <div
//                         key={index}
//                         className="feed-image"
//                         style={{ backgroundImage: `url(${img})` }}
//                       ></div>
//                     ))}
//                   </div>

//                   <div className="feed-content">
//                     <h3>{feed.title}</h3>
//                     <p>{feed.content}</p>
//                     <div className="feed-author">Posted by: {feed.author}</div>

//                     {feed.isProperty && (
//                       <div className="property-details">
//                         <div className="property-header">
//                           <h4>{feed.propertyDetails.name}</h4>
//                           <span className={`status ${feed.propertyDetails.status.replace(' ', '-')}`}>
//                             {feed.propertyDetails.status}
//                           </span>
//                         </div>

//                         <div className="property-location">
//                           <FiMapPin /> {feed.propertyDetails.location}
//                         </div>

//                         <div className="property-meta">
//                           <span><FaBed /> {feed.propertyDetails.bedrooms}</span>
//                           <span><FaBath /> {feed.propertyDetails.bathrooms}</span>
//                           <span><FaRulerCombined /> {feed.propertyDetails.area} sqft</span>
//                           <span><FiType /> {feed.propertyDetails.type}</span>
//                         </div>

//                         <div className="property-price">
//                           <FiDollarSign /> {feed.propertyDetails.price.toLocaleString()}
//                         </div>

//                         <div className="property-availability">
//                           Availability: {feed.availability}
//                         </div>

//                         <div className="property-actions">
//                           <button
//                             className="contact-btn"
//                             onClick={() => openContactModal(feed)}
//                           >
//                             Contact Owner
//                           </button>
//                           <button className="offer-btn">
//                             Make an Offer
//                           </button>
//                           <button className="book-btn">
//                             Book Viewing
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="card-footer">
//                     <button
//                       className="edit-btn"
//                       onClick={() => handleEdit(feed)}
//                     >
//                       <FiEdit /> Edit
//                     </button>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(feed.id)}
//                     >
//                       <FiTrash2 /> Delete
//                     </button>
//                     {!feed.isProperty && (
//                       <button className="bookmark-btn">
//                         <FiBookmark /> Save
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* News Feed Form */}
//         <div className="news-feed-form">
//           <h2>{currentFeed ? 'Edit News Feed' : 'Create New News Feed'}</h2>

//           <form onSubmit={handleSubmit}>
//             <div className="news-form-group">
//               <label>Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="news-form-group">
//               <label>Category</label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="News">News & Trends</option>
//                 <option value="Ad">Advertisement</option>
//                 <option value="Property Post">Property Post</option>
//               </select>
//             </div>

//             <div className="news-form-group">
//               <label>Content</label>
//               <textarea
//                 name="content"
//                 value={formData.content}
//                 onChange={handleInputChange}
//                 rows="5"
//                 required
//               ></textarea>
//             </div>

//             <div className="news-form-group">
//               <label>Author</label>
//               <input
//                 type="text"
//                 name="author"
//                 value={formData.author}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="news-form-group">
//               <label>Image URLs</label>
//               {formData.images.map((img, index) => (
//                 <div key={index} className="image-input-group">
//                   <input
//                     type="text"
//                     value={img}
//                     onChange={(e) => handleImageChange(index, e.target.value)}
//                     placeholder="https://example.com/image.jpg"
//                   />
//                   {formData.images.length > 1 && (
//                     <button
//                       type="button"
//                       className="remove-image-btn"
//                       onClick={() => removeImageField(index)}
//                     >
//                       Remove
//                     </button>
//                   )}
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 className="add-image-btn"
//                 onClick={addImageField}
//               >
//                 Add Another Image
//               </button>
//             </div>

//             <div className="news-form-group">
//               <label>
//                 <input
//                   type="checkbox"
//                   name="isProperty"
//                   checked={formData.isProperty}
//                   onChange={(e) => setFormData(prev => ({
//                     ...prev,
//                     isProperty: e.target.checked
//                   }))}
//                 />
//                 Is this a property post?
//               </label>
//             </div>

//             {formData.isProperty && (
//               <div className="property-form-section">
//                 <h4>Property Details</h4>

//                 <div className="news-form-group">
//                   <label>Property Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.propertyDetails.name}
//                     onChange={handlePropertyChange}
//                     required={formData.isProperty}
//                   />
//                 </div>

//                 <div className="news-form-group">
//                   <label>Location</label>
//                   <input
//                     type="text"
//                     name="location"
//                     value={formData.propertyDetails.location}
//                     onChange={handlePropertyChange}
//                     required={formData.isProperty}
//                   />
//                 </div>

//                 <div className="form-row">
//                   <div className="news-form-group">
//                     <label>Type</label>
//                     <select
//                       name="type"
//                       value={formData.propertyDetails.type}
//                       onChange={handlePropertyChange}
//                       required={formData.isProperty}
//                     >
//                       <option value="Villa">Villa</option>
//                       <option value="Apartment">Apartment</option>
//                       <option value="House">House</option>
//                       <option value="Flat">Flat</option>
//                       <option value="Land">Land</option>
//                     </select>
//                   </div>

//                   <div className="news-form-group">
//                     <label>Status</label>
//                     <select
//                       name="status"
//                       value={formData.propertyDetails.status}
//                       onChange={handlePropertyChange}
//                       required={formData.isProperty}
//                     >
//                       <option value="for sale">For Sale</option>
//                       <option value="for rent">For Rent</option>
//                       <option value="rented out">Rented Out</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="news-form-group">
//                     <label>Bedrooms</label>
//                     <input
//                       type="number"
//                       name="bedrooms"
//                       value={formData.propertyDetails.bedrooms}
//                       onChange={handlePropertyChange}
//                       min="0"
//                       required={formData.isProperty}
//                     />
//                   </div>

//                   <div className="news-form-group">
//                     <label>Bathrooms</label>
//                     <input
//                       type="number"
//                       name="bathrooms"
//                       value={formData.propertyDetails.bathrooms}
//                       onChange={handlePropertyChange}
//                       min="0"
//                       required={formData.isProperty}
//                     />
//                   </div>

//                   <div className="news-form-group">
//                     <label>Area (sqft)</label>
//                     <input
//                       type="number"
//                       name="area"
//                       value={formData.propertyDetails.area}
//                       onChange={handlePropertyChange}
//                       min="0"
//                       required={formData.isProperty}
//                     />
//                   </div>
//                 </div>

//                 <div className="news-form-group">
//                   <label>Price</label>
//                   <input
//                     type="number"
//                     name="price"
//                     value={formData.propertyDetails.price}
//                     onChange={handlePropertyChange}
//                     min="0"
//                     required={formData.isProperty}
//                   />
//                 </div>

//                 <div className="news-form-group">
//                   <label>Availability</label>
//                   <input
//                     type="text"
//                     name="availability"
//                     value={formData.availability}
//                     onChange={(e) => setFormData(prev => ({
//                       ...prev,
//                       availability: e.target.value
//                     }))}
//                     required={formData.isProperty}
//                   />
//                 </div>
//               </div>
//             )}

//             <div className="form-actions">
//               <button type="submit" className="submit-btn">
//                 {currentFeed ? 'Update Feed' : 'Create Feed'}
//               </button>
//               {currentFeed && (
//                 <button
//                   type="button"
//                   className="cancel-btn"
//                   onClick={() => {
//                     setCurrentFeed(null);
//                     setFormData({
//                       title: '',
//                       category: 'News',
//                       content: '',
//                       author: 'Admin User',
//                       images: [''],
//                       isProperty: false,
//                       propertyDetails: {
//                         name: '',
//                         location: '',
//                         type: 'Villa',
//                         bedrooms: '',
//                         bathrooms: '',
//                         area: '',
//                         price: '',
//                         status: 'for sale'
//                       },
//                       availability: 'Available'
//                     });
//                   }}
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Contact Modal */}
//       {isModalOpen && currentFeed && currentFeed.isProperty && (
//         <div className="modal-overlay">
//           <div className="contact-modal">
//             <div className="modal-header">
//               <h3>Contact Property Owner</h3>
//               <button
//                 className="close-modal"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 &times;
//               </button>
//             </div>

//             <div className="modal-content">
//               <p>You're inquiring about: <strong>{currentFeed.propertyDetails.name}</strong></p>

//               <form onSubmit={submitContactForm}>
//                 <div className="news-form-group">
//                   <label>Your Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={contactForm.name}
//                     onChange={handleContactChange}
//                     required
//                   />
//                 </div>

//                 <div className="news-form-group">
//                   <label>Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={contactForm.email}
//                     onChange={handleContactChange}
//                     required
//                   />
//                 </div>

//                 <div className="news-form-group">
//                   <label>Phone</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={contactForm.phone}
//                     onChange={handleContactChange}
//                     required
//                   />
//                 </div>

//                 <div className="news-form-group">
//                   <label>Message</label>
//                   <textarea
//                     name="message"
//                     value={contactForm.message}
//                     onChange={handleContactChange}
//                     rows="4"
//                     required
//                   ></textarea>
//                 </div>

//                 <div className="form-actions">
//                   <button type="submit" className="submit-btn">
//                     Send Inquiry
//                   </button>
//                   <button
//                     type="button"
//                     className="cancel-btn"
//                     onClick={() => setIsModalOpen(false)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewsFeedPage;

import { useState, useEffect } from "react";
import {
  FiEdit,
  FiTrash2,
  FiDollarSign,
  FiMapPin,
  FiType,
} from "react-icons/fi";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import newsFeedRepository from "../repositories/newsFeedRepository";
import "./newsFeed.css";

const NewsFeedPage = () => {
  const [newsFeeds, setNewsFeeds] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [currentFeed, setCurrentFeed] = useState(null);
  const [formData, setFormData] = useState(getDefaultForm());

  useEffect(() => {
    (async () => {
      const res = await newsFeedRepository.getAll();
      console.log(res);
      if (!res.error) setNewsFeeds(res);
    })();
  }, []);

  function getDefaultForm() {
    return {
      title: "",
      category: "News",
      content: "",
      author: "Admin User",
      images: [""],
      isProperty: false,
      property_name: "",
      property_location: "",
      property_type: "Villa",
      bedrooms: "",
      bathrooms: "",
      area: "",
      price: "",
      property_status: "for sale",
      availability: "Available",
    };
  }

  const resetForm = () => {
    setCurrentFeed(null);
    setFormData(getDefaultForm());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: formData.title,
      category: formData.category,
      content: formData.content,
      author: formData.author,
      time: new Date().toISOString().slice(0, 19).replace("T", " "), // MySQL compatible
      images: formData.images,
      is_property: formData.isProperty ? 1 : 0,
      property_name: formData.isProperty ? formData.property_name : null,
      property_location: formData.isProperty
        ? formData.property_location
        : null,
      property_type: formData.isProperty ? formData.property_type : null,
      bedrooms: formData.isProperty ? parseInt(formData.bedrooms || 0) : null,
      bathrooms: formData.isProperty ? parseInt(formData.bathrooms || 0) : null,
      area: formData.isProperty ? parseInt(formData.area || 0) : null,
      price: formData.isProperty ? parseInt(formData.price || 0) : null,
      property_status: formData.isProperty ? formData.property_status : null,
      availability: formData.isProperty ? formData.availability : null,
    };

    const res = currentFeed
      ? await newsFeedRepository.update(currentFeed.id, payload)
      : await newsFeedRepository.create(payload);

    if (res.error) {
      alert(res.error);
    } else {
      const updated = await newsFeedRepository.getAll();
      setNewsFeeds(updated);
      resetForm();
    }
  };

  const handleDelete = async (id) => {
    const res = await newsFeedRepository.delete(id);
    if (!res.error) setNewsFeeds(newsFeeds.filter((f) => f.id !== id));
  };

  // const handleEdit = (feed) => {
  //   setCurrentFeed(feed);
  //   setFormData({
  //     title: feed.title,
  //     category: feed.category,
  //     content: feed.content,
  //     author: feed.author,
  //     images: feed.images || [""],
  //     isProperty: !!feed.is_property,
  //     property_name: feed.property_name || "",
  //     property_location: feed.property_location || "",
  //     property_type: feed.property_type || "Villa",
  //     bedrooms: feed.bedrooms || "",
  //     bathrooms: feed.bathrooms || "",
  //     area: feed.area || "",
  //     price: feed.price || "",
  //     property_status: feed.property_status || "for sale",
  //     availability: feed.availability || "Available",
  //   });
  // };

  const handleEdit = (feed) => {
    let images = feed.images;

    // Normalize images
    if (typeof images === "string") {
      try {
        images = JSON.parse(images);
        if (!Array.isArray(images)) images = [];
      } catch (e) {
        images = [];
      }
    }

    setCurrentFeed(feed);
    setFormData({
      title: feed.title,
      category: feed.category,
      content: feed.content,
      author: feed.author,
      images: Array.isArray(images) ? images : [],
      isProperty: !!feed.is_property,
      property_name: feed.property_name || "",
      property_location: feed.property_location || "",
      property_type: feed.property_type || "Villa",
      bedrooms: feed.bedrooms || "",
      bathrooms: feed.bathrooms || "",
      area: feed.area || "",
      price: feed.price || "",
      property_status: feed.property_status || "for sale",
      availability: feed.availability || "Available",
    });
  };

  const handleImageChange = (i, val) => {
    const img = [...formData.images];
    img[i] = val;
    setFormData({ ...formData, images: img });
  };

  const filteredFeeds = newsFeeds.filter(
    (feed) => filterCategory === "all" || feed.category === filterCategory
  );

  return (
    <div className="news-feed-page">
      <div className="filter-controls">
        <div className="filter-group">
          <label>Filter by Category:</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Property Post">Property Posts</option>
            <option value="Ad">Advertisements</option>
            <option value="News">News & Trends</option>
          </select>
        </div>
      </div>

      <div className="news-feed-container">
        <div className="news-feed-list">
          {filteredFeeds.length === 0 ? (
            <div className="no-feeds">
              <p>No news feeds match your filter criteria.</p>
            </div>
          ) : (
            <div className="feeds-grid">
              {filteredFeeds.map((feed) => (
                <div
                  key={feed.id}
                  className={`feed-card ${feed.category
                    .replace(" ", "-")
                    .toLowerCase()}`}
                >
                  <div className="card-header">
                    <div className="feed-category">{feed.category}</div>
                    <div className="feed-time">
                      {new Date(feed.time).toLocaleString()}
                    </div>
                  </div>

                  <div className="feed-images">
                    {(Array.isArray(feed.images)
                      ? feed.images
                      : typeof feed.images === "string"
                      ? JSON.parse(feed.images)
                      : []
                    ).length > 0 ? (
                      (Array.isArray(feed.images)
                        ? feed.images
                        : typeof feed.images === "string"
                        ? JSON.parse(feed.images)
                        : []
                      ).map((img, i) => (
                        <img key={i} src={img} alt="" className="feed-img" />
                      ))
                    ) : (
                      <img
                        src="https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
                        alt="Default"
                        className="feed-img"
                      />
                    )}
                  </div>

                  <div className="feed-content">
                    <h3>{feed.title}</h3>
                    <p>{feed.content}</p>
                    <div className="feed-author">Posted by: {feed.author}</div>

                    {feed.is_property && (
                      <>
                        <h4>{feed.property_name}</h4>
                        <div className="property-location">
                          <FiMapPin /> {feed.property_location}
                        </div>
                        <div className="property-header">
                          <span
                            className={`status ${feed.property_status.replace(
                              " ",
                              "-"
                            )}`}
                          >
                            {feed.property_status}
                          </span>
                        </div>
                        <div className="property-price">
                          <FiDollarSign /> {Number(feed.price).toLocaleString()}
                        </div>
                        <div className="property-details">
                          <div className="property-meta">
                            <span>
                              <FaBed /> {feed.bedrooms}
                            </span>
                            <span>
                              <FaBath /> {feed.bathrooms}
                            </span>
                            <span>
                              <FaRulerCombined /> {feed.area} sqft
                            </span>
                            <span>
                              <FiType /> {feed.property_type}
                            </span>
                          </div>
                        </div>
                        <div className="property-availability">
                          Availability: {feed.availability}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="card-footer">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(feed)}
                    >
                      <FiEdit /> Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(feed.id)}
                    >
                      <FiTrash2 /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="news-feed-form">
          <h2>{currentFeed ? "Edit News Feed" : "Create New News Feed"}</h2>

          <form className="news-form" onSubmit={handleSubmit}>
            <div className="news-form-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>

            <div className="news-form-group">
              <label>Category</label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="News">News & Trends</option>
                <option value="Ad">Advertisement</option>
                <option value="Property Post">Property Post</option>
              </select>
            </div>

            <div className="news-form-group">
              <label>Content</label>
              <textarea
                placeholder="Content"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                rows="5"
                required
              ></textarea>
            </div>

            <div className="news-form-group">
              <label>Author</label>
              <input
                type="text"
                placeholder="Author"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                required
              />
            </div>

            <div className="news-form-group">
              <label>Image URLs</label>
              {formData.images.map((img, index) => (
                <div key={index} className="image-input-group">
                  <input
                    type="text"
                    value={img}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                  {formData.images.length > 1 && (
                    <button
                      type="button"
                      className="remove-image-btn"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          images: formData.images.filter((_, i) => i !== index),
                        })
                      }
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="add-image-btn"
                onClick={() =>
                  setFormData({ ...formData, images: [...formData.images, ""] })
                }
              >
                Add Another Image
              </button>
            </div>

            <div className="news-form-group">
              <label>
                <input
                  type="checkbox"
                  checked={formData.isProperty}
                  onChange={(e) =>
                    setFormData({ ...formData, isProperty: e.target.checked })
                  }
                />
                Is this a property post?
              </label>
            </div>

            {formData.isProperty && (
              <div className="property-form-section">
                <h4>Property Details</h4>

                <div className="news-form-group">
                  <label>Property Name</label>
                  <input
                    type="text"
                    placeholder="Property Name"
                    value={formData.property_name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        property_name: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="news-form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="Location"
                    value={formData.property_location}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        property_location: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="news-form-group">
                    <label>Type</label>
                    <select
                      value={formData.property_type}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          property_type: e.target.value,
                        })
                      }
                    >
                      <option value="Villa">Villa</option>
                      <option value="Apartment">Apartment</option>
                      <option value="House">House</option>
                      <option value="Flat">Flat</option>
                      <option value="Land">Land</option>
                    </select>
                  </div>

                  <div className="news-form-group">
                    <label>Status</label>
                    <select
                      value={formData.property_status}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          property_status: e.target.value,
                        })
                      }
                    >
                      <option value="for sale">For Sale</option>
                      <option value="for rent">For Rent</option>
                      <option value="rented out">Rented Out</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="news-form-group">
                    <label>Bedrooms</label>
                    <input
                      type="number"
                      placeholder="Bedrooms"
                      value={formData.bedrooms}
                      onChange={(e) =>
                        setFormData({ ...formData, bedrooms: e.target.value })
                      }
                      min="0"
                      required
                    />
                  </div>

                  <div className="news-form-group">
                    <label>Bathrooms</label>
                    <input
                      type="number"
                      placeholder="Bathrooms"
                      value={formData.bathrooms}
                      onChange={(e) =>
                        setFormData({ ...formData, bathrooms: e.target.value })
                      }
                      min="0"
                      required
                    />
                  </div>

                  <div className="news-form-group">
                    <label>Area (sqft)</label>
                    <input
                      type="number"
                      placeholder="Area"
                      value={formData.area}
                      onChange={(e) =>
                        setFormData({ ...formData, area: e.target.value })
                      }
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div className="news-form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    placeholder="Price"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    min="0"
                    required
                  />
                </div>

                <div className="news-form-group">
                  <label>Availability</label>
                  <input
                    type="text"
                    placeholder="Availability"
                    value={formData.availability}
                    onChange={(e) =>
                      setFormData({ ...formData, availability: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                {currentFeed ? "Update Feed" : "Create Feed"}
              </button>
              {currentFeed && (
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={resetForm}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsFeedPage;

{
  /* {formData.isProperty && (
              <div className="property-inputs">
                <input
                  placeholder="Property Name"
                  value={formData.property_name}
                  onChange={(e) =>
                    setFormData({ ...formData, property_name: e.target.value })
                  }
                  required
                />

                <input
                  placeholder="Location"
                  value={formData.property_location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      property_location: e.target.value,
                    })
                  }
                  required
                />

                <select
                  value={formData.property_type}
                  onChange={(e) =>
                    setFormData({ ...formData, property_type: e.target.value })
                  }
                >
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Flat</option>
                  <option>Land</option>
                </select>

                <input
                  placeholder="Bedrooms"
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bedrooms: e.target.value })
                  }
                  required
                />

                <input
                  placeholder="Bathrooms"
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bathrooms: e.target.value })
                  }
                  required
                />

                <input
                  placeholder="Area"
                  type="number"
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  required
                />

                <input
                  placeholder="Price"
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  required
                />

                <select
                  value={formData.property_status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      property_status: e.target.value,
                    })
                  }
                >
                  <option>for sale</option>
                  <option>for rent</option>
                  <option>rented out</option>
                </select>

                <input
                  placeholder="Availability"
                  value={formData.availability}
                  onChange={(e) =>
                    setFormData({ ...formData, availability: e.target.value })
                  }
                  required
                />
              </div>
            )} */
}



    // <div className="news-feed-page">
    //   <div className="filter-controls">
    //     <label>
    //       Category:
    //       <select
    //         value={filterCategory}
    //         onChange={(e) => setFilterCategory(e.target.value)}
    //       >
    //         <option value="all">All</option>
    //         <option value="Property Post">Property Post</option>
    //         <option value="Ad">Ad</option>
    //         <option value="News">News</option>
    //       </select>
    //     </label>
    //   </div>

    //   <div className="news-feed-container">
    //     <div className="news-feed-list">
    //       {filteredFeeds.length === 0 ? (
    //         <p>No feeds found.</p>
    //       ) : (
    //         filteredFeeds.map((feed) => (
    //           <div key={feed.id} className="feed-card">
    //             <div>
    //               <strong>{feed.category}</strong> -{" "}
    //               {new Date(feed.time).toLocaleString()}
    //             </div>
    //             {filteredFeeds.map((feed) => (
    //               <div key={feed.id} className="feed-card">
    //                 <div>
    //                   <strong>{feed.category}</strong> -{" "}
    //                   {new Date(feed.time).toLocaleString()}
    //                 </div>

    //                 {(Array.isArray(feed.images)
    //                   ? feed.images
    //                   : typeof feed.images === "string"
    //                   ? JSON.parse(feed.images)
    //                   : ["https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"]
    //                 ).map((img, i) => (
    //                   <img key={i} src={img} alt="" className="feed-img" />
    //                 ))}

    //                 <h3>{feed.title}</h3>
    //                  <p>{feed.content}</p>
    //                 <div className="feed-author">Posted by: {feed.author}</div>
    //                 {/* ... rest of the card */}
    //               </div>
    //             ))}

    //             <h3>{feed.title}</h3>
    //             <p>{feed.content}</p>
    //             <p>
    //               <em>By {feed.author}</em>
    //             </p>

    //             {feed.is_property ? (
    //               <div className="property-section">
    //                 <h4>{feed.property_name}</h4>
    //                 <p>
    //                   <FiMapPin /> {feed.property_location}
    //                 </p>
    //                 <p>
    //                   <FaBed /> {feed.bedrooms} • <FaBath /> {feed.bathrooms} •{" "}
    //                   <FaRulerCombined /> {feed.area} sqft
    //                 </p>
    //                 <p>
    //                   <FiType /> {feed.property_type}
    //                 </p>
    //                 <p>
    //                   <FiDollarSign /> {Number(feed.price).toLocaleString()}
    //                 </p>
    //                 <p>
    //                   Status: {feed.property_status}, Availability:{" "}
    //                   {feed.availability}
    //                 </p>
    //               </div>
    //             ) : null}

    //             <button onClick={() => handleEdit(feed)}>
    //               <FiEdit />
    //             </button>
    //             <button onClick={() => handleDelete(feed.id)}>
    //               <FiTrash2 />
    //             </button>
    //           </div>
    //         ))
    //       )}
    //     </div>

    //     <div className="news-feed-form">
    //       <h2>{currentFeed ? "Edit Feed" : "New Feed"}</h2>
    //       <form onSubmit={handleSubmit}>
    //         <input
    //           placeholder="Title"
    //           value={formData.title}
    //           onChange={(e) =>
    //             setFormData({ ...formData, title: e.target.value })
    //           }
    //           required
    //         />

    //         <select
    //           value={formData.category}
    //           onChange={(e) =>
    //             setFormData({ ...formData, category: e.target.value })
    //           }
    //         >
    //           <option value="News">News</option>
    //           <option value="Ad">Ad</option>
    //           <option value="Property Post">Property Post</option>
    //         </select>

    //         <textarea
    //           placeholder="Content"
    //           value={formData.content}
    //           onChange={(e) =>
    //             setFormData({ ...formData, content: e.target.value })
    //           }
    //           required
    //         />

    //         <input
    //           placeholder="Author"
    //           value={formData.author}
    //           onChange={(e) =>
    //             setFormData({ ...formData, author: e.target.value })
    //           }
    //           required
    //         />

    //         {formData.images.map((img, i) => (
    //           <div key={i}>
    //             <input
    //               type="text"
    //               value={img}
    //               onChange={(e) => handleImageChange(i, e.target.value)}
    //               placeholder="Image URL"
    //             />
    //           </div>
    //         ))}
    //         <button
    //           type="button"
    //           onClick={() =>
    //             setFormData({ ...formData, images: [...formData.images, ""] })
    //           }
    //         >
    //           Add Image
    //         </button>

    //         <label>
    //           <input
    //             type="checkbox"
    //             checked={formData.isProperty}
    //             onChange={(e) =>
    //               setFormData({ ...formData, isProperty: e.target.checked })
    //             }
    //           />
    //           Is Property Post?
    //         </label>

    //         {formData.isProperty && (
    //           <div className="property-inputs">
    //             <input
    //               placeholder="Property Name"
    //               value={formData.property_name}
    //               onChange={(e) =>
    //                 setFormData({ ...formData, property_name: e.target.value })
    //               }
    //               required
    //             />
    //             <input
    //               placeholder="Location"
    //               value={formData.property_location}
    //               onChange={(e) =>
    //                 setFormData({
    //                   ...formData,
    //                   property_location: e.target.value,
    //                 })
    //               }
    //               required
    //             />
    //             <select
    //               value={formData.property_type}
    //               onChange={(e) =>
    //                 setFormData({ ...formData, property_type: e.target.value })
    //               }
    //             >
    //               <option>Villa</option>
    //               <option>Apartment</option>
    //               <option>House</option>
    //               <option>Flat</option>
    //               <option>Land</option>
    //             </select>
    //             <input
    //               type="number"
    //               placeholder="Bedrooms"
    //               value={formData.bedrooms}
    //               onChange={(e) =>
    //                 setFormData({ ...formData, bedrooms: e.target.value })
    //               }
    //               required
    //             />
    //             <input
    //               type="number"
    //               placeholder="Bathrooms"
    //               value={formData.bathrooms}
    //               onChange={(e) =>
    //                 setFormData({ ...formData, bathrooms: e.target.value })
    //               }
    //               required
    //             />
    //             <input
    //               type="number"
    //               placeholder="Area"
    //               value={formData.area}
    //               onChange={(e) =>
    //                 setFormData({ ...formData, area: e.target.value })
    //               }
    //               required
    //             />
    //             <input
    //               type="number"
    //               placeholder="Price"
    //               value={formData.price}
    //               onChange={(e) =>
    //                 setFormData({ ...formData, price: e.target.value })
    //               }
    //               required
    //             />
    //             <select
    //               value={formData.property_status}
    //               onChange={(e) =>
    //                 setFormData({
    //                   ...formData,
    //                   property_status: e.target.value,
    //                 })
    //               }
    //             >
    //               <option value="for sale">For Sale</option>
    //               <option value="for rent">For Rent</option>
    //               <option value="rented out">Rented Out</option>
    //             </select>
    //             <input
    //               placeholder="Availability"
    //               value={formData.availability}
    //               onChange={(e) =>
    //                 setFormData({ ...formData, availability: e.target.value })
    //               }
    //               required
    //             />
    //           </div>
    //         )}

    //         <button type="submit">{currentFeed ? "Save" : "Create"}</button>
    //         {currentFeed && (
    //           <button type="button" onClick={resetForm}>
    //             Cancel
    //           </button>
    //         )}
    //       </form>
    //     </div>
    //   </div>
    // </div>