
// import './HomeSection.css';

// const HomeSection = () => {

//   return (
//     <section id="home" className="home-section">
//       <div className="home-overlay"></div>
//       <div className="home-content">
//         <h1 className="home-title">
//           Discover Your <span>Dream</span> Home
//         </h1>
//         <p className="home-subtitle">
//           Luxury properties tailored to your lifestyle
//         </p>
//         <div className="home-search">
//           <input type="text" placeholder="Search by location, property type..." />
//           <button className="search-button">Search</button>
//         </div>
//         <div className="home-stats">
//           <div className="stat-item">
//             <h3>500+</h3>
//             <p>Properties</p>
//           </div>
//           <div className="stat-item">
//             <h3>20+</h3>
//             <p>Locations</p>
//           </div>
//           <div className="stat-item">
//             <h3>10K+</h3>
//             <p>Happy Clients</p>
//           </div>
//         </div>
//       </div>
//       <div className="scroll-indicator">
//         <span></span>
//       </div>
//     </section>
//   );
// };

// export default HomeSection;


import { useState, useEffect } from "react";
import "./HomeSection.css";
import propertyRepository from "../repositories/propertyRepository";

const HomeSection = () => {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      const res = await propertyRepository.getAll();
      console.log(res);

      if (!res.error) {
        setProperties(res);
      } else {
        console.error("Error fetching properties:", res.error);
      }
    };
    fetchProperties();
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    const filtered = properties.filter((property) =>
      property.name?.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filtered);
    setShowDropdown(true);
  };

  const handleSelect = (name) => {
    setSearchQuery(name);
    setShowDropdown(false);
  };

  return (
    <section id="home" className="home-section">
      <div className="home-overlay"></div>
      <div className="home-content">
        <h1 className="home-title">
          Discover Your <span>Dream</span> Home
        </h1>
        <p className="home-subtitle">
          Luxury properties tailored to your lifestyle
        </p>

        <div className="home-search">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => searchQuery && setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // small delay to allow clicking
            placeholder="Search by property name..."
          />
          <button className="search-button">Search</button>

          {showDropdown && searchResults.length > 0 && (
            <ul className="search-dropdown">
              {searchResults.map((property) => (
                <li
                  key={property.id}
                  onClick={() => handleSelect(property.name)}
                >
                  {property.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="home-stats">
          <div className="stat-item">
            <h3>{properties.length}+</h3>
            <p>Properties</p>
          </div>
          <div className="stat-item">
            <h3>20+</h3>
            <p>Locations</p>
          </div>
          <div className="stat-item">
            <h3>10K+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default HomeSection;
