// import React, { useState } from 'react';
// import "./NewsFeeds.css"; // We'll create this CSS file next
// import Navbar from './Navbar';
// import newsFeedRepository from "../repositories/newsFeedRepository";


// const NewsFeed = () => {
//    const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const feedItems = [
//     {
//       id: 1,
//       title: "New Luxury Villa Listing in Malibu",
//       category: "Property Post",
//       content:
//         "We are excited to announce a stunning new luxury villa listing in Malibu with ocean views and premium amenities.",
//       author: "John Doe",
//       time: "2023-05-10 14:30",
//       images: [
//         "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
//         "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
//       ],
//       isProperty: true,
//       propertyDetails: {
//         name: "Luxury Villa in Malibu",
//         location: "Malibu, California",
//         type: "Villa",
//         bedrooms: 5,
//         bathrooms: 4,
//         area: 3200,
//         price: 4500000,
//         status: "for sale",
//       },
//       availability: "Available",
//     },
//     {
//       id: 2,
//       title: "Market Trends: Luxury Home Prices Rise 15% in Q2",
//       category: "Market Update",
//       content:
//         "The latest market analysis shows a 15% increase in luxury home prices across coastal markets. Experts attribute this to high demand and limited inventory.",
//       author: "Sarah Johnson",
//       time: "2023-05-08 09:15",
//       images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"],
//       isProperty: false,
//     },
//     {
//       id: 3,
//       title: "Downtown Penthouse Available for Lease",
//       category: "Property Post",
//       content:
//         "Exclusive penthouse in the heart of the city now available for lease. Features floor-to-ceiling windows and private rooftop access.",
//       author: "Michael Chen",
//       time: "2023-05-05 16:45",
//       images: [
//         "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
//         "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
//       ],
//       isProperty: true,
//       propertyDetails: {
//         name: "Cityscape Penthouse",
//         location: "Downtown",
//         type: "Penthouse",
//         bedrooms: 3,
//         bathrooms: 3.5,
//         area: 2800,
//         price: 12500,
//         status: "for rent",
//       },
//       availability: "Available",
//     },
//     {
//       id: 4,
//       title: 'LuxeEstate Wins "Best Luxury Brokerage" Award',
//       category: "Company News",
//       content:
//         'We are proud to announce that LuxeEstate has been awarded "Best Luxury Brokerage" by the International Property Awards for the third consecutive year.',
//       author: "Emma Wilson",
//       time: "2023-05-03 11:20",
//       images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71"],
//       isProperty: false,
//     },
//     {
//       id: 5,
//       title: "Waterfront Estate in Miami Beach",
//       category: "Property Post",
//       content:
//         "Stunning waterfront estate with private dock and beach access. Recently renovated with smart home technology throughout.",
//       author: "Carlos Mendez",
//       time: "2023-05-01 13:10",
//       images: [
//         "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
//         "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
//       ],
//       isProperty: true,
//       propertyDetails: {
//         name: "Miami Beach Estate",
//         location: "Miami Beach, Florida",
//         type: "Estate",
//         bedrooms: 6,
//         bathrooms: 5,
//         area: 5800,
//         price: 8900000,
//         status: "for sale",
//       },
//       availability: "Available",
//     },
//   ];

//   const formatDate = (dateString) => {
//     const options = {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     };
//     return new Date(dateString).toLocaleDateString("en-US", options);
//   };

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       maximumFractionDigits: 0,
//     }).format(price);
//   };
//   const handleThumbnailClick = (index) => {
//     setActiveImageIndex(index);
//   };
  
//   return (
//     <div className="luxe-news-feed">
//       <Navbar isScrolled={true} />
//       <div className="luxe-header">
//         <h1>
//           LuxeEstate <span>Insights</span>
//         </h1>
//         <p className="luxe-subtitle">
//           Curated property listings and market intelligence
//         </p>
//       </div>

//       <div className="luxe-feed-container">
//         {feedItems.map((item) => (
//           <article
//             key={item.id}
//             className={`luxe-feed-card ${
//               item.isProperty ? "property-card" : "news-card"
//             }`}
//           >
//             <div className="luxe-card-header">
//               <div className="luxe-card-meta">
//                 <span className="luxe-category">{item.category}</span>
//                 <span className="luxe-date">{formatDate(item.time)}</span>
//               </div>
//               <h2>{item.title}</h2>
//               <p className="luxe-author">By {item.author}</p>
//             </div>

//             {item.images && (
//               <div className="luxe-media-container">
//                 <img
//                   src={`${item.images[0]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
//                   alt={item.title}
//                   className="luxe-featured-image"
//                 />
//               </div>
//             )}

//             <div className="luxe-card-content">
//               <p>{item.content}</p>

//               {item.isProperty && (
//                 <div className="luxe-property-details">
//                   <div className="luxe-detail-grid">
//                     <div className="luxe-detail-item">
//                       <span className="luxe-detail-label">Location</span>
//                       <span className="luxe-detail-value">
//                         {item.propertyDetails.location}
//                       </span>
//                     </div>
//                     <div className="luxe-detail-item">
//                       <span className="luxe-detail-label">Type</span>
//                       <span className="luxe-detail-value">
//                         {item.propertyDetails.type}
//                       </span>
//                     </div>
//                     <div className="luxe-detail-item">
//                       <span className="luxe-detail-label">Bed/Bath</span>
//                       <span className="luxe-detail-value">
//                         {item.propertyDetails.bedrooms} /{" "}
//                         {item.propertyDetails.bathrooms}
//                       </span>
//                     </div>
//                     <div className="luxe-detail-item">
//                       <span className="luxe-detail-label">Area</span>
//                       <span className="luxe-detail-value">
//                         {item.propertyDetails.area} sq ft
//                       </span>
//                     </div>
//                   </div>

//                   <div className="luxe-price-section">
//                     <div className="luxe-price-tag">
//                       <span className="luxe-price">
//                         {formatPrice(item.propertyDetails.price)}
//                       </span>
//                       <span
//                         className={`luxe-status ${item.propertyDetails.status.replace(
//                           " ",
//                           "-"
//                         )}`}
//                       >
//                         {item.propertyDetails.status}
//                       </span>
//                     </div>
//                     <button className="luxe-action-button">
//                       {item.propertyDetails.status === "for sale"
//                         ? "Schedule Viewing"
//                         : "Request Tour"}
//                       <span className="luxe-arrow">→</span>
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsFeed;


import React, { useEffect, useState } from 'react';
import './NewsFeeds.css';
import Navbar from './Navbar';
import newsFeedRepository from '../repositories/newsFeedRepository';

const DEFAULT_IMAGE =
  'https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg';

const NewsFeed = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await newsFeedRepository.getAll();
      if (!data.error) {
        setFeedItems(data);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="luxe-news-feed">
      <Navbar isScrolled={true} />
      <div className="luxe-header">
        <h1>
          LuxeEstate <span>Insights</span>
        </h1>
        <p className="luxe-subtitle">
          Curated property listings and market intelligence
        </p>
      </div>

      <div className="luxe-feed-container">
        {loading ? (
          <p>Loading...</p>
        ) : feedItems.length === 0 ? (
          <p>No news feed items available.</p>
        ) : (
          feedItems.map((item) => (
            <article
              key={item.id}
              className={`luxe-feed-card ${
                item.is_property ? 'property-card' : 'news-card'
              }`}
            >
              <div className="luxe-card-header">
                <div className="luxe-card-meta">
                  <span className="luxe-category">{item.category}</span>
                  <span className="luxe-date">{formatDate(item.time)}</span>
                </div>
                <h2>{item.title}</h2>
                <p className="luxe-author">By {item.author}</p>
              </div>

              <div className="luxe-media-container">
                <img
                  src={
                    item.images?.length
                      ? `${item.images[0]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`
                      : DEFAULT_IMAGE
                  }
                  alt={item.title}
                  className="luxe-featured-image"
                />
              </div>

              <div className="luxe-card-content">
                <p>{item.content}</p>

                {item.is_property && (
                  <div className="luxe-property-details">
                    <div className="luxe-detail-grid">
                      <div className="luxe-detail-item">
                        <span className="luxe-detail-label">Location</span>
                        <span className="luxe-detail-value">
                          {item.property_location}
                        </span>
                      </div>
                      <div className="luxe-detail-item">
                        <span className="luxe-detail-label">Type</span>
                        <span className="luxe-detail-value">
                          {item.property_type}
                        </span>
                      </div>
                      <div className="luxe-detail-item">
                        <span className="luxe-detail-label">Bed/Bath</span>
                        <span className="luxe-detail-value">
                          {item.bedrooms} / {item.bathrooms}
                        </span>
                      </div>
                      <div className="luxe-detail-item">
                        <span className="luxe-detail-label">Area</span>
                        <span className="luxe-detail-value">
                          {item.area} sq ft
                        </span>
                      </div>
                    </div>

                    <div className="luxe-price-section">
                      <div className="luxe-price-tag">
                        <span className="luxe-price">
                          {formatPrice(item.price)}
                        </span>
                        <span
                          className={`luxe-status ${item.property_status?.replace(
                            ' ',
                            '-'
                          )}`}
                        >
                          {item.property_status}
                        </span>
                      </div>
                      <button className="luxe-action-button">
                        {item.property_status === 'for sale'
                          ? 'Schedule Viewing'
                          : 'Request Tour'}
                        <span className="luxe-arrow">→</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
