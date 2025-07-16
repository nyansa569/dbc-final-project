//! First wqork
//? the first work was to create a dashboard for a real estate company. 
// import React from "react";
// import "../css/dashboard.css";

// const properties = [
//   {
//     id: 1,
//     title: "Modern Family Home",
//     location: "San Francisco, CA",
//     price: "$1,200,000",
//     status: "Available",
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
//   },
//   {
//     id: 2,
//     title: "Downtown Apartment",
//     location: "New York, NY",
//     price: "$850,000",
//     status: "Sold",
//     image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80"
//   },
//   {
//     id: 3,
//     title: "Cozy Cottage",
//     location: "Portland, OR",
//     price: "$540,000",
//     status: "Available",
//     image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
//   }
// ];

// export default function Dashboard() {
//   return (
//     <div className="dashboard-container">
//       <nav className="dashboard-nav">
//         <ul>
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Properties</a></li>
//           <li><a href="#">Agents</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//       </nav>
//       <header className="dashboard-header">
//         <h1>Welcome to Real Estate Dashboard</h1>
//         <p>Your one-stop solution for buying and selling properties</p>
//       </header>
//       <section className="property-section">
//         <h2>Featured Properties</h2>
//         <div className="property-list">
//           {properties.map((property) => (
//             <div className="property-card" key={property.id}>
//               <img src={property.image} alt={property.title} className="property-image" />
//               <div className="property-info">
//                 <h3>{property.title}</h3>
//                 <p>{property.location}</p>
//                 <p className="property-price">{property.price}</p>
//                 <span className={`property-status ${property.status.toLowerCase()}`}>
//                   {property.status}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <footer className="dashboard-footer">
//         <p>&copy; 2025 Real Estate Company. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }






//! Second
//? Dashboard.jsx
//? import React from 'react';
//? import { FaSearch, FaBell, FaUserCircle, FaHome, FaBuilding, FaUsers, FaCalendarAlt, FaEnvelope, FaVideo } from 'react-icons/fa';
//? import "../css/dashboard.css";

//? export default function Dashboard() {
//?   return (
//?     <div className="dashboard-container">
//?       <aside className="sidebar">
//?         <div className="sidebar-header">
//?           <h1>GI-KACE DBC Group 6</h1>
//?           <span>Premium</span>
//?         </div>
//?         <div className="search-box">
//?           <FaSearch className="icon" />
//?           <input type="text" placeholder="Search" />
//?         </div>
//?         <nav className="menu">
//?           <a href="#"><FaHome className="icon" />Dashboard</a>
//?           <a href="#"><FaBuilding className="icon" />Property</a>
//?           <a href="#"><FaUsers className="icon" />Customers</a>
//?           <a href="#"><FaCalendarAlt className="icon" />Calendar</a>
//?           <a href="#"><FaEnvelope className="icon" />Messages<span className="badge">5</span></a>
//?           <a href="#"><FaVideo className="icon" />Video Meeting</a>
//?         </nav>
//?         <div className="upgrade">
//?           {/* <p>Become a <strong>PRO</strong></p> */}
//?           <button>Logout</button>
//?         </div>
//?       </aside>

//?       <main className="main-content">
//?         <header>
//?           <div className="header-left">
//?             <h2>Dashboard</h2>
//?           </div>
//?           <div className="header-right">
//?             <div className="search-input">
//?               <FaSearch className="icon" />
//?               <input type="text" placeholder="Search..." />
//?             </div>
//?             <FaBell className="icon bell" />
//?             <FaUserCircle className="icon avatar" />
//?           </div>
//?         </header>

//?         <section className="cards-grid">
//?           <div className="card">
//?             <h3>Properties for sale</h3>
//?             <p className="number">684</p>
//?             <p className="change down">-25%<span>Less than last week</span></p>
//?           </div>
//?           <div className="card">
//?             <h3>Properties for rent</h3>
//?             <p className="number">546</p>
//?             <p className="change up">+15%<span>Less than last week</span></p>
//?           </div>
//?           <div className="card">
//?             <h3>Total Customers</h3>
//?             <p className="number">1522</p>
//?             <p className="change up">+35%<span>Less than last week</span></p>
//?           </div>
//?         </section>

//?         <section className="chart-section">
//?           <h3>Revenue Overview</h3>
//?           <div className="chart-placeholder">[Chart]</div>
//?         </section>

//?         <section className="table-section">
//?           <h3>Sales Report</h3>
//?           <table>
//?             <thead>
//?               <tr>
//?                 <th>Sales by</th>
//?                 <th>Property Name</th>
//?                 <th>Status</th>
//?                 <th>Sales Type</th>
//?                 <th>Price</th>
//?               </tr>
//?             </thead>
//?             <tbody>
//?               <tr>
//?                 <td>Benny Chagura</td>
//?                 <td>Lafayette, California</td>
//?                 <td className="paid">Paid</td>
//?                 <td>Sale</td>
//?                 <td>$2.4M</td>
//?               </tr>
//?               <tr>
//?                 <td>Courtney Henry</td>
//?                 <td>Lansing, Illinois</td>
//?                 <td className="pending">Pending</td>
//?                 <td>Rent</td>
//?                 <td>$3.1M</td>
//?               </tr>
//?               <tr>
//?                 <td>Esther Howard</td>
//?                 <td>Stockton, Hampshire</td>
//?                 <td className="paid">Paid</td>
//?                 <td>Sale</td>
//?                 <td>$2.2M</td>
//?               </tr>
//?             </tbody>
//?           </table>
//?         </section>
//?       </main>
//?     </div>
//?   );
//? }


//third time is a charm

// Dashboard.jsx
import React, { useState } from 'react';
import { FaSearch, FaBell, FaUserCircle, FaHome, FaBuilding, FaUsers, FaCalendarAlt, FaEnvelope, FaVideo, FaCity, FaCamera } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import '../css/dashboard.css';
import SideNav from './sidenav';

const stats = [
  { title: 'Properties for sale', value: 684, change: -25, label: 'Less than last week', icon: <FaCalendarAlt />, color: '#006cff' },
  { title: 'Properties for Rent', value: 546, change: -15, label: 'Less than last week', icon: <FaCamera />, color: '#fa8c16' },
  { title: 'Total Customer', value: 1522, change: 35, label: 'Less than last week', icon: <FaUsers />, color: '#52c41a' },
  { title: 'Total City', value: 120, change: -15, label: 'Less than last week', icon: <FaCity />, color: '#eb2f96' }
];

const revenueData = [
  { month: 'Jan', rent: 20000, sell: 15000 },
  { month: 'Mar', rent: 25000, sell: 22000 },
  { month: 'May', rent: 30000, sell: 29000 },
  { month: 'Jul', rent: 28000, sell: 27000 },
  { month: 'Aug', rent: 35000, sell: 33000 },
  { month: 'Oct', rent: 40000, sell: 38000 },
  { month: 'Dec', rent: 45000, sell: 43000 }
];

const propertyTypeData = [{ name: 'Residency', value: 50 }, { name: 'Apartment', value: 30 }, { name: 'Villa', value: 20 }];
const COLORS = ['#006cff', '#60caff', '#05d69c'];
const sales = [
  { by: 'Benny Chagura', property: 'Lafayette, California', status: 'Paid', type: 'Sale', price: '$2.4M' },
  { by: 'Courtney Henry', property: 'Lansing, Illinois', status: 'Pending', type: 'Rent', price: '$3.1M' },
  { by: 'Esther Howard', property: 'Stockton, Hampshire', status: 'Paid', type: 'Sale', price: '$2.2M' }
];
const topProps = [
  { name: 'Crystal House', location: 'North State, UK', price: '$2.3M' },
  { name: 'Park Side Colonial', location: 'North State, UK', price: '$3.1M' },
  { name: 'Marina Hill', location: 'North State, UK', price: '$1.9M' },
  { name: 'Grand Hotel', location: 'North State, UK', price: '$2.5M' }
];

export default function Dashboard() {
  const [order, setOrder] = useState('Newest');
  return (
    <div className="dashboard-container">
      {/* <SideNav/> */}
      <main>
        <header>
          <h2>Dashboard</h2>
          <div className="header-controls">
            <div className="header-search"><FaSearch /><input placeholder="Search" /></div>
            <FaBell className="icon" />
            <FaUserCircle className="icon avatar" />
          </div>
        </header>
        <section className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon" style={{ color: s.color }}>{s.icon}</div>
              <p>{s.title}</p>
              <h3>{s.value}</h3>
              <div className="progress-bar">
                <div style={{ width: '50%', background: s.color }}></div>
              </div>
              <small className={s.change < 0 ? 'down' : 'up'}>
                {s.change > 0 ? `+${s.change}%` : `${s.change}%`}
                <span>{s.label}</span>
              </small>
            </div>
          ))}
        </section>
        <section className="charts">
          <div className="chart-big">
            <div className="chart-header">
              <h3>Revenue Overview</h3>
              <select><option>Months</option></select>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rent" stroke="#006cff" />
                <Line type="monotone" dataKey="sell" stroke="#ccc" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-small">
            <div className="chart-header">
              <h3>Property Type <span>See All</span></h3>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie data={propertyTypeData} dataKey="value" innerRadius={60} outerRadius={80}>
                  {propertyTypeData.map((entry, index) => <Cell key={index} fill={COLORS[index]} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <ul className="legend">
              {propertyTypeData.map((d, i) => <li key={i}><span style={{ background: COLORS[i] }}></span>{d.name}</li>)}
            </ul>
          </div>
        </section>
        <section className="reports">
          <div className="report-table">
            <div className="report-header">
              <h3>Sales Report</h3>
              <div className="toggle">
                <button onClick={() => setOrder('Newest')} className={order === 'Newest' ? 'active' : ''}>Newest</button>
                <button onClick={() => setOrder('Oldest')} className={order === 'Oldest' ? 'active' : ''}>Oldest</button>
              </div>
            </div>
            <table>
              <thead><tr><th>Sales by</th><th>Property name</th><th>Status</th><th>Sales Type</th><th>Price</th></tr></thead>
              <tbody>
                {sales.map((r, i) => (<tr key={i}><td>{r.by}</td><td>{r.property}</td><td className={r.status === 'Paid' ? 'paid' : 'pending'}>{r.status}</td><td>{r.type}</td><td>{r.price}</td></tr>))}
              </tbody>
            </table>
          </div>
          <div className="report-table">
            <div className="report-header">
              <h3>Top Property <span>See All</span></h3>
            </div>
            <ul className="top-list">
              {topProps.map((p, i) => (<li key={i}><div><FaBuilding className="icon" /><div><strong>{p.name}</strong><small>{p.location}</small></div></div><span>{p.price}</span></li>))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}