// // CustomersPage.jsx
// import React, { useState } from 'react';
// import { FaSearch, FaThList, FaThLarge, FaUserCircle } from 'react-icons/fa';
// import '../css/customers.css';

// const SAMPLE_CUSTOMERS = [
//   { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 555-1234', properties: 4, status: 'Active' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 555-5678', properties: 2, status: 'Inactive' },
//   { id: 3, name: 'Samuel Green', email: 'samuel@example.com', phone: '+1 555-9012', properties: 6, status: 'Active' },
//   { id: 4, name: 'Emma Brown', email: 'emma@example.com', phone: '+1 555-3456', properties: 1, status: 'Active' }
// ];

// export default function CustomersPage() {
//   const [viewMode, setViewMode] = useState('grid');
//   const [searchTerm, setSearchTerm] = useState('');

//   const filtered = SAMPLE_CUSTOMERS.filter(c =>
//     c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     c.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="customers-container">
//       <header className="customers-header">
//         <h2>Customers</h2>
//         <div className="controls">
//           <div className="search-box">
//             <FaSearch className="icon" />
//             <input
//               type="text"
//               placeholder="Search customers..."
//               value={searchTerm}
//               onChange={e => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <button onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'active' : ''}>
//             <FaThList />
//           </button>
//           <button onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'active' : ''}>
//             <FaThLarge />
//           </button>
//         </div>
//       </header>

//       <section className={viewMode === 'grid' ? 'grid-view' : 'list-view'}>
//         {filtered.map(customer => (
//           <article key={customer.id} className="customer-card">
//             <div className="card-icon">
//               <FaUserCircle />
//             </div>
//             <div className="card-content">
//               <h3>{customer.name}</h3>
//               <p className="email">{customer.email}</p>
//               <p className="phone">{customer.phone}</p>
//               <p className="props">Properties: {customer.properties}</p>
//             </div>
//             <div className={`status ${customer.status.toLowerCase()}`}>{customer.status}</div>
//           </article>
//         ))}
//       </section>
//     </div>
//   );
// }



// import { useState } from 'react';
// import { FiUser, FiPhone, FiMail, FiDollarSign, FiHome, FiCheck, FiX, FiClock } from 'react-icons/fi';
// import './customers.css';

// const CustomersPage = () => {
//   // Sample offers data
//   const initialOffers = [
//     {
//       id: 1,
//       customerName: 'John Smith',
//       customerEmail: 'john.smith@example.com',
//       customerPhone: '+1 (555) 123-4567',
//       offerBid: 420000,
//       propertyName: 'Luxury Villa in Malibu',
//       propertyDescription: 'Stunning oceanfront villa with panoramic views',
//       propertyPrice: 4500000,
//       date: '2023-05-15',
//       status: 'pending'
//     },
//     {
//       id: 2,
//       customerName: 'Emma Johnson',
//       customerEmail: 'emma.j@example.com',
//       customerPhone: '+1 (555) 987-6543',
//       offerBid: 3200,
//       propertyName: 'Modern Downtown Apartment',
//       propertyDescription: 'Sleek modern apartment in the heart of downtown',
//       propertyPrice: 3500,
//       date: '2023-05-18',
//       status: 'pending'
//     },
//     {
//       id: 3,
//       customerName: 'Michael Brown',
//       customerEmail: 'michael.b@example.com',
//       customerPhone: '+1 (555) 456-7890',
//       offerBid: 525000,
//       propertyName: 'Cozy Suburban House',
//       propertyDescription: 'Charming family home with large backyard',
//       propertyPrice: 550000,
//       date: '2023-05-20',
//       status: 'rejected'
//     }
//   ];

//   // Sample deals data
//   const initialDeals = [
//     {
//       id: 101,
//       customerName: 'Sarah Williams',
//       customerEmail: 'sarah.w@example.com',
//       customerPhone: '+1 (555) 234-5678',
//       transactionType: 'sale',
//       finalPrice: 4300000,
//       propertyName: 'Luxury Villa in Malibu',
//       propertyDescription: 'Stunning oceanfront villa with panoramic views',
//       date: '2023-04-10',
//       status: 'completed'
//     },
//     {
//       id: 102,
//       customerName: 'David Wilson',
//       customerEmail: 'david.w@example.com',
//       customerPhone: '+1 (555) 345-6789',
//       transactionType: 'rent',
//       finalPrice: 3400,
//       propertyName: 'Modern Downtown Apartment',
//       propertyDescription: 'Sleek modern apartment in the heart of downtown',
//       date: '2023-04-15',
//       status: 'completed'
//     },
//     {
//       id: 103,
//       customerName: 'Lisa Taylor',
//       customerEmail: 'lisa.t@example.com',
//       customerPhone: '+1 (555) 456-7890',
//       transactionType: 'sale',
//       finalPrice: 540000,
//       propertyName: 'Cozy Suburban House',
//       propertyDescription: 'Charming family home with large backyard',
//       date: '2023-04-22',
//       status: 'pending'
//     }
//   ];

//   const [offers] = useState(initialOffers);
//   const [deals] = useState(initialDeals);
//   const [activeTab, setActiveTab] = useState('offers');

//   return (
//     <div className="customers-page">
//       <div className="page-header">
//         <h1>Customer Offers & Deals</h1>
//         <div className="tabs">
//           <button 
//             className={`tab-btn ${activeTab === 'offers' ? 'active' : ''}`}
//             onClick={() => setActiveTab('offers')}
//           >
//             Offers
//           </button>
//           <button 
//             className={`tab-btn ${activeTab === 'deals' ? 'active' : ''}`}
//             onClick={() => setActiveTab('deals')}
//           >
//             Closed Deals
//           </button>
//         </div>
//       </div>

//       {activeTab === 'offers' ? (
//         <div className="offers-section">
//           <h2>Current Offers</h2>
//           {offers.length === 0 ? (
//             <div className="no-results">
//               <p>No current offers available.</p>
//             </div>
//           ) : (
//             <div className="offers-grid">
//               {offers.map(offer => (
//                 <div key={offer.id} className={`offer-card ${offer.status}`}>
//                   <div className="card-header">
//                     <div className="customer-info">
//                       <FiUser className="icon" />
//                       <h3>{offer.customerName}</h3>
//                       <span className={`status-badge ${offer.status}`}>
//                         {offer.status === 'pending' ? <FiClock /> : <FiX />}
//                         {offer.status}
//                       </span>
//                     </div>
//                     <div className="offer-price">
//                       <span className="label">Offer:</span>
//                       <span className="amount">${offer.offerBid.toLocaleString()}</span>
//                       <span className="original-price">
//                         (${offer.propertyPrice.toLocaleString()})
//                       </span>
//                     </div>
//                   </div>

//                   <div className="property-info">
//                     <FiHome className="icon" />
//                     <div>
//                       <h4>{offer.propertyName}</h4>
//                       <p>{offer.propertyDescription}</p>
//                     </div>
//                   </div>

//                   <div className="contact-info">
//                     <div className="contact-item">
//                       <FiPhone className="icon" />
//                       <span>{offer.customerPhone}</span>
//                     </div>
//                     <div className="contact-item">
//                       <FiMail className="icon" />
//                       <span>{offer.customerEmail}</span>
//                     </div>
//                   </div>

//                   <div className="card-footer">
//                     <span className="date">{offer.date}</span>
//                     <div className="actions">
//                       {offer.status === 'pending' && (
//                         <>
//                           <button className="accept-btn">
//                             <FiCheck /> Accept
//                           </button>
//                           <button className="reject-btn">
//                             <FiX /> Reject
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ) : (
//         <div className="deals-section">
//           <h2>Closed Deals</h2>
//           {deals.length === 0 ? (
//             <div className="no-results">
//               <p>No closed deals available.</p>
//             </div>
//           ) : (
//             <div className="deals-table">
//               <div className="table-header">
//                 <div>Customer</div>
//                 <div>Transaction</div>
//                 <div>Property</div>
//                 <div>Final Price</div>
//                 <div>Status</div>
//               </div>
//               {deals.map(deal => (
//                 <div key={deal.id} className={`table-row ${deal.status}`}>
//                   <div className="customer-cell">
//                     <FiUser className="icon" />
//                     <div>
//                       <h4>{deal.customerName}</h4>
//                       <p>{deal.customerEmail}</p>
//                     </div>
//                   </div>
//                   <div className={`transaction-type ${deal.transactionType}`}>
//                     {deal.transactionType === 'sale' ? 'Sale' : 'Rental'}
//                   </div>
//                   <div className="property-cell">
//                     <FiHome className="icon" />
//                     <div>
//                       <h4>{deal.propertyName}</h4>
//                       <p>{deal.propertyDescription}</p>
//                     </div>
//                   </div>
//                   <div className="price-cell">
//                     <FiDollarSign className="icon" />
//                     <span>${deal.finalPrice.toLocaleString()}</span>
//                   </div>
//                   <div className={`status-cell ${deal.status}`}>
//                     {deal.status === 'completed' ? <FiCheck /> : <FiClock />}
//                     {deal.status}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomersPage;


import { useEffect, useState } from 'react';
import { FiUser, FiPhone, FiMail, FiDollarSign, FiHome, FiCheck, FiX, FiClock, FiTrash2 } from 'react-icons/fi';
import customerDealRepository from '../repositories/customerDealRepository';
import './customers.css';
import authRepository from '../repositories/authRepository';

const CustomersPage = () => {
  const [offers, setOffers] = useState([]);
  const [deals, setDeals] = useState([]);
  const [activeTab, setActiveTab] = useState('offers');
  const [currentUser, setCurrentUser] = useState(null);

   useEffect(() => {
      const checkAuth = async () => {
        const user = await authRepository.getCurrentUser();
        console.log("Current user:", user);
        if (user) {
          setCurrentUser(user);
         fetchData(user);
        } else {
          window.location.href = "/auth";
        }
      };
      checkAuth();
    }, []);


  // const fetchData = async () => {
  //   const all = await customerDealRepository.getAll();
  //   if (Array.isArray(all)) {
  //     setOffers(all.filter(item => item.status === 'pending'));
  //     setDeals(all.filter(item => item.status !== 'pending'));
  //   }
  // };

   const fetchData = async (user) => {
    const all = await customerDealRepository.getAll();
    console.log("Fetched data:", all);
    if (Array.isArray(all)) {
      // Filter based on role
      const filteredData = user.role === 'admin' 
        ? all 
        : all.filter(item => item.user_id === user.id);

      setOffers(filteredData.filter(item => item.status === 'pending'));
      setDeals(filteredData.filter(item => item.status !== 'pending'));
    }
  };

  const handleStatusChange = async (id, status) => {
    const res = await customerDealRepository.update(id, { status });
    console.log(res)
    if (res.success) {
      fetchData(); // Refresh data
    } else {
      alert(res.error || 'Failed to update');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      const res = await customerDealRepository.delete(id);
      if (res.success) fetchData();
      else alert(res.error || 'Failed to delete');
    }
  };

  return (
    <div className="customers-page">
      <div className="page-header">
        <h1>Customer Offers & Deals</h1>
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'offers' ? 'active' : ''}`}
            onClick={() => setActiveTab('offers')}
          >
            Offers
          </button>
          <button 
            className={`tab-btn ${activeTab === 'deals' ? 'active' : ''}`}
            onClick={() => setActiveTab('deals')}
          >
            Closed Deals
          </button>
        </div>
      </div>

      {activeTab === 'offers' ? (
        <div className="offers-section">
          <h2>Current Offers</h2>
          {offers.length === 0 ? (
            <p>No current offers available.</p>
          ) : (
            <div className="offers-grid">
              {offers.map(offer => (
                <div key={offer.id} className={`offer-card ${offer.status}`}>
                  <div className="card-header">
                    <div className="customer-info">
                      <FiUser className="icon" />
                      <h3>{offer.customer_name}</h3>
                      <span className={`status-badge ${offer.status}`}>
                        <FiClock /> {offer.status}
                      </span>
                    </div>
                    <div className="offer-price">
                      <span className="label">Offer:</span>
                      <span className="amount">${Number(offer.offer_bid).toLocaleString()}</span>
                      <span className="original-price">(${Number(offer.property_price).toLocaleString()})</span>
                    </div>
                  </div>

                  <div className="property-info">
                    <FiHome className="icon" />
                    <div>
                      <h4>{offer.property_name}</h4>
                      <p>{offer.property_description}</p>
                    </div>
                  </div>

                  <div className="contact-info">
                    <div className="contact-item">
                      <FiPhone className="icon" />
                      <span>{offer.customer_phone}</span>
                    </div>
                    <div className="contact-item">
                      <FiMail className="icon" />
                      <span>{offer.customer_email}</span>
                    </div>
                  </div>

                  <div className="card-footer">
                    <span className="date">{offer.date}</span>
                    <div className="actions">
                      <button className="accept-btn" onClick={() => handleStatusChange(offer.id, 'accepted')}>
                        <FiCheck /> Accept
                      </button>
                      <button className="reject-btn" onClick={() => handleStatusChange(offer.id, 'rejected')}>
                        <FiX /> Reject
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(offer.id)}>
                        <FiTrash2 /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="deals-section">
          <h2>Closed Deals</h2>
          {deals.length === 0 ? (
            <p>No closed deals available.</p>
          ) : (
            <div className="deals-table">
              <div className="table-header">
                <div>Customer</div>
                <div>Transaction</div>
                <div>Property</div>
                <div>Final Price</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              {deals.map(deal => (
                <div key={deal.id} className={`table-row ${deal.status}`}>
                  <div className="customer-cell">
                    <FiUser className="icon" />
                    <div>
                      <h4>{deal.customer_name}</h4>
                      <p>{deal.customer_email}</p>
                    </div>
                  </div>
                  <div className="transaction-type">
                    {deal.transaction_type ?? 'sale'}
                  </div>
                  <div className="property-cell">
                    <FiHome className="icon" />
                    <div>
                      <h4>{deal.property_name}</h4>
                      <p>{deal.property_description}</p>
                    </div>
                  </div>
                  <div className="price-cell">
                    <FiDollarSign className="icon" />
                    <span>${Number(deal.final_price ?? deal.offer_bid).toLocaleString()}</span>
                  </div>
                  <div className={`status-cell ${deal.status}`}>
                    {deal.status === 'completed' ? <FiCheck /> : <FiClock />}
                    {deal.status}
                  </div>
                  <div className="action-cell">
                    <button className="delete-btn" onClick={() => handleDelete(deal.id)}>
                      <FiTrash2 /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomersPage;
