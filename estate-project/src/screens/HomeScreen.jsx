// import SideNav from "../components/sidenav";
// import { Outlet } from "react-router-dom";
// import "./Home.css"; // Import the CSS

// function HomeScreen() {
//   return (
//     <div className="home-layout">
//       <SideNav />

//       {/* Main content */}
//       <main className="home-main-content">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default HomeScreen;

import SideNav from "../components/sidenav";
import { Outlet, Navigate } from "react-router-dom";
import "./Home.css";
import authRepository from "../repositories/authRepository";

function HomeScreen() {
  if (!authRepository.isAuthenticated()) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="home-layout">
      <SideNav />
      <main className="home-main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeScreen;