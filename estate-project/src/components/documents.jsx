// import { useState } from 'react';
// import { FiSearch, FiFileText, FiUser, FiTrash2, FiDownload, FiPlus, FiCalendar, FiPhone, FiMail } from 'react-icons/fi';
// import './documents.css';

// const DocumentPage = () => {
//   // Sample documents data
//   const initialDocuments = [
//     {
//       id: 1,
//       title: 'Purchase Agreement - Villa Malibu',
//       propertyDetails: {
//         name: 'Luxury Villa in Malibu',
//         location: 'Malibu, California',
//         type: 'Villa',
//         price: 4500000
//       },
//       documentType: 'Agreement',
//       uploadedBy: 'John Doe',
//       date: '2023-05-10',
//       customerDetails: {
//         name: 'Sarah Williams',
//         email: 'sarah.w@example.com',
//         phone: '+1 (555) 234-5678'
//       },
//       agents: [
//         { name: 'Michael Brown', contact: '+1 (555) 345-6789' },
//         { name: 'Lisa Taylor', contact: '+1 (555) 456-7890' }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Rental Receipt - Downtown Apartment',
//       propertyDetails: {
//         name: 'Modern Downtown Apartment',
//         location: 'New York, NY',
//         type: 'Apartment',
//         price: 3200
//       },
//       documentType: 'Receipt',
//       uploadedBy: 'Jane Smith',
//       date: '2023-05-15',
//       customerDetails: {
//         name: 'David Wilson',
//         email: 'david.w@example.com',
//         phone: '+1 (555) 345-6789'
//       },
//       agents: [
//         { name: 'Emma Johnson', contact: '+1 (555) 987-6543' }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Offer Letter - Suburban House',
//       propertyDetails: {
//         name: 'Cozy Suburban House',
//         location: 'Austin, Texas',
//         type: 'House',
//         price: 550000
//       },
//       documentType: 'Offer Letter',
//       uploadedBy: 'Robert Johnson',
//       date: '2023-05-20',
//       customerDetails: {
//         name: 'Michael Brown',
//         email: 'michael.b@example.com',
//         phone: '+1 (555) 456-7890'
//       },
//       agents: []
//     }
//   ];

//   const [documents, setDocuments] = useState(initialDocuments);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterType, setFilterType] = useState('all');
//   const [formData, setFormData] = useState({
//     title: '',
//     documentType: 'Agreement',
//     propertyName: '',
//     propertyLocation: '',
//     propertyType: 'Villa',
//     propertyPrice: '',
//     customerName: '',
//     customerEmail: '',
//     customerPhone: '',
//     agents: []
//   });
//   const [newAgent, setNewAgent] = useState({ name: '', contact: '' });

//   // Filter documents based on search and filters
//   const filteredDocuments = documents.filter(document => {
//     const matchesSearch = document.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          document.propertyDetails.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          document.customerDetails.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesType = filterType === 'all' || document.documentType === filterType;
//     return matchesSearch && matchesType;
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle agent input changes
//   const handleAgentInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewAgent(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Add agent to the list
//   const addAgent = () => {
//     if (newAgent.name && newAgent.contact) {
//       setFormData(prev => ({
//         ...prev,
//         agents: [...prev.agents, newAgent]
//       }));
//       setNewAgent({ name: '', contact: '' });
//     }
//   };

//   // Remove agent from the list
//   const removeAgent = (index) => {
//     setFormData(prev => ({
//       ...prev,
//       agents: prev.agents.filter((_, i) => i !== index)
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newDocument = {
//       id: documents.length > 0 ? Math.max(...documents.map(d => d.id)) + 1 : 1,
//       title: formData.title,
//       propertyDetails: {
//         name: formData.propertyName,
//         location: formData.propertyLocation,
//         type: formData.propertyType,
//         price: parseFloat(formData.propertyPrice)
//       },
//       documentType: formData.documentType,
//       uploadedBy: 'Current User', // This would be replaced with actual user data
//       date: new Date().toISOString().split('T')[0],
//       customerDetails: {
//         name: formData.customerName,
//         email: formData.customerEmail,
//         phone: formData.customerPhone
//       },
//       agents: formData.agents
//     };

//     setDocuments([...documents, newDocument]);

//     // Reset form
//     setFormData({
//       title: '',
//       documentType: 'Agreement',
//       propertyName: '',
//       propertyLocation: '',
//       propertyType: 'Villa',
//       propertyPrice: '',
//       customerName: '',
//       customerEmail: '',
//       customerPhone: '',
//       agents: []
//     });
//   };

//   // Delete a document
//   const handleDelete = (id) => {
//     setDocuments(documents.filter(document => document.id !== id));
//   };

//   return (
//     <div className="document-page">
//       {/* Search and Filter Section */}
//       <div className="search-section">
//         <div className="search-bar">
//           <FiSearch className="search-icon" />
//           <input
//             type="text"
//             placeholder="Search documents by title, property or customer..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <div className="filter-controls">
//           <div className="filter-group">
//             <label>Document Type:</label>
//             <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
//               <option value="all">All Types</option>
//               <option value="Agreement">Agreement</option>
//               <option value="Receipt">Receipt</option>
//               <option value="Offer Letter">Offer Letter</option>
//               <option value="Contract">Contract</option>
//               <option value="Inspection Report">Inspection Report</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="document-container">
//         {/* Documents List */}
//         <div className="documents-list">
//           <div className="list-header">
//             <h2>Documents</h2>
//           </div>

//           {filteredDocuments.length === 0 ? (
//             <div className="no-results">
//               <p>No documents match your search criteria.</p>
//             </div>
//           ) : (
//             <div className="document-cards">
//               {filteredDocuments.map(document => (
//                 <div key={document.id} className="document-card">
//                   <div className="card-header">
//                     <FiFileText className="document-icon" />
//                     <div>
//                       <h3>{document.title}</h3>
//                       <span className={`doc-type ${document.documentType.replace(' ', '-').toLowerCase()}`}>
//                         {document.documentType}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="property-info">
//                     <h4>{document.propertyDetails.name}</h4>
//                     <p>{document.propertyDetails.location} • {document.propertyDetails.type}</p>
//                     <p className="price">${document.propertyDetails.price.toLocaleString()}</p>
//                   </div>

//                   <div className="customer-info">
//                     <FiUser className="icon" />
//                     <div>
//                       <h5>{document.customerDetails.name}</h5>
//                       <p>{document.customerDetails.email}</p>
//                       <p>{document.customerDetails.phone}</p>
//                     </div>
//                   </div>

//                   <div className="meta-info">
//                     <div className="upload-info">
//                       <span>Uploaded by: {document.uploadedBy}</span>
//                       <span><FiCalendar /> {document.date}</span>
//                     </div>

//                     {document.agents.length > 0 && (
//                       <div className="agents-info">
//                         <span>Agents ({document.agents.length}):</span>
//                         <ul>
//                           {document.agents.map((agent, index) => (
//                             <li key={index}>
//                               {agent.name} • {agent.contact}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </div>

//                   <div className="card-actions">
//                     <button className="download-btn">
//                       <FiDownload /> Download
//                     </button>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(document.id)}
//                     >
//                       <FiTrash2 /> Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Document Form */}
//         <div className="document-form-container">
//           <div className="document-form">
//             <h2>Create New Document</h2>

//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Document Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Document Type</label>
//                 <select
//                   name="documentType"
//                   value={formData.documentType}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="Agreement">Agreement</option>
//                   <option value="Receipt">Receipt</option>
//                   <option value="Offer Letter">Offer Letter</option>
//                   <option value="Contract">Contract</option>
//                   <option value="Inspection Report">Inspection Report</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <div className="form-section">
//                 <h4>Property Information</h4>

//                 <div className="form-group">
//                   <label>Property Name</label>
//                   <input
//                     type="text"
//                     name="propertyName"
//                     value={formData.propertyName}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label>Location</label>
//                     <input
//                       type="text"
//                       name="propertyLocation"
//                       value={formData.propertyLocation}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Type</label>
//                     <select
//                       name="propertyType"
//                       value={formData.propertyType}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="Villa">Villa</option>
//                       <option value="Apartment">Apartment</option>
//                       <option value="House">House</option>
//                       <option value="Flat">Flat</option>
//                       <option value="Land">Land</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label>Price</label>
//                   <input
//                     type="number"
//                     name="propertyPrice"
//                     value={formData.propertyPrice}
//                     onChange={handleInputChange}
//                     min="0"
//                     step="0.01"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-section">
//                 <h4>Customer Information</h4>

//                 <div className="form-group">
//                   <label>Customer Name</label>
//                   <input
//                     type="text"
//                     name="customerName"
//                     value={formData.customerName}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label>Email</label>
//                     <input
//                       type="email"
//                       name="customerEmail"
//                       value={formData.customerEmail}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Phone</label>
//                     <input
//                       type="tel"
//                       name="customerPhone"
//                       value={formData.customerPhone}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="form-section">
//                 <h4>Agents (Optional)</h4>

//                 {formData.agents.length > 0 && (
//                   <div className="agents-list">
//                     {formData.agents.map((agent, index) => (
//                       <div key={index} className="agent-item">
//                         <span>{agent.name} • {agent.contact}</span>
//                         <button
//                           type="button"
//                           onClick={() => removeAgent(index)}
//                           className="remove-agent-btn"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 <div className="add-agent">
//                   <div className="form-row">
//                     <div className="form-group">
//                       <label>Agent Name</label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={newAgent.name}
//                         onChange={handleAgentInputChange}
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label>Contact</label>
//                       <input
//                         type="text"
//                         name="contact"
//                         value={newAgent.contact}
//                         onChange={handleAgentInputChange}
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={addAgent}
//                     className="add-agent-btn"
//                     disabled={!newAgent.name || !newAgent.contact}
//                   >
//                     <FiPlus /> Add Agent
//                   </button>
//                 </div>
//               </div>

//               <div className="form-actions">
//                 <button type="submit" className="submit-btn">
//                   Create Document
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocumentPage;

import { useState, useEffect } from "react";
import {
  FiSearch,
  FiFileText,
  FiUser,
  FiTrash2,
  FiDownload,
  FiPlus,
  FiCalendar,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import documentRepository from "../repositories/documentRepository"; // Import your repository
import "./documents.css";
import authRepository from "../repositories/authRepository";
import { userStorage } from "../repositories/userStorage";

const DocumentPage = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [currentUser, setCurrentUser] = useState(null);
  const today = new Date().toISOString().split("T")[0];
  // Form state matches backend requirements
  const [formData, setFormData] = useState({
    title: "",
    documentType: "Agreement",
    user_id: "", // This should come from your auth system
    property_details: {
      name: "",
      location: "",
      type: "Villa",
      price: "",
    },
    customer_details: {
      name: "",
      email: "",
      phone: "",
    },
    agents: [],
    file: null, // For file upload
  });

  const [newAgent, setNewAgent] = useState({ name: "", contact: "" });

  // Fetch documents on component mount
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const user = await userStorage.getCurrentUser();
        setCurrentUser(user);
        const result = await documentRepository.getAll();
        console.log("Fetched documents:", result);
        setDocuments(result);
        // if (result.error) {
        //   setError(result.error);
        // } else {
        // }
      } catch (err) {
        setError("Failed to fetch documents");
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  // Filter documents based on search and filters
  const filteredDocuments = documents.filter((document) => {
    const matchesSearch =
      document.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      document.property_details.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      document.customer_details.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesType =
      filterType === "all" || document.document_type === filterType;
    return matchesSearch && matchesType;
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle nested property_details fields
    if (name.startsWith("property_")) {
      const field = name.replace("property_", "");
      setFormData((prev) => ({
        ...prev,
        property_details: {
          ...prev.property_details,
          [field]: value,
        },
      }));
    }
    // Handle nested customer_details fields
    else if (name.startsWith("customer_")) {
      const field = name.replace("customer_", "");
      setFormData((prev) => ({
        ...prev,
        customer_details: {
          ...prev.customer_details,
          [field]: value,
        },
      }));
    }
    // Handle top-level fields
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  // Handle agent input changes
  const handleAgentInputChange = (e) => {
    const { name, value } = e.target;
    setNewAgent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add agent to the list
  const addAgent = () => {
    if (newAgent.name && newAgent.contact) {
      setFormData((prev) => ({
        ...prev,
        agents: [...prev.agents, newAgent],
      }));
      setNewAgent({ name: "", contact: "" });
    }
  };

  // Remove agent from the list
  const removeAgent = (index) => {
    setFormData((prev) => ({
      ...prev,
      agents: prev.agents.filter((_, i) => i !== index),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // In a real app, user_id would come from your auth system
      const dataToSend = {
        ...formData,
        document_type: "pdf",
        user_id: currentUser?.id,
        uploaded_by: currentUser?.name,
        date: today,
      };
      console.log("Data to send:", dataToSend);

      const result = await documentRepository.create(dataToSend, formData.file);
      console.log("Create document result:", result);

      if (result.error) {
        setError(result.error);
        console.error("Error creating document:", result.error);
      } else {
        // Refresh documents list
        const updatedDocs = await documentRepository.getAll();
        setDocuments(updatedDocs);

        // Reset form
        setFormData({
          title: '',
          documentType: 'Agreement',
          user_id: '',
          property_details: {
            name: '',
            location: '',
            type: 'Villa',
            price: ''
          },
          customer_details: {
            name: '',
            email: '',
            phone: ''
          },
          agents: [],
          file: null
        });
      }
    } catch (err) {
      console.error("Error creating document:", err);
      setError('Failed to create document');
    }
  };

  // Delete a document
  const handleDelete = async (id) => {
    try {
      const result = await documentRepository.delete(id);

      if (result.error) {
        setError(result.error);
      } else {
        // Refresh documents list
        const updatedDocs = await documentRepository.getAll();
        setDocuments(updatedDocs);
      }
    } catch (err) {
      setError("Failed to delete document");
    }
  };

  if (loading) return <div>Loading documents...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="document-page">
      {/* Search and Filter Section */}
      <div className="search-section">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search documents by title, property or customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <label>Document Type:</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="Agreement">Agreement</option>
              <option value="Receipt">Receipt</option>
              <option value="Offer Letter">Offer Letter</option>
              <option value="Contract">Contract</option>
              <option value="Inspection Report">Inspection Report</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="document-container">
        {/* Documents List */}
        <div className="documents-list">
          <div className="list-header">
            <h2>Documents</h2>
          </div>

          {filteredDocuments.length === 0 ? (
            <div className="no-results">
              <p>No documents match your search criteria.</p>
            </div>
          ) : (
            <div className="document-cards">
              {filteredDocuments.map((document) => (
                <div key={document.id} className="document-card">
                  <div className="card-header">
                    <FiFileText className="document-icon" />
                    <div>
                      <h3>{document.title}</h3>
                      <span
                        className={`doc-type ${document.document_type
                          .replace(" ", "-")
                          .toLowerCase()}`}
                      >
                        {document.document_type}
                      </span>
                    </div>
                  </div>

                  <div className="property-info">
                    <h4>{document.property_details.name}</h4>
                    <p>
                      {document.property_details.location} •{" "}
                      {document.property_details.type}
                    </p>
                    <p className="price">
                      ${document.property_details.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="customer-info">
                    <FiUser className="icon" />
                    <div>
                      <h5>{document.customer_details.name}</h5>
                      <p>{document.customer_details.email}</p>
                      <p>{document.customer_details.phone}</p>
                    </div>
                  </div>

                  <div className="meta-info">
                    <div className="upload-info">
                      <span>Uploaded by: {document.uploaded_by}</span>
                      <span>
                        <FiCalendar />{" "}
                        {new Date(document.date).toLocaleDateString()}
                      </span>
                    </div>

                    {document.agents && document.agents.length > 0 && (
                      <div className="agents-info">
                        <span>Agents ({document.agents.length}):</span>
                        <ul>
                          {document.agents.map((agent, index) => (
                            <li key={index}>
                              {agent.name} • {agent.contact}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="card-actions">
                    <button className="download-btn">
                      <FiDownload /> Download
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(document.id)}
                    >
                      <FiTrash2 /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Document Form */}
        <div className="document-form-container">
          <div className="document-form">
            <h2>Create New Document</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                {/* <label>Document Title</label> */}
                <input
                  placeholder="Document Title"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                {/* <label>Document Type</label> */}
                <select
                  name="documentType"
                  placeholder="Document Type"
                  value={formData.documentType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Agreement">Agreement</option>
                  <option value="Receipt">Receipt</option>
                  <option value="Offer Letter">Offer Letter</option>
                  <option value="Contract">Contract</option>
                  <option value="Inspection Report">Inspection Report</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                {/* <label>Document File (Optional)</label> */}
                <input
                  placeholder="Document File"
                  name="file"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>

              <div className="form-section">
                <h4>Property Information</h4>

                <div className="form-group">
                  {/* <label>Property Name</label> */}
                  <input
                    placeholder="Property Name"
                    type="text"
                    name="property_name"
                    value={formData.property_details.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    {/* <label>Location</label> */}
                    <input
                      placeholder="Property Location"
                      type="text"
                      name="property_location"
                      value={formData.property_details.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    {/* <label>Type</label> */}
                    <select
                      placeholder="Property Type"
                      name="property_type"
                      value={formData.property_details.type}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Villa">Villa</option>
                      <option value="Apartment">Apartment</option>
                      <option value="House">House</option>
                      <option value="Flat">Flat</option>
                      <option value="Land">Land</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  {/* <label>Price</label> */}
                  <input
                    placeholder="Property Price"
                    type="number"
                    name="property_price"
                    value={formData.property_details.price}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              <div className="form-section">
                <h4>Customer Information</h4>

                <div className="form-group">
                  {/* <label>Customer Name</label> */}
                  <input
                    placeholder="Customer Name"
                    type="text"
                    name="customer_name"
                    value={formData.customer_details.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    {/* <label>Email</label> */}
                    <input
                      placeholder="Customer Email"
                      type="email"
                      name="customer_email"
                      value={formData.customer_details.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    {/* <label>Phone</label> */}
                    <input
                      placeholder="Customer Phone"
                      type="tel"
                      name="customer_phone"
                      value={formData.customer_details.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h4>Agents (Optional)</h4>

                {formData.agents.length > 0 && (
                  <div className="agents-list">
                    {formData.agents.map((agent, index) => (
                      <div key={index} className="agent-item">
                        <span>
                          {agent.name} • {agent.contact}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeAgent(index)}
                          className="remove-agent-btn"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="add-agent">
                  <div className="form-row">
                    <div className="form-group">
                      {/* <label>Agent Name</label> */}
                      <input
                        placeholder="Agent Name"
                        type="text"
                        name="name"
                        value={newAgent.name}
                        onChange={handleAgentInputChange}
                      />
                    </div>

                    <div className="form-group">
                      {/* <label>Contact</label> */}
                      <input
                        placeholder="Agent Contact"
                        type="text"
                        name="contact"
                        value={newAgent.contact}
                        onChange={handleAgentInputChange}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={addAgent}
                    className="add-agent-btn"
                    disabled={!newAgent.name || !newAgent.contact}
                  >
                    <FiPlus /> Add Agent
                  </button>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Create Document
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
