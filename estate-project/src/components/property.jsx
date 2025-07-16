// // PropertyPage.jsx
// import React, { useState } from 'react';
// import { FaSearch, FaFilter, FaThList, FaThLarge } from 'react-icons/fa';
// import '../css/property.css';

// const SAMPLE_PROPERTIES = [
//   { id: 1, name: 'Crystal House', location: 'North State, UK', type: 'Villa', price: '$2.3M', status: 'For Sale' },
//   { id: 2, name: 'Park Side Colonial', location: 'North State, UK', type: 'Apartment', price: '$3.1M', status: 'Rented' },
//   { id: 3, name: 'Marina Hill', location: 'North State, UK', type: 'Residence', price: '$1.9M', status: 'For Sale' },
//   { id: 4, name: 'Grand Hotel', location: 'North State, UK', type: 'Hotel', price: '$2.5M', status: 'For Rent' }
// ];

// export default function PropertyPage() {
//   const [viewMode, setViewMode] = useState('grid');
//   const [searchTerm, setSearchTerm] = useState('');

//   const filtered = SAMPLE_PROPERTIES.filter(p =>
//     p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     p.location.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="property-container">
//       <header className="property-header">
//         <h2>Properties</h2>
//         <div className="controls">
//           <div className="search-box">
//             <FaSearch className="icon" />
//             <input
//               placeholder="Search properties..."
//               value={searchTerm}
//               onChange={e => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <button onClick={() => setViewMode('list')} className={viewMode==='list'?'active':''}>
//             <FaThList />
//           </button>
//           <button onClick={() => setViewMode('grid')} className={viewMode==='grid'?'active':''}>
//             <FaThLarge />
//           </button>
//         </div>
//       </header>

//       <section className={viewMode === 'grid' ? 'grid-view' : 'list-view'}>
//         {filtered.map(prop => (
//           <article key={prop.id} className="property-card">
//             <div className="card-content">
//               <h3>{prop.name}</h3>
//               <p className="location">{prop.location}</p>
//               <p className="type">Type: {prop.type}</p>
//             </div>
//             <div className="card-footer">
//               <span className="price">{prop.price}</span>
//               <span className={`status ${prop.status.replace(/ /g, '').toLowerCase()}`}>{prop.status}</span>
//             </div>
//           </article>
//         ))}
//       </section>
//     </div>
//   );
// }

// PropertyPage.jsx
// import { useState, useEffect } from 'react';
// import { FiSearch, FiEdit, FiTrash2, FiPlus, FiHome, FiMapPin, FiDollarSign, FiType } from 'react-icons/fi';
// import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
// import './property.css';

// const PropertyPage = () => {
//   // Sample initial properties data
//   const initialProperties = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
//       name: 'Luxury Villa in Malibu',
//       location: 'Malibu, California',
//       type: 'Villa',
//       bedrooms: 5,
//       bathrooms: 4,
//       area: 3200,
//       description: 'Stunning oceanfront villa with panoramic views, private beach access, and luxury amenities.',
//       price: 4500000,
//       status: 'for sale'
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
//       name: 'Modern Downtown Apartment',
//       location: 'New York, NY',
//       type: 'Apartment',
//       bedrooms: 2,
//       bathrooms: 2,
//       area: 1200,
//       description: 'Sleek modern apartment in the heart of downtown with amazing city views.',
//       price: 3200,
//       status: 'for rent'
//     },
//     {
//       id: 3,
//       image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
//       name: 'Cozy Suburban House',
//       location: 'Austin, Texas',
//       type: 'House',
//       bedrooms: 3,
//       bathrooms: 2,
//       area: 1800,
//       description: 'Charming family home with large backyard and modern interior finishes.',
//       price: 550000,
//       status: 'for sale'
//     }
//   ];

//   const [properties, setProperties] = useState(initialProperties);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterType, setFilterType] = useState('all');
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [editingProperty, setEditingProperty] = useState(null);
//   const [isCreating, setIsCreating] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     location: '',
//     type: 'Villa',
//     bedrooms: '',
//     bathrooms: '',
//     area: '',
//     description: '',
//     price: '',
//     status: 'for sale',
//     image: ''
//   });

//   // Filter properties based on search and filters
//   const filteredProperties = properties.filter(property => {
//     const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesType = filterType === 'all' || property.type === filterType;
//     const matchesStatus = filterStatus === 'all' || property.status === filterStatus;
//     return matchesSearch && matchesType && matchesStatus;
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isCreating) {
//       // Create new property
//       const newProperty = {
//         id: properties.length > 0 ? Math.max(...properties.map(p => p.id)) + 1 : 1,
//         ...formData,
//         bedrooms: parseInt(formData.bedrooms),
//         bathrooms: parseInt(formData.bathrooms),
//         area: parseInt(formData.area),
//         price: parseInt(formData.price)
//       };
//       setProperties([...properties, newProperty]);
//     } else if (editingProperty) {
//       // Update existing property
//       const updatedProperties = properties.map(property =>
//         property.id === editingProperty.id ? { ...formData, id: editingProperty.id } : property
//       );
//       setProperties(updatedProperties);
//     }

//     // Reset form
//     setFormData({
//       name: '',
//       location: '',
//       type: 'Villa',
//       bedrooms: '',
//       bathrooms: '',
//       area: '',
//       description: '',
//       price: '',
//       status: 'for sale',
//       image: ''
//     });
//     setEditingProperty(null);
//     setIsCreating(false);
//   };

//   // Set form data when editing a property
//   const handleEdit = (property) => {
//     setEditingProperty(property);
//     setIsCreating(false);
//     setFormData({
//       name: property.name,
//       location: property.location,
//       type: property.type,
//       bedrooms: property.bedrooms,
//       bathrooms: property.bathrooms,
//       area: property.area,
//       description: property.description,
//       price: property.price,
//       status: property.status,
//       image: property.image
//     });
//   };

//   // Delete a property
//   const handleDelete = (id) => {
//     setProperties(properties.filter(property => property.id !== id));
//   };

//   // Start creating a new property
//   const startCreating = () => {
//     setIsCreating(true);
//     setEditingProperty(null);
//     setFormData({
//       name: '',
//       location: '',
//       type: 'Villa',
//       bedrooms: '',
//       bathrooms: '',
//       area: '',
//       description: '',
//       price: '',
//       status: 'for sale',
//       image: ''
//     });
//   };

//   return (
//     <div className="property-page">
//       {/* Search and Filter Section */}
//       <div className="search-section">
//         <div className="search-bar">
//           <FiSearch className="search-icon" />
//           <input
//             type="text"
//             placeholder="Search properties by name or location..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <div className="filter-controls">
//           <div className="filter-group">
//             <label>Type:</label>
//             <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
//               <option value="all">All Types</option>
//               <option value="Villa">Villa</option>
//               <option value="Flat">Flat</option>
//               <option value="House">House</option>
//               <option value="Apartment">Apartment</option>
//             </select>
//           </div>

//           <div className="filter-group">
//             <label>Status:</label>
//             <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
//               <option value="all">All Statuses</option>
//               <option value="for sale">For Sale</option>
//               <option value="for rent">For Rent</option>
//               <option value="rented out">Rented Out</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="property-container">
//         {/* Properties List */}
//         <div className="properties-list">
//           <div className="list-header">
//             <h2>Properties</h2>
//             <button className="add-property-btn" onClick={startCreating}>
//               <FiPlus /> Add Property
//             </button>
//           </div>

//           {filteredProperties.length === 0 ? (
//             <div className="no-results">
//               <p>No properties match your search criteria.</p>
//             </div>
//           ) : (
//             <div className="property-cards">
//               {filteredProperties.map(property => (
//                 <div key={property.id} className={`property-card ${editingProperty?.id === property.id ? 'active' : ''}`}>
//                   <div className="card-image" style={{ backgroundImage: `url(${property.image})` }}></div>
//                   <div className="card-content">
//                     <h3>{property.name}</h3>
//                     <p className="location"><FiMapPin /> {property.location}</p>

//                     <div className="property-details">
//                       <span><FaBed /> {property.bedrooms}</span>
//                       <span><FaBath /> {property.bathrooms}</span>
//                       <span><FaRulerCombined /> {property.area} sqft</span>
//                     </div>

//                     <div className="property-meta">
//                       <span className={`type ${property.type.toLowerCase()}`}>{property.type}</span>
//                       <span className={`status ${property.status.replace(' ', '-')}`}>{property.status}</span>
//                       <span className="price">GHC{property.price.toLocaleString()}</span>
//                     </div>

//                     <div className="card-actions">
//                       <button onClick={() => handleEdit(property)} className="edit-btn">
//                         <FiEdit /> Edit
//                       </button>
//                       <button onClick={() => handleDelete(property.id)} className="delete-btn">
//                         <FiTrash2 /> Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Property Form */}
//         <div className="property-form-container">
//           <div className="property-form">
//             <h2>{isCreating ? 'Add New Property' : 'Edit Property'}</h2>

//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label><FiHome /> Property Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label><FiMapPin /> Location</label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label><FiType /> Type</label>
//                   <select
//                     name="type"
//                     value={formData.type}
//                     onChange={handleInputChange}
//                     required
//                   >
//                     <option value="Villa">Villa</option>
//                     <option value="Flat">Flat</option>
//                     <option value="House">House</option>
//                     <option value="Apartment">Apartment</option>
//                   </select>
//                 </div>

//                 <div className="form-group">
//                   <label>Status</label>
//                   <select
//                     name="status"
//                     value={formData.status}
//                     onChange={handleInputChange}
//                     required
//                   >
//                     <option value="for sale">For Sale</option>
//                     <option value="for rent">For Rent</option>
//                     <option value="rented out">Rented Out</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label><FaBed /> Bedrooms</label>
//                   <input
//                     type="number"
//                     name="bedrooms"
//                     value={formData.bedrooms}
//                     onChange={handleInputChange}
//                     min="1"
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label><FaBath /> Bathrooms</label>
//                   <input
//                     type="number"
//                     name="bathrooms"
//                     value={formData.bathrooms}
//                     onChange={handleInputChange}
//                     min="1"
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label><FaRulerCombined /> Area (sqft)</label>
//                   <input
//                     type="number"
//                     name="area"
//                     value={formData.area}
//                     onChange={handleInputChange}
//                     min="100"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label><FiDollarSign /> Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleInputChange}
//                   min="0"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Image URL</label>
//                 <input
//                   type="text"
//                   name="image"
//                   value={formData.image}
//                   onChange={handleInputChange}
//                   placeholder="https://example.com/image.jpg"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   rows="4"
//                   required
//                 ></textarea>
//               </div>

//               <div className="form-actions">
//                 <button type="submit" className="submit-btn">
//                   {isCreating ? 'Create Property' : 'Update Property'}
//                 </button>
//                 {(editingProperty || isCreating) && (
//                   <button
//                     type="button"
//                     className="cancel-btn"
//                     onClick={() => {
//                       setEditingProperty(null);
//                       setIsCreating(false);
//                     }}
//                   >
//                     Cancel
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyPage;

// import { useState, useEffect } from "react";
// import { FiSearch, FiEdit, FiTrash2, FiPlus, FiMapPin } from "react-icons/fi";
// import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
// import propertyRepository from "../repositories/propertyRepository";
// import "./property.css";
// import authRepository from "../repositories/authRepository";

// const PropertyPage = () => {
//   const [properties, setProperties] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Villa",
//     bedrooms: "",
//     bathrooms: "",
//     area: "",
//     description: "",
//     price: "",
//     status: "for sale",
//     image: null,
//   });
//   const [editingId, setEditingId] = useState(null);
//   const [search, setSearch] = useState("");

//   const fetchProperties = async () => {
//     const res = await propertyRepository.getAll();
//     console.log(res);
//     if (!res.error) setProperties(res);
//   };

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//        // Get current user
//     const currentUser = authRepository.getCurrentUser();
//     if (!currentUser || !currentUser.id) {
//       alert("User not authenticated!");
//       return;
//     }
//     const data = new FormData();
//     Object.entries(formData).forEach(([key, val]) => data.append(key, val));
//      data.append("user_id", currentUser.id);

//     console.log(data);
//     console.log(formData);

//     for (let [key, value] of data.entries()) {
//       console.log(`${key}:`, value);
//     }

//     const res = editingId
//       ? await propertyRepository.update(editingId, data)
//       : await propertyRepository.create(data);

//     if (!res.error) {
//       fetchProperties();
//       setFormData({
//         name: "",
//         location: "",
//         type: "Villa",
//         bedrooms: "",
//         bathrooms: "",
//         area: "",
//         description: "",
//         price: "",
//         status: "for sale",
//         image: null,
//       });
//       setEditingId(null);
//     } else {
//       console.error(res.error);
//       alert(res.error);
//     }
//   };

//   const handleEdit = (property) => {
//     setFormData({
//       name: property.name,
//       location: property.location,
//       type: property.type,
//       bedrooms: property.bedrooms,
//       bathrooms: property.bathrooms,
//       area: property.area,
//       description: property.description,
//       price: property.price,
//       status: property.status,
//       image: null,
//     });
//     setEditingId(property.id);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Delete this property?")) {
//       const res = await propertyRepository.delete(id);
//       if (!res.error) fetchProperties();
//     }
//   };

//   const filtered = properties.filter(
//     (p) =>
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.location.toLowerCase().includes(search.toLowerCase())
//   );

//   return (

//     <div className="property-page">
//       <div className="search-section">
//         <div className="list-header">
//           <h2>Properties</h2>
//           <div className="search-bar">
//             <FiSearch className="search-icon" />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by name or location"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="property-container">
//         <div className="properties-list">
//           {filtered.map((p) => (
//             <div className="property-card" key={p.id}>
//               <div
//                 className="card-image"
//                 style={{ backgroundImage: `url(${p.image})` }}
//               ></div>
//               <div className="card-content">
//                 <h3>{p.name}</h3>
//                 <p className="location">
//                   <FiMapPin /> {p.location}
//                 </p>
//                 <div className="property-details">
//                   <span>
//                     <FaBed /> {p.bedrooms} Beds
//                   </span>
//                   <span>
//                     <FaBath /> {p.bathrooms} Baths
//                   </span>
//                   <span>
//                     <FaRulerCombined /> {p.area} sqft
//                   </span>
//                 </div>
//                 <div className="property-meta">
//                   <span className={`type ${p.type.toLowerCase()}`}>
//                     {p.type}
//                   </span>
//                   <span className={`status ${p.status.replace(" ", "-")}`}>
//                     {p.status}
//                   </span>
//                   <span className="price">GHC {p.price}</span>
//                 </div>
//                 <div className="card-actions">
//                   <button onClick={() => handleEdit(p)} className="edit-btn">
//                     <FiEdit /> Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(p.id)}
//                     className="delete-btn"
//                   >
//                     <FiTrash2 /> Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="property-form-container">
//           <form className="property-form" onSubmit={handleSubmit}>
//             <h3>{editingId ? "Edit Property" : "Add Property"}</h3>
//             <div className="form-group">
//               <input
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 name="location"
//                 placeholder="Location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <input
//                   name="bedrooms"
//                   type="number"
//                   placeholder="Bedrooms"
//                   value={formData.bedrooms}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   name="bathrooms"
//                   type="number"
//                   placeholder="Bathrooms"
//                   value={formData.bathrooms}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   name="area"
//                   type="number"
//                   placeholder="Area (sqft)"
//                   value={formData.area}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <input
//                 name="price"
//                 type="number"
//                 placeholder="Price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <textarea
//                 name="description"
//                 placeholder="Description"
//                 value={formData.description}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <select name="type" value={formData.type} onChange={handleChange}>
//                 <option value="Villa">Villa</option>
//                 <option value="Flat">Flat</option>
//                 <option value="House">House</option>
//                 <option value="Apartment">Apartment</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//               >
//                 <option value="for sale">For Sale</option>
//                 <option value="for rent">For Rent</option>
//                 <option value="rented out">Rented Out</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <input
//                 name="image"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-actions">
//               <button type="submit" className="submit-btn">
//                 {editingId ? "Update" : "Create"}
//               </button>
//               {editingId && (
//                 <button
//                   type="button"
//                   className="cancel-btn"
//                   onClick={() => setEditingId(null)}
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyPage;

// import { useState, useEffect } from "react";
// import { FiSearch, FiEdit, FiTrash2, FiPlus, FiMapPin } from "react-icons/fi";
// import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
// import propertyRepository from "../repositories/propertyRepository";
// import authRepository from "../repositories/authRepository";
// import "./property.css";

// const PropertyPage = () => {
//   const [properties, setProperties] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     type: "Villa",
//     bedrooms: "",
//     bathrooms: "",
//     area: "",
//     description: "",
//     price: "",
//     status: "for sale",
//     image_url: "",
//   });
//   const [editingId, setEditingId] = useState(null);
//   const [search, setSearch] = useState("");
//   useEffect(() => {
//     const checkAuth = async () => {
//       const user = await authRepository.getCurrentUser();
//       console.log("Current user:", user);
//       if (user) {
//         setCurrentUser(user);
//         fetchProperties(user); // pass user explicitly
//       } else {
//         window.location.href = "/auth";
//       }
//     };
//     checkAuth();
//   }, []);
//   const fetchProperties = async (user) => {
//     const res = await propertyRepository.getAll();
//     console.log(res);
//     console.log(user);

//     if (!res.error) {
//       if (user?.role === "admin") {
//         setProperties(res);
//       } else {
//         const filteredProperties = res.filter(
//           (property) => property.user_id === user?.id
//         );
//         setProperties(filteredProperties);
//       }
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!currentUser?.id) {
//       alert("User not authenticated!");
//       return;
//     }

//     const payload = {
//       ...formData,
//       user_id: currentUser.id,
//     };
//     console.log("Submitting payload:", payload);
//     const res = editingId
//       ? await propertyRepository.update(editingId, payload)
//       : await propertyRepository.create(payload);

//     if (!res.error) {
//       fetchProperties();
//       setFormData({
//         name: "",
//         location: "",
//         type: "Villa",
//         bedrooms: "",
//         bathrooms: "",
//         area: "",
//         description: "",
//         price: "",
//         status: "for sale",
//         image_url: "",
//       });
//       setEditingId(null);
//     } else {
//       alert(res.error);
//     }
//   };

//   const handleEdit = (property) => {
//     console.log("Editing property:", property);
//     setFormData({
//       name: property.name,
//       location: property.location,
//       type: property.type,
//       bedrooms: property.bedrooms,
//       bathrooms: property.bathrooms,
//       area: property.area,
//       description: property.description,
//       price: property.price,
//       status: property.status,
//       image_url: property.image,
//     });
//     setEditingId(property.id);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Delete this property?")) {
//       const res = await propertyRepository.delete(id);
//       if (!res.error) fetchProperties();
//     }
//   };

//   const filteredProperties = properties.filter(
//     (p) =>
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.location.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="property-page">
//       <div className="search-section">
//         <div className="list-header">
//           <h2>Properties</h2>
//           <div className="search-bar">
//             <FiSearch className="search-icon" />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by name or location"
//             />
//           </div>
//         </div>
//       </div>

//     <div className="property-container">
//   <div className="properties-list">
//     {filteredProperties.length === 0 ? (
//       <div className="empty-state">
//         <p>
//           {currentUser?.role === 'admin'
//             ? 'No properties found in the system'
//             : 'No properties found under your account'}
//         </p>
//         {currentUser?.role !== 'admin' && (
//           <p className="empty-state-note">
//             (Only admin can view all properties)
//           </p>
//         )}
//       </div>
//     ) : (
//       filteredProperties.map((property) => (
//         <div className="property-card" key={property.id}>
//           {property.image_url && (
//             <div
//               className="card-image"
//               style={{ backgroundImage: `url(${property.image_url})` }}
//             ></div>
//           )}
//           <div className="card-content">
//             <h3>{property.name}</h3>
//             <p className="location">
//               <FiMapPin /> {property.location}
//             </p>
//             <div className="property-details">
//               <span>
//                 <FaBed /> {property.bedrooms} Beds
//               </span>
//               <span>
//                 <FaBath /> {property.bathrooms} Baths
//               </span>
//               <span>
//                 <FaRulerCombined /> {property.area} sqft
//               </span>
//             </div>
//             <div className="property-meta">
//               <span className={`type ${property.type.toLowerCase()}`}>
//                 {property.type}
//               </span>
//               <span className={`status ${property.status.replace(" ", "-")}`}>
//                 {property.status}
//               </span>
//               <span className="price">GHC {property.price}</span>
//             </div>
//             <div className="card-actions">
//               <button
//                 onClick={() => handleEdit(property)}
//                 className="edit-btn"
//               >
//                 <FiEdit /> Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(property.id)}
//                 className="delete-btn"
//               >
//                 <FiTrash2 /> Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       ))
//     )}
//   </div>

//         <div className="property-form-container">
//           <form className="property-form" onSubmit={handleSubmit}>
//             <h3>{editingId ? "Edit Property" : "Add Property"}</h3>

//             <div className="form-group">
//               <input
//                 name="name"
//                 placeholder="Property Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 name="location"
//                 placeholder="Location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <input
//                   name="bedrooms"
//                   type="number"
//                   placeholder="Bedrooms"
//                   value={formData.bedrooms}
//                   onChange={handleChange}
//                   required
//                   min="0"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   name="bathrooms"
//                   type="number"
//                   placeholder="Bathrooms"
//                   value={formData.bathrooms}
//                   onChange={handleChange}
//                   required
//                   min="0"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   name="area"
//                   type="number"
//                   placeholder="Area (sqft)"
//                   value={formData.area}
//                   onChange={handleChange}
//                   required
//                   min="0"
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <input
//                 name="price"
//                 type="number"
//                 placeholder="Price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 required
//                 min="0"
//               />
//             </div>

//             <div className="form-group">
//               <textarea
//                 name="description"
//                 placeholder="Description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 rows="3"
//               ></textarea>
//             </div>

//             <div className="form-group">
//               <select
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="Villa">Villa</option>
//                 <option value="Flat">Flat</option>
//                 <option value="House">House</option>
//                 <option value="Apartment">Apartment</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="for sale">For Sale</option>
//                 <option value="for rent">For Rent</option>
//                 <option value="rented out">Rented Out</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <input
//                 name="image_url"
//                 type="url"
//                 placeholder="Image URL (https://example.com/image.jpg)"
//                 value={formData.image_url}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-actions">
//               <button type="submit" className="submit-btn">
//                 {editingId ? "Update Property" : "Add Property"}
//               </button>
//               {editingId && (
//                 <button
//                   type="button"
//                   className="cancel-btn"
//                   onClick={() => setEditingId(null)}
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyPage;

// <div className="property-page">
//   <div className="header">
//     <h2>Properties</h2>
//     <div className="search-bar">
//       <FiSearch />
//       <input
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search by name or location"
//       />
//     </div>
//   </div>

//   <div className="property-list">
//     {filtered.map((p) => (
//       <div className="card" key={p.id}>
//         <div
//           className="image"
//           style={{ backgroundImage: `url(${p.image})` }}
//         ></div>
//         <div className="content">
//           <h3>{p.name}</h3>
//           <p>
//             <FiMapPin /> {p.location}
//           </p>
//           <p>
//             <FaBed /> {p.bedrooms} Beds <FaBath /> {p.bathrooms} Baths{" "}
//             <FaRulerCombined /> {p.area} sqft
//           </p>
//           <p>GHC {p.price}</p>
//           <div className="actions">
//             <button onClick={() => handleEdit(p)}>
//               <FiEdit /> Edit
//             </button>
//             <button onClick={() => handleDelete(p.id)}>
//               <FiTrash2 /> Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>

//   <form className="property-form" onSubmit={handleSubmit}>
//     <h3>{editingId ? "Edit Property" : "Add Property"}</h3>
//     <input
//       name="name"
//       placeholder="Name"
//       value={formData.name}
//       onChange={handleChange}
//       required
//     />
//     <input
//       name="location"
//       placeholder="Location"
//       value={formData.location}
//       onChange={handleChange}
//       required
//     />
//     <input
//       name="bedrooms"
//       type="number"
//       placeholder="Bedrooms"
//       value={formData.bedrooms}
//       onChange={handleChange}
//       required
//     />
//     <input
//       name="bathrooms"
//       type="number"
//       placeholder="Bathrooms"
//       value={formData.bathrooms}
//       onChange={handleChange}
//       required
//     />
//     <input
//       name="area"
//       type="number"
//       placeholder="Area (sqft)"
//       value={formData.area}
//       onChange={handleChange}
//       required
//     />
//     <input
//       name="price"
//       type="number"
//       placeholder="Price"
//       value={formData.price}
//       onChange={handleChange}
//       required
//     />
//     <textarea
//       name="description"
//       placeholder="Description"
//       value={formData.description}
//       onChange={handleChange}
//     ></textarea>
//     <select name="type" value={formData.type} onChange={handleChange}>
//       <option value="Villa">Villa</option>
//       <option value="Flat">Flat</option>
//       <option value="House">House</option>
//       <option value="Apartment">Apartment</option>
//     </select>
//     <select name="status" value={formData.status} onChange={handleChange}>
//       <option value="for sale">For Sale</option>
//       <option value="for rent">For Rent</option>
//       <option value="rented out">Rented Out</option>
//     </select>
//     <input
//       name="image"
//       type="file"
//       accept="image/*"
//       onChange={handleChange}
//     />
//     <button type="submit">{editingId ? "Update" : "Create"}</button>
//     {editingId && (
//       <button type="button" onClick={() => setEditingId(null)}>
//         Cancel
//       </button>
//     )}
//   </form>
// </div>

import { useState, useEffect } from "react";
import { FiSearch, FiEdit, FiTrash2, FiPlus, FiMapPin } from "react-icons/fi";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import propertyRepository from "../repositories/propertyRepository";
import authRepository from "../repositories/authRepository";
import "./property.css";

const PropertyPage = () => {
  const [properties, setProperties] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    type: "Villa",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    price: "",
    status: "for sale",
    image_url: "",
    isVerified: false,
  });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  // Default images for each property type
  const DEFAULT_IMAGES = {
    Villa: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
    Flat: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    House: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    Apartment: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    Cottage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  };

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authRepository.getCurrentUser();
      console.log("Current user:", user);
      if (user) {
        setCurrentUser(user);
        fetchProperties(user); // pass user explicitly
      } else {
        window.location.href = "/auth";
      }
    };
    checkAuth();
  }, []);

  const fetchProperties = async (user) => {
    const res = await propertyRepository.getAll();
    console.log(res);
    console.log(user);

    if (!res.error) {
      if (user?.role === "admin") {
        setProperties(res);
      } else {
        const filteredProperties = res.filter(
          (property) => property.user_id === user?.id
        );
        setProperties(filteredProperties);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser?.id) {
      alert("User not authenticated!");
      return;
    }

    const payload = {
      ...formData,
      user_id: currentUser.id,
    };
    console.log("Submitting payload:", payload);
    const res = editingId
      ? await propertyRepository.update(editingId, payload)
      : await propertyRepository.create(payload);

    if (!res.error) {
      fetchProperties(currentUser);
      setFormData({
        name: "",
        location: "",
        type: "Villa",
        bedrooms: "",
        bathrooms: "",
        area: "",
        description: "",
        price: "",
        status: "for sale",
        image_url: "",
        isVerified: false,
      });
      setEditingId(null);
    } else {
      alert(res.error);
    }
  };

  const handleEdit = (property) => {
    console.log("Editing property:", property);
    setFormData({
      name: property.name,
      location: property.location,
      type: property.type,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      area: property.area,
      description: property.description,
      price: property.price,
      status: property.status,
      image_url: property.image,
      isVerified: property.isVerified,
    });
    setEditingId(property.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this property?")) {
      const res = await propertyRepository.delete(id);
      if (!res.error) fetchProperties(currentUser);
    }
  };

  const filteredProperties = properties.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="property-page">
      <div className="search-section">
        <div className="list-header">
          <h2>Properties</h2>
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or location"
            />
          </div>
        </div>
      </div>

      <div className="property-container">
        <div className="properties-list">
          {filteredProperties.length === 0 ? (
            <div className="empty-state">
              <p>
                {currentUser?.role === "admin"
                  ? "No properties found in the system"
                  : "No properties found under your account"}
              </p>
              {currentUser?.role !== "admin" && (
                <p className="empty-state-note">
                  (Only admin can view all properties)
                </p>
              )}
            </div>
          ) : (
            filteredProperties.map((property) => (
              <div className="property-card" key={property.id}>
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${
                      property.image ||
                      DEFAULT_IMAGES[property.type] ||
                      DEFAULT_IMAGES.House
                    })`,
                  }}
                ></div>
                <div className="card-content">
                  <h3>{property.name}</h3>
                  <p className="location">
                    <FiMapPin /> {property.location}
                    {property.isVerified && (
                      <span className="verified-badge">Verified</span>
                    )}
                  </p>
                  <div className="property-details">
                    <span>
                      <FaBed /> {property.bedrooms} Beds
                    </span>
                    <span>
                      <FaBath /> {property.bathrooms} Baths
                    </span>
                    <span>
                      <FaRulerCombined /> {property.area} sqft
                    </span>
                  </div>
                  <div className="property-meta">
                    <span className={`type ${property.type.toLowerCase()}`}>
                      {property.type}
                    </span>
                    <span
                      className={`status ${property.status.replace(" ", "-")}`}
                    >
                      {property.status}
                    </span>
                    <span className="price">GHC {property.price}</span>
                  </div>
                  <div className="card-actions">
                    <button
                      onClick={() => handleEdit(property)}
                      className="edit-btn"
                    >
                      <FiEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(property.id)}
                      className="delete-btn"
                    >
                      <FiTrash2 /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="property-form-container">
          <form className="property-form" onSubmit={handleSubmit}>
            <h3>{editingId ? "Edit Property" : "Add Property"}</h3>

            <div className="form-group">
              <input
                name="name"
                placeholder="Property Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  name="bedrooms"
                  type="number"
                  placeholder="Bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>
              <div className="form-group">
                <input
                  name="bathrooms"
                  type="number"
                  placeholder="Bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>
              <div className="form-group">
                <input
                  name="area"
                  type="number"
                  placeholder="Area (sqft)"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>
            </div>

            <div className="form-group">
              <input
                name="price"
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
              />
            </div>

            <div className="form-group">
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="Villa">Villa</option>
                <option value="Flat">Flat</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>

            <div className="form-group">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="for sale">For Sale</option>
                <option value="sold out">Sold Out</option>
                <option value="rented out">Rented Out</option>
                <option value="for rent">For Rent</option>
                <option value="ongoing construction">
                  Ongoing Construction
                </option>
              </select>
            </div>

            <div className="form-group">
              <input
                name="image_url"
                type="url"
                placeholder="Image URL (https://example.com/image.jpg)"
                value={formData.image_url}
                onChange={handleChange}
              />
            </div>

            {currentUser?.role === "admin" && (
              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  name="isVerified"
                  checked={formData.isVerified}
                  onChange={handleChange}
                />
                Verified Property
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                {editingId ? "Update Property" : "Add Property"}
              </button>
              {editingId && (
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setEditingId(null)}
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

export default PropertyPage;
