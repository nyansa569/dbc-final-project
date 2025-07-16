// import React from "react";
// import Dashboard from "./components/dashboard";
// import "./App.css";
// import PropertyPage from "../src/components/property";
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// function App() {
//   return (
//     <div className="App">
//       <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/dashboard" replace />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         {/* <Route path="/properties" element={<PropertyPage />} /> */}
//         {/* <Route path="/calendar" element={<Calender />} /> */}
//         {/* <Route path="/messages" element={<Messages />} /> */}
//         {/* <Route path="newsFeeds" element={<NewsFeed />} /> */}
//         {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}
//       </Routes>
//     </Router>
//     {/* <Dashboard /> */}
//     {/* <PropertyPage /> */}
//     </div>
//   );
// }

// export default App;

// // App.jsx
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import SideNav from "./components/sidenav";
// import Dashboard from "./components/dashboard";
// import PropertyPage from "./components/property";
// import CustomersPage from "./components/customers";
// import DocumentPage from "./components/documents";
// import CalendarPage from "./components/CalendarPage";
// import NewsFeedPage from "./components/NewsFeedPage";
// import "./App.css";
// import ProgressPage from "./components/progress";
// import HomeScreen from "./screens/HomeScreen";
// import AuthScreen from "./screens/Auth";
// import LaunchScreen from "./screens/LaunchScreen";

// export default function App() {
//   return (
//     <Routes>
//       {/* Parent route */}
//       <Route path="/" element={<HomeScreen />}>
//         <Route index element={<Dashboard />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/properties" element={<PropertyPage />} />
//         <Route path="/customers" element={<CustomersPage />} />
//         <Route path="/documents" element={<DocumentPage />} />
//         <Route path="/progress" element={<ProgressPage />} />
//         <Route path="/calendar" element={<CalendarPage />} />
//         <Route path="/newsFeed" element={<NewsFeedPage />} />
//         <Route path="*" element={<h1>404: Page Not Found</h1>} />
//       </Route>
//       <Route path="/launch" element={<LaunchScreen />} />
//       <Route path="/auth" element={<AuthScreen />} />
//     </Routes>
//   );
// }

// import React from "react";
// import {
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import SideNav from "./components/sidenav";
// import Dashboard from "./components/dashboard";
// import PropertyPage from "./components/property";
// import CustomersPage from "./components/customers";
// import DocumentPage from "./components/documents";
// import CalendarPage from "./components/CalendarPage";
// import NewsFeedPage from "./components/NewsFeedPage";
// import "./App.css";
// import ProgressPage from "./components/progress";
// import HomeScreen from "./screens/HomeScreen";
// import AuthScreen from "./screens/Auth";
// import LaunchScreen from "./screens/LaunchScreen";
// import NewsFeed from "./components/NewsFeed";

// export default function App() {
//   return (
//     <Routes>
//       {/* Standalone routes (no shared layout) */}
//       <Route path="/launch" element={<LaunchScreen />} />
//       <Route path="/news-feed" element={<NewsFeed />} />
//       <Route path="/auth" element={<AuthScreen />} />

//       {/* Main app routes with shared layout (HomeScreen) */}
//       <Route path="/app" element={<HomeScreen />}>
//         <Route index element={<Navigate to="dashboard" replace />} />
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="properties" element={<PropertyPage />} />
//         <Route path="customers" element={<CustomersPage />} />
//         <Route path="documents" element={<DocumentPage />} />
//         <Route path="progress" element={<ProgressPage />} />
//         <Route path="calendar" element={<CalendarPage />} />
//         <Route path="newsFeed" element={<NewsFeedPage />} />
//       </Route>

//       {/* Redirects */}
//       <Route path="/" element={<Navigate to="/launch" replace />} />
//       <Route path="*" element={<h1>404: Page Not Found</h1>} />
//     </Routes>

//   );
// }

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideNav from "./components/sidenav";
import Dashboard from "./components/dashboard";
import PropertyPage from "./components/property";
import CustomersPage from "./components/customers";
import DocumentPage from "./components/documents";
import CalendarPage from "./components/CalendarPage";
import NewsFeedPage from "./components/NewsFeedPage";
import "./App.css";
import ProgressPage from "./components/progress";
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/Auth";
import LaunchScreen from "./screens/LaunchScreen";
import NewsFeed from "./components/NewsFeed";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/AuthRoute";
import UsersScreen from "./components/UsersScreen";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/launch" element={<LaunchScreen />} />
      <Route path="/news-feed" element={<NewsFeed />} />
      <Route element={<AuthRoute />}>
        <Route path="/auth" element={<AuthScreen />} />
      </Route>
      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        {/* All routes inside this will require authentication */}
        <Route path="/app" element={<HomeScreen />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="properties" element={<PropertyPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="documents" element={<DocumentPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="newsFeed" element={<NewsFeedPage />} />
          <Route path="users" element={<UsersScreen />} />
        </Route>
      </Route>
      {/* Redirects */}
      <Route path="/" element={<Navigate to="/launch" replace />} />
      <Route path="*" element={<h1>404: Page Not Found</h1>} />
    </Routes>
  );
}
