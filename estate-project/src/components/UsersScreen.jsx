// import { useState } from "react";
// import "./UsersScreen.css";

// const UsersScreen = () => {
//   // Dummy data matching your database structure
//   const dummyUsers = [
//     {
//       id: "2043190222",
//       name: "John Doe",
//       email: "john@example.com",
//       role: "admin",
//       phone: "+1234567890",
//       profile_image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//       status: "active",
//       created_at: "2023-05-15T10:30:00Z",
//       license_number: "LIC-12345",
//       hasPermitToConstruct: true,
//       hasPermitToSell: true,
//     },
//     {
//       id: "3045190333",
//       name: "Jane Smith",
//       email: "jane@example.com",
//       role: "agent",
//       phone: "+1987654321",
//       profile_image: null,
//       status: "active",
//       created_at: "2023-06-20T14:45:00Z",
//       license_number: "LIC-54321",
//       hasPermitToConstruct: false,
//       hasPermitToSell: true,
//     },
//     {
//       id: "4047190444",
//       name: "Mike Johnson",
//       email: "mike@example.com",
//       role: "buyer",
//       phone: "+1122334455",
//       profile_image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//       status: "inactive",
//       created_at: "2023-07-10T09:15:00Z",
//       license_number: null,
//       hasPermitToConstruct: false,
//       hasPermitToSell: false,
//     },
//   ];

//   // Form state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     role: "agent",
//     license_number: "",
//     profile_image: null,
//     status: "active",
//     hasPermitToConstruct: false,
//     hasPermitToSell: false,
//   });

//   const [users, setUsers] = useState(dummyUsers);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   // Handle file upload
//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       profile_image: e.target.files[0],
//     });
//   };

//   // Form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isEditing) {
//       // Update existing user
//       const updatedUsers = users.map((user) =>
//         user.id === selectedUser.id ? { ...user, ...formData } : user
//       );
//       setUsers(updatedUsers);
//     } else {
//       // Add new user
//       const newUser = {
//         ...formData,
//         id: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
//         created_at: new Date().toISOString(),
//       };
//       setUsers([...users, newUser]);
//     }

//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       phone: "",
//       role: "agent",
//       license_number: "",
//       profile_image: null,
//       status: "active",
//       hasPermitToConstruct: false,
//       hasPermitToSell: false,
//     });
//     setSelectedUser(null);
//     setIsEditing(false);
//   };

//   // Edit user
//   const handleEdit = (user) => {
//     setSelectedUser(user);
//     setIsEditing(true);
//     setFormData({
//       name: user.name,
//       email: user.email,
//       password: "",
//       phone: user.phone,
//       role: user.role,
//       license_number: user.license_number || "",
//       profile_image: user.profile_image,
//       status: user.status,
//       hasPermitToConstruct: user.hasPermitToConstruct || false,
//       hasPermitToSell: user.hasPermitToSell || false,
//     });
//   };

//   // Delete user (soft delete)
//   const handleDelete = (id) => {
//     setUsers(
//       users.map((user) =>
//         user.id === id ? { ...user, status: "inactive" } : user
//       )
//     );
//   };

//   return (
//     <div className="users-screen">
//       <div className="users-list">
//         <h2>Users</h2>
//         <div className="users-table-container">
//           <table className="users-table">
//             <thead>
//               <tr>
//                 <th>Profile</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr
//                   key={user.id}
//                   className={user.status === "inactive" ? "inactive" : ""}
//                 >
//                   <td>
//                     <img
//                       src={
//                         user.profile_image ||
//                         "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//                       }
//                       alt={user.name}
//                       className="profile-image"
//                     />
//                   </td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>
//                     <span className={`role-badge ${user.role}`}>
//                       {user.role}
//                     </span>
//                   </td>
//                   <td>
//                     <span className={`status-badge ${user.status}`}>
//                       {user.status}
//                     </span>
//                   </td>
//                   <td className="actions">
//                     <button
//                       className="edit-btn"
//                       onClick={() => handleEdit(user)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(user.id)}
//                     >
//                       {user.status === "active" ? "Deactivate" : "Activate"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="user-form">
//         <h2>{isEditing ? "Edit User" : "Add New User"}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             {/* <label>Name*</label> */}
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Enter name"
//               required
//             />
//           </div>

//           <div className="form-group">
//             {/* <label>Email*</label> */}
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               disabled={isEditing}
//             />
//           </div>

//           {!isEditing && (
//             <div className="form-group">
//               {/* <label>Password*</label> */}
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           )}

//           <div className="form-group">
//             {/* <label>Phone*</label> */}
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter phone number"
//               value={formData.phone}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               {/* <label>Role*</label> */}
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="admin">Admin</option>
//                 <option value="agent">Agent</option>
//                 <option value="buyer">Buyer</option>
//                 <option value="seller">Seller</option>
//                 <option value="owner">Owner</option>
//               </select>
//             </div>

//             <div className="form-group">
//               {/* <label>Status*</label> */}
//               <select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="active">Active</option>
//                 <option value="inactive">Inactive</option>
//                 <option value="suspended">Suspended</option>
//               </select>
//             </div>
//           </div>

//           <div className="form-group">
//             {/* <label>License Number</label> */}
//             <input
//               type="text"
//               placeholder="Enter license number"
//               name="license_number"
//               value={formData.license_number}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-checkboxes">
//             <label>
//               <input
//                 type="checkbox"
//                 placeholder="hasPermitToConstruct"
//                 name="hasPermitToConstruct"
//                 checked={formData.hasPermitToConstruct}
//                 onChange={handleInputChange}
//               />
//               Has Permit to Construct
//             </label>

//             <label>
//               <input
//                 type="checkbox"
//                 name="hasPermitToSell"
//                 checked={formData.hasPermitToSell}
//                 onChange={handleInputChange}
//               />
//               Has Permit to Sell
//             </label>
//           </div>

//           <div className="form-group">
//             {/* <label>Profile Image</label> */}
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             {formData.profile_image &&
//               !(formData.profile_image instanceof File) && (
//                 <img
//                   src={formData.profile_image}
//                   alt="Current profile"
//                   className="current-profile-image"
//                 />
//               )}
//           </div>

//           <div className="form-actions">
//             <button type="submit" className="submit-btn">
//               {isEditing ? "Update User" : "Add User"}
//             </button>
//             {isEditing && (
//               <button
//                 type="button"
//                 className="cancel-btn"
//                 onClick={() => {
//                   setIsEditing(false);
//                   setSelectedUser(null);
//                   setFormData({
//                     name: "",
//                     email: "",
//                     password: "",
//                     phone: "",
//                     role: "agent",
//                     license_number: "",
//                     profile_image: null,
//                     status: "active",
//                     hasPermitToConstruct: false,
//                     hasPermitToSell: false,
//                   });
//                 }}
//               >
//                 Cancel
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UsersScreen;

import { useState, useEffect } from "react";
import "./UsersScreen.css";
import userRepository from "../repositories/userRepository";
import authRepository from "../repositories/authRepository";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "agent",
    license_number: "",
    profile_image: null,
    status: "active",
    hasPermitToConstruct: false,
    hasPermitToSell: false,
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await userRepository.getAll();
        console.log("Fetched users:", result);
        if (result.error) {
          setError(result.error);
        } else {
          setUsers(result.data || []);
        }
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profile_image: e.target.files[0],
    });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      hasPermitToConstruct: formData.hasPermitToConstruct ? 1 : 0,
      hasPermitToSell: formData.hasPermitToSell ? 1 : 0,
    };

    // Remove password if empty during edit
    if (isEditing && dataToSend.password === "") {
      delete dataToSend.password;
    }

    try {
      let result;
      if (isEditing) {
        result = await userRepository.update(selectedUser.id, dataToSend);
      } else {
        result = await authRepository.register(dataToSend);
      }
      console.log("Form submission result:", result);

      if (result.error) {
        setError(result.error);
      } else {
        // Refresh users list
        const updated = await userRepository.getAll();
        setUsers(updated.data || []);
        resetForm();
      }
    } catch (err) {
      setError("Failed to save user");
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      role: "agent",
      license_number: "",
      profile_image: null,
      status: "active",
      hasPermitToConstruct: false,
      hasPermitToSell: false,
    });
    setSelectedUser(null);
    setIsEditing(false);
  };

  // Edit user
  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
    setFormData({
      name: user.name,
      email: user.email,
      password: "",
      phone: user.phone,
      role: user.role,
      license_number: user.license_number || "",
      profile_image: user.profile_image,
      status: user.status,
      hasPermitToConstruct: user.hasPermitToConstruct || false,
      hasPermitToSell: user.hasPermitToSell || false,
    });
  };

  // Delete user (soft delete)
  const handleDelete = async (id) => {
    try {
      const result = await userRepository.delete(id);
      if (result.error) {
        setError(result.error);
      } else {
        const updated = await userRepository.getAll();
        setUsers(updated.data || []);
      }
    } catch (err) {
      setError("Failed to delete user");
    }
  };

  if (loading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="users-screen">
      <div className="users-list">
        <h2>Users</h2>
        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>Role</th>
                <th>Lincence Number</th>
                <th>Status</th>
                <th>Actions</th>
                <th>HPC</th>
                <th>HPS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className={user.status === "inactive" ? "inactive" : ""}
                >
                  <td>
                    <img
                      src={
                        user.profile_image ||
                        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      }
                      alt={user.name}
                      className="profile-image"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <span className={`role-badge ${user.role}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span className={`role-badge ${user.license_number}`}>
                      {user.license_number}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge ${user.status}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="actions">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>

                    {/* <button
                      className="delete-btn"
                      onClick={() => handleDelete(user.id)}
                    >
                      {user.status === "active" ? "Deactivate" : "Activate"}
                    </button> */}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="hasPermitToConstruct"
                      checked={user.hasPermitToConstruct}
                      disabled
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={user.hasPermitToSell}
                      disabled
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="user-form">
        <h2>{isEditing ? "Edit User" : "Add New User"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email address"
              required
              disabled={isEditing}
            />
          </div>

          {!isEditing && (
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>
          )}

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              // onChange={handleInputChange}
              onChange={(e) => {
                const digitsOnly = e.target.value.replace(/\D/g, ""); // Remove non-digits
                setFormData((prev) => ({ ...prev, phone: digitsOnly }));
              }}
              placeholder="Phone number"
              pattern="[0-9]*"
              inputMode="numeric"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option value="admin">Admin</option>
                <option value="agent">Agent</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="owner">Owner</option>
              </select>
            </div>

            <div className="form-group">
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="license_number"
              value={formData.license_number}
              onChange={handleInputChange}
              placeholder="License number (optional)"
            />
          </div>

          <div className="form-checkboxes">
            <label>
              <input
                type="checkbox"
                name="hasPermitToConstruct"
                checked={formData.hasPermitToConstruct}
                onChange={handleInputChange}
              />
              Has Permit to Construct
            </label>

            <label>
              <input
                type="checkbox"
                name="hasPermitToSell"
                checked={formData.hasPermitToSell}
                onChange={handleInputChange}
              />
              Has Permit to Sell
            </label>
          </div>

          <div className="form-group">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
            {formData.profile_image &&
              !(formData.profile_image instanceof File) && (
                <img
                  src={formData.profile_image}
                  alt="Current profile"
                  className="current-profile-image"
                />
              )}
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              {isEditing ? "Update User" : "Add User"}
            </button>
            {isEditing && (
              <button type="button" className="cancel-btn" onClick={resetForm}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsersScreen;
