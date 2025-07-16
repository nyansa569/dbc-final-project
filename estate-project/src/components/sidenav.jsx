// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   FiSearch,
//   FiBell,
//   FiUser,
//   FiHome,
//   FiMapPin,
//   FiUsers,
//   FiFileText,
//   FiCalendar,
//   FiRss,
//   FiTrendingUp,
//   FiMenu,
//   FiChevronLeft,
//   FiLogOut
// } from 'react-icons/fi';
// import './sideNav.css';

// export default function SideNav() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [pinned, setPinned] = useState(false);

//   const toggleCollapse = () => {
//     if (!pinned) {
//       setCollapsed(!collapsed);
//     }
//   };

//   const togglePin = () => {
//     setPinned(!pinned);
//     if (pinned) {
//       setCollapsed(false);
//     }
//   };

//   return (
//     <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${pinned ? 'pinned' : ''}`}>
//       <div className="sidebar-header">
//         <div className="brand">
//           {!collapsed && (
//             <>
//               <h1>gi kace</h1>
//               <span>trialRun</span>
//             </>
//           )}
//           {collapsed && <div className="brand-mini">GK</div>}
//         </div>

//         <button
//           className="pin-btn"
//           onClick={togglePin}
//           title={pinned ? 'Unpin sidebar' : 'Pin sidebar'}
//         >
//           <FiMapPin className={pinned ? 'pinned-icon' : ''} />
//         </button>
//       </div>

//       <button className="toggle-btn" onClick={toggleCollapse}>
//         {collapsed ? <FiMenu /> : <FiChevronLeft />}
//       </button>

//       <div className="search">
//         <FiSearch />
//         {!collapsed && <input placeholder="Search" />}
//       </div>

//       <nav>
//         <Link to="/app/dashboard" className="nav-link active">
//           <FiHome className="nav-icon" />
//           {!collapsed && <span>Dashboard</span>}
//         </Link>

//         <Link to="/app/properties" className="nav-link">
//           <FiMapPin className="nav-icon" />
//           {!collapsed && <span>Properties</span>}
//         </Link>

//         <Link to="/app/customers" className="nav-link">
//           <FiUsers className="nav-icon" />
//           {!collapsed && <span>Customers</span>}
//         </Link>

//         <Link to="/app/documents" className="nav-link">
//           <FiFileText className="nav-icon" />
//           {!collapsed && <span>Documents</span>}
//         </Link>

//         <Link to="/app/calendar" className="nav-link">
//           <FiCalendar className="nav-icon" />
//           {!collapsed && <span>Calendar</span>}
//         </Link>

//         <Link to="/app/newsFeed" className="nav-link">
//           <FiRss className="nav-icon" />
//           {!collapsed && <span>News Feed</span>}
//         </Link>

//         <Link to="/app/progress" className="nav-link">
//           <FiTrendingUp className="nav-icon" />
//           {!collapsed && <span>Work Flow</span>}
//         </Link>
//       </nav>

//       <div className="upgrade">
//         <button className="logout-btn">
//           <FiLogOut />
//           {!collapsed && <span>LOG OUT</span>}
//         </button>
//       </div>
//     </aside>
//   );
// }

// import { useState, useEffect } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import {
//   FiSearch,
//   FiHome,
//   FiMapPin,
//   FiUsers,
//   FiFileText,
//   FiCalendar,
//   FiRss,
//   FiTrendingUp,
//   FiMenu,
//   FiChevronLeft,
//   FiLogOut,
//   FiAnchor,
//   FiX,
//   FiMaximize2
// } from 'react-icons/fi';
// import './sideNav.css';

// export default function NebulaNav() {
//   const [isCompressed, setIsCompressed] = useState(false);
//   const [isLocked, setIsLocked] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);
//   const location = useLocation();

//   const toggleCompression = () => {
//     if (!isLocked) {
//       setIsCompressed(!isCompressed);
//     }
//   };

//   const toggleLock = () => {
//     setIsLocked(!isLocked);
//     if (isLocked) {
//       setIsCompressed(false);
//     }
//   };

//   // Auto-collapse when mouse leaves (if not locked)
//   useEffect(() => {
//     if (!isLocked && isHovering && !isCompressed) {
//       const timer = setTimeout(() => {
//         // setIsCompressed(true);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [isHovering, isLocked, isCompressed]);

//   return (
//     <div
//       className={`cosmic-panel ${isCompressed ? 'mini-mode' : ''} ${isLocked ? 'fixed-mode' : ''}`}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       <div className="panel-header">
//         <div className="brand-mark">
//           {!isCompressed ? (
//             <div className="full-logo">
//               <FiAnchor className="logo-icon" />
//               <div className="logo-text">
//                 <h1 className="firm-name">gi kace</h1>
//                 <span className="app-version">trialRun</span>
//               </div>
//             </div>
//           ) : (
//             <div className="compact-logo">
//               <FiAnchor className="logo-icon" />
//             </div>
//           )}
//         </div>

//         <button
//           className="lock-toggle"
//           onClick={toggleCompression}
//           aria-label={isLocked ? 'Unlock navigation' : 'Lock navigation open'}
//         >
//           {isLocked ? <FiMaximize2 /> : <FiX />}
//         </button>
//       </div>

//       <button
//         className="panel-toggle"
//         onClick={toggleCompression}
//         aria-label={isCompressed ? 'Expand navigation' : 'Collapse navigation'}
//       >
//         {isCompressed ? <FiMenu /> : <FiChevronLeft />}
//       </button>

//       <nav className="stellar-nav">
//         <NavLink
//           to="/app/dashboard"
//           className={({isActive}) => `nav-comet ${isActive ? 'active-orbit' : ''}`}
//         >
//           <FiHome className="nav-star" />
//           {!isCompressed && <span className="nav-label">Dashboard</span>}
//           <div className="gravity-well"></div>
//         </NavLink>

//         <NavLink
//           to="/app/properties"
//           className={({isActive}) => `nav-comet ${isActive ? 'active-orbit' : ''}`}
//         >
//           <FiMapPin className="nav-star" />
//           {!isCompressed && <span className="nav-label">Properties</span>}
//           <div className="gravity-well"></div>
//         </NavLink>

//         <NavLink
//           to="/app/customers"
//           className={({isActive}) => `nav-comet ${isActive ? 'active-orbit' : ''}`}
//         >
//           <FiUsers className="nav-star" />
//           {!isCompressed && <span className="nav-label">Customers</span>}
//           <div className="gravity-well"></div>
//         </NavLink>

//         <NavLink
//           to="/app/documents"
//           className={({isActive}) => `nav-comet ${isActive ? 'active-orbit' : ''}`}
//         >
//           <FiFileText className="nav-star" />
//           {!isCompressed && <span className="nav-label">Documents</span>}
//           <div className="gravity-well"></div>
//         </NavLink>

//         <NavLink
//           to="/app/calendar"
//           className={({isActive}) => `nav-comet ${isActive ? 'active-orbit' : ''}`}
//         >
//           <FiCalendar className="nav-star" />
//           {!isCompressed && <span className="nav-label">Calendar</span>}
//           <div className="gravity-well"></div>
//         </NavLink>

//         <NavLink
//           to="/app/newsFeed"
//           className={({isActive}) => `nav-comet ${isActive ? 'active-orbit' : ''}`}
//         >
//           <FiRss className="nav-star" />
//           {!isCompressed && <span className="nav-label">News Feed</span>}
//           <div className="gravity-well"></div>
//         </NavLink>

//         <NavLink
//           to="/app/progress"
//           className={({isActive}) => `nav-comet ${isActive ? 'active-orbit' : ''}`}
//         >
//           <FiTrendingUp className="nav-star" />
//           {!isCompressed && <span className="nav-label">Work Flow</span>}
//           <div className="gravity-well"></div>
//         </NavLink>
//       </nav>

//       <div className="exit-portal">
//         <button className="logout-thruster">
//           <FiLogOut className="thruster-nozzle" />
//           {!isCompressed && <span className="thruster-label">LAUNCH OUT</span>}
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import {
//   FiSearch,
//   FiHome,
//   FiMapPin,
//   FiUsers,
//   FiFileText,
//   FiCalendar,
//   FiRss,
//   FiTrendingUp,
//   FiMenu,
//   FiChevronLeft,
//   FiLogOut,
//   FiAnchor,
//   FiX,
//   FiMaximize2,
// } from "react-icons/fi";
// import { BsNewspaper } from "react-icons/bs";
// import "./sideNav.css";
// import authRepository from "../repositories/authRepository";
// import { userStorage } from "../repositories/userStorage";

// export default function NebulaNav() {
//   const navigate = useNavigate();
//   const [currentUser, setCurrentUser] = useState(null);
//   const [isCompressed, setIsCompressed] = useState(true); // Start compressed by default
//   const [isLocked, setIsLocked] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);

//   const toggleLock = () => {
//     setIsLocked(!isLocked);
//     // When locking, ensure the nav is expanded
//     if (!isLocked) {
//       setIsCompressed(false);
//     }
//   };
//   useEffect(() => {
//     const loadUser = async () => {
//       const user = await userStorage.getCurrentUser();
//       setCurrentUser(user);
//       console.log("Current user loaded:", user);
//       if (!user) window.location.href = "/auth";
//     };
//     loadUser();
//   }, []);

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         const user = await userStorage.getCurrentUser();
//         setCurrentUser(user);
//         const result = await documentRepository.getAll();
//         console.log("Fetched documents:", result);
//         setDocuments(result);
//         // if (result.error) {
//         //   setError(result.error);
//         // } else {
//         // }
//       } catch (err) {
//         // setError("Failed to fetch documents");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDocuments();
//   }, []);

//   // Handle hover behavior when not locked
//   useEffect(() => {
//     if (!isLocked) {
//       if (isHovering) {
//         setIsCompressed(false);
//       } else {
//         const timer = setTimeout(() => {
//           setIsCompressed(true);
//         }, 300);
//         return () => clearTimeout(timer);
//       }
//     }
//   }, [isHovering, isLocked]);

//   const handleLogout = async () => {
//     await authRepository.logout();
//     navigate("/auth");
//   };

//   return (
//     <div
//       className={`cosmic-panel ${isCompressed ? "mini-mode" : ""} ${
//         isLocked ? "fixed-mode" : ""
//       }`}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       <div className="panel-header">
//         <div className="brand-mark">
//           {!isCompressed ? (
//             <div className="full-logo">
//               <img
//                 src={
//                   currentUser?.profile_image ||
//                   "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
//                 }
//                 alt="User Avatar"
//                 className="logo-icon"
//                 width={"50px"}
//                 style={{ borderRadius: "12px" }}
//               />

//               <div className="logo-text">
//                 <h1 className="firm-name">{currentUser?.name || "gi kace"}</h1>
//                 <span className="app-version">
//                   {currentUser?.role || "trialRun"}<br />
//                   {currentUser?.id || "trialRun"}
//                 </span>
//               </div>
//             </div>
//           ) : (
//             <div className="compact-logo">
//               <img
//                 src={
//                   currentUser?.profile_image ||
//                   "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
//                 }
//                 alt="User Avatar"
//                 className="logo-icon"
//                 width={"50px"}
//                 style={{ borderRadius: "12px" }}
//               />
//             </div>
//           )}
//         </div>

//         <button
//           className={isLocked ? "lock-toggle" : "lock-toggle lock-active"}
//           onClick={toggleLock}
//           aria-label={isLocked ? "Unlock navigation" : "Lock navigation"}
//         >
//           {isLocked ? <FiMapPin /> : <FiMapPin />}
//         </button>
//       </div>

//       <nav className="stellar-nav">
//         <NavLink
//           to="/app/dashboard"
//           className={({ isActive }) =>
//             `nav-comet ${isActive ? "active-orbit" : ""}`
//           }
//           data-tooltip="Dashboard"
//         >
//           <FiHome className="nav-star" />
//           {!isCompressed && <span className="nav-label">Dashboard</span>}
//           <div className="gravity-well"></div>
//         </NavLink>

//         <NavLink
//           to="/app/properties"
//           className={({ isActive }) =>
//             `nav-comet ${isActive ? "active-orbit" : ""}`
//           }
//           data-tooltip="Properties"
//         >
//           <FiMapPin className="nav-star" />
//           {!isCompressed && <span className="nav-label">Properties</span>}
//           <div className="gravity-well"></div>
//         </NavLink>

//         <NavLink
//           to="/app/customers"
//           className={({ isActive }) =>
//             `nav-comet ${isActive ? "active-orbit" : ""}`
//           }
//           data-tooltip="Customers"
//         >
//           <FiUsers className="nav-star" />
//           {!isCompressed && <span className="nav-label">Customers</span>}
//           <div className="gravity-well"></div>
//         </NavLink>

//         <NavLink
//           to="/app/users"
//           className={({ isActive }) =>
//             `nav-comet ${isActive ? "active-orbit" : ""}`
//           }
//           data-tooltip="Users"
//         >
//           <FiUsers className="nav-star" />
//           {!isCompressed && <span className="nav-label">Users</span>}
//           <div className="gravity-well"></div>
//         </NavLink>

//         <NavLink
//           to="/app/documents"
//           className={({ isActive }) =>
//             `nav-comet ${isActive ? "active-orbit" : ""}`
//           }
//           data-tooltip="Documents"
//         >
//           <FiFileText className="nav-star" />
//           {!isCompressed && <span className="nav-label">Documents</span>}
//           <div className="gravity-well"></div>
//         </NavLink>

//         <NavLink
//           to="/app/newsFeed"
//           className={({ isActive }) =>
//             `nav-comet ${isActive ? "active-orbit" : ""}`
//           }
//           data-tooltip="News Feed"
//         >
//           <BsNewspaper className="nav-star" />
//           {!isCompressed && <span className="nav-label">News Feed</span>}
//           <div className="gravity-well"></div>
//         </NavLink>

//         <NavLink
//           to="/app/progress"
//           className={({ isActive }) =>
//             `nav-comet ${isActive ? "active-orbit" : ""}`
//           }
//           data-tooltip="Work Flow"
//         >
//           <FiTrendingUp className="nav-star" />
//           {!isCompressed && <span className="nav-label">Work Flow</span>}
//           <div className="gravity-well"></div>
//         </NavLink>
//       </nav>

//       <div className="exit-portal">
//         <button
//           className="logout-thruster"
//           data-tooltip="Logout"
//           onClick={handleLogout}
//         >
//           <FiLogOut className="thruster-nozzle" />
//           {!isCompressed && <span className="thruster-label">LAUNCH OUT</span>}
//         </button>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiHome,
  FiMapPin,
  FiUsers,
  FiFileText,
  FiCalendar,
  FiRss,
  FiTrendingUp,
  FiMenu,
  FiChevronLeft,
  FiLogOut,
  FiAnchor,
  FiX,
  FiMaximize2,
} from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";
import "./sideNav.css";
import authRepository from "../repositories/authRepository";
import { userStorage } from "../repositories/userStorage";

export default function NebulaNav() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [isCompressed, setIsCompressed] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  const toggleLock = () => {
    setIsLocked(!isLocked);
    if (!isLocked) {
      setIsCompressed(false);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const user = await userStorage.getCurrentUser();
      setCurrentUser(user);
      console.log("Current user loaded:", user);
      if (!user) window.location.href = "/auth";
    };
    loadUser();
  }, []);

  // Hover logic
  useEffect(() => {
    if (!isLocked) {
      if (isHovering) {
        setIsCompressed(false);
      } else {
        const timer = setTimeout(() => {
          setIsCompressed(true);
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [isHovering, isLocked]);

  const handleLogout = async () => {
    await authRepository.logout();
    navigate("/auth");
  };

  const role = currentUser?.role;

  // Role-based access helpers
  const isAdmin = role === "admin";
  const isBuyer = role === "buyer";
  const isSellerOrAgent =
    role === "seller" || role === "owner" || role === "agent";

  return (
    <div
      className={`cosmic-panel ${isCompressed ? "mini-mode" : ""} ${
        isLocked ? "fixed-mode" : ""
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Header */}
      <div className="panel-header">
        <div className="brand-mark">
          {!isCompressed ? (
            <div className="full-logo">
              <img
                src={
                  currentUser?.profile_image ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt="User Avatar"
                className="logo-icon"
                width={"50px"}
                style={{ borderRadius: "12px" }}
              />
              <div className="logo-text">
                <h1 className="firm-name">{currentUser?.name || "gi kace"}</h1>
                <span className="app-version">
                  {role || "trialRun"} <br />
                  {currentUser?.id || ""}
                </span>
              </div>
            </div>
          ) : (
            <div className="compact-logo">
              <img
                src={
                  currentUser?.profile_image ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt="User Avatar"
                className="logo-icon"
                width={"50px"}
                style={{ borderRadius: "12px" }}
              />
            </div>
          )}
        </div>

        <button
          className={isLocked ? "lock-toggle" : "lock-toggle lock-active"}
          onClick={toggleLock}
          aria-label={isLocked ? "Unlock navigation" : "Lock navigation"}
        >
          <FiMapPin />
        </button>
      </div>

      {/* Navigation */}
      <nav className="stellar-nav">
        {isAdmin && (
          <NavLink
            to="/app/dashboard"
            className={({ isActive }) =>
              `nav-comet ${isActive ? "active-orbit" : ""}`
            }
            data-tooltip="Dashboard"
          >
            <FiHome className="nav-star" />
            {!isCompressed && <span className="nav-label">Dashboard</span>}
            <div className="gravity-well"></div>
          </NavLink>
        )}

        {(isAdmin || isSellerOrAgent) && (
          <NavLink
            to="/app/properties"
            className={({ isActive }) =>
              `nav-comet ${isActive ? "active-orbit" : ""}`
            }
            data-tooltip="Properties"
          >
            <FiMapPin className="nav-star" />
            {!isCompressed && <span className="nav-label">Properties</span>}
            <div className="gravity-well"></div>
          </NavLink>
        )}

        {(isAdmin || isSellerOrAgent) && (
          <NavLink
            to="/app/customers"
            className={({ isActive }) =>
              `nav-comet ${isActive ? "active-orbit" : ""}`
            }
            data-tooltip="Customers"
          >
            <FiUsers className="nav-star" />
            {!isCompressed && <span className="nav-label">Customers</span>}
            <div className="gravity-well"></div>
          </NavLink>
        )}

        {isAdmin && (
          <NavLink
            to="/app/users"
            className={({ isActive }) =>
              `nav-comet ${isActive ? "active-orbit" : ""}`
            }
            data-tooltip="Users"
          >
            <FiUsers className="nav-star" />
            {!isCompressed && <span className="nav-label">Users</span>}
            <div className="gravity-well"></div>
          </NavLink>
        )}

        {(isAdmin || isSellerOrAgent) && (
          <NavLink
            to="/app/documents"
            className={({ isActive }) =>
              `nav-comet ${isActive ? "active-orbit" : ""}`
            }
            data-tooltip="Documents"
          >
            <FiFileText className="nav-star" />
            {!isCompressed && <span className="nav-label">Documents</span>}
            <div className="gravity-well"></div>
          </NavLink>
        )}

        {(isAdmin || isSellerOrAgent || isBuyer) && (
          <NavLink
            to="/app/newsFeed"
            className={({ isActive }) =>
              `nav-comet ${isActive ? "active-orbit" : ""}`
            }
            data-tooltip="News Feed"
          >
            <BsNewspaper className="nav-star" />
            {!isCompressed && <span className="nav-label">News Feed</span>}
            <div className="gravity-well"></div>
          </NavLink>
        )}

        {(isAdmin || isSellerOrAgent) && (
          <NavLink
            to="/app/progress"
            className={({ isActive }) =>
              `nav-comet ${isActive ? "active-orbit" : ""}`
            }
            data-tooltip="Work Flow"
          >
            <FiTrendingUp className="nav-star" />
            {!isCompressed && <span className="nav-label">Work Flow</span>}
            <div className="gravity-well"></div>
          </NavLink>
        )}
      </nav>

      {/* Logout */}
      <div className="exit-portal">
        <button
          className="logout-thruster"
          data-tooltip="Logout"
          onClick={handleLogout}
        >
          <FiLogOut className="thruster-nozzle" />
          {!isCompressed && <span className="thruster-label">LAUNCH OUT</span>}
        </button>
      </div>
    </div>
  );
}
