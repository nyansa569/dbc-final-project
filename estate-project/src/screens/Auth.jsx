// import React, { useState } from "react";
// import "./Auth.css";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";

// function AuthScreen() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const navigate = useNavigate();

//   const toggleForm = () => {
//     console.log("Toggle Form");
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setTimeout(() => {
//       setIsLogin((prev) => !prev);
//       setIsAnimating(false);
//     }, 600);
//   };

//   return (
//     <>
//       <Navbar isScrolled={true} />
//       <div className="auth-container">
//         <div className={`form-container ${!isLogin ? "signup-mode" : ""}`}>
//           <div className="form-wrapper">
//             <div className={`form login-form ${isLogin ? "active" : ""}`}>
//               <h2>Welcome Back</h2>
//               <form>
//                 <div className="input-group">
//                   <input type="email" />
//                   <label>Email</label>
//                   <span className="highlight"></span>
//                 </div>
//                 <div className="input-group">
//                   <input type="password" />
//                   <label>Password</label>
//                   <span className="highlight"></span>
//                 </div>
//                 <button
//                   className="btn"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     navigate("/app");
//                   }}
//                 >
//                   Sign Up
//                 </button>

//                 {/* <button className="btn">Login</button> */}
//                 <p className="toggle-text">
//                   Don't have an account?
//                   <span className="toggle-link" onClick={toggleForm}>
//                     {" "}
//                     Sign up
//                   </span>
//                 </p>
//               </form>
//             </div>

//             <div className={`form signup-form ${!isLogin ? "active" : ""}`}>
//               <h2>Create Account</h2>
//               <form>
//                 <div className="input-group">
//                   <input type="text" />
//                   <label>Username</label>
//                   <span className="highlight"></span>
//                 </div>
//                 <div className="input-group">
//                   <input type="email" />
//                   <label>Email</label>
//                   <span className="highlight"></span>
//                 </div>
//                 <div className="input-group">
//                   <input type="password" />
//                   <label>Password</label>
//                   <span className="highlight"></span>
//                 </div>
//                 <div className="input-group">
//                   <input type="password" />
//                   <label>Confirm Password</label>
//                   <span className="highlight"></span>
//                 </div>
//                 <button
//                   className="btn"
//                   onClick={(e) => {
//                     e.preventDefault(); // prevent form submission refresh
//                     navigate("/app");
//                   }}
//                 >
//                   Sign up
//                 </button>
//                 {/* <button className="btn" >Sign Up</button> */}
//                 <p className="toggle-text">
//                   Already have an account?
//                   <span className="toggle-link" onClick={toggleForm}>
//                     {" "}
//                     Login
//                   </span>
//                 </p>
//               </form>
//             </div>
//           </div>

//           <div className="overlay-container">
//             <div className="overlay">
//               <div className="overlay-panel overlay-left">
//                 <h2>Welcome Back!</h2>
//                 <p>
//                   To keep connected with us please login with your personal info
//                 </p>
//                 <button className="btn ghost" onClick={toggleForm}>
//                   Login
//                 </button>
//               </div>
//               <div className="overlay-panel overlay-right">
//                 <h2>Hello, Friend!</h2>
//                 <p>
//                   Enter your personal details and start your journey with us
//                 </p>
//                 <button className="btn ghost" onClick={toggleForm}>
//                   Sign Up
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AuthScreen;

import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import authRepository from "../repositories/authRepository";

function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    license_number: "",
    role: "agent",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const toggleForm = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin((prev) => !prev);
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        license_number: "",
        role: "agent",
      });
      setError("");
      setMessage("");
      setIsAnimating(false);
    }, 600);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    if (!email || !password) return setError("Email and password are required");

    const res = await authRepository.login({ email, password });
    console.log(res);
    if (res.error) return setError(res.error);
    setMessage("Login successful");
    navigate("/app");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    let {
      name,
      email,
      password,
      confirmPassword,
      phone,
      license_number,
      role,
    } = form;
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !license_number ||
      !role
    ) {
      return setError("All fields are required");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
    const res = await authRepository.register({
      name,
      email,
      password,
      phone,
      license_number,
      role,
    });
    if (res.error) return setError(res.error);
    setMessage("Registration successful, please login");
    toggleForm();
  };

  const handleForgot = async () => {
    if (!form.email) return setError("Enter your email");
    const res = await authRepository.forgotPassword(form.email);
    if (res.error) return setError(res.error);
    setMessage(`Reset token: ${res.token}`);
  };

  return (
    // <>
    //   <Navbar isScrolled={true} />
    //   <div className="auth-container">
    //     <div className={`form-container ${!isLogin ? "signup-mode" : ""}`}>

    //       {/* LOGIN */}
    //       <div className={`form login-form ${isLogin ? "active" : ""}`}>
    //         <h2>Sign In</h2>
    //         <form onSubmit={handleLogin}>
    //           <div className="input-group">
    //             <input type="email" name="email" value={form.email} onChange={handleChange} required />
    //             <label>Email</label><span className="highlight"></span>
    //           </div>
    //           <div className="input-group">
    //             <input type="password" name="password" value={form.password} onChange={handleChange} required />
    //             <label>Password</label><span className="highlight"></span>
    //           </div>
    //           <button className="btn">Login</button>
    //           <p className="toggle-text">
    //             Don't have an account? <span className="toggle-link" onClick={toggleForm}>Sign Up</span>
    //           </p>
    //           <p className="forgot-link" onClick={handleForgot}>Forgot Password?</p>
    //           {error && <p className="error-text">{error}</p>}
    //           {message && <p className="success-text">{message}</p>}
    //         </form>
    //       </div>

    //       {/* SIGNUP */}
    //       <div className={`form signup-form ${!isLogin ? "active" : ""}`}>
    //         <h2>Create Account</h2>
    //         <form onSubmit={handleRegister}>
    //           <div className="input-group"><input type="text" name="name" value={form.name} onChange={handleChange} required /><label>Name</label><span className="highlight"></span></div>
    //           <div className="input-group"><input type="email" name="email" value={form.email} onChange={handleChange} required /><label>Email</label><span className="highlight"></span></div>
    //           <div className="input-group"><input type="password" name="password" value={form.password} onChange={handleChange} required /><label>Password</label><span className="highlight"></span></div>
    //           <div className="input-group"><input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required /><label>Confirm Password</label><span className="highlight"></span></div>
    //           <div className="input-group"><input type="text" name="phone" value={form.phone} onChange={handleChange} required /><label>Phone</label><span className="highlight"></span></div>
    //           <div className="input-group"><input type="text" name="license_number" value={form.license_number} onChange={handleChange} required /><label>License Number</label><span className="highlight"></span></div>
    //           <div className="input-group">
    //             <select name="role" value={form.role} onChange={handleChange} required>
    //               <option value="agent">Agent</option>
    //               <option value="admin">Admin</option>
    //               <option value="broker">Broker</option>
    //               <option value="manager">Manager</option>
    //             </select>
    //             <label className="select-label">Role</label><span className="highlight"></span>
    //           </div>
    //           <button className="btn">Sign Up</button>
    //           <p className="toggle-text">
    //             Already have an account? <span className="toggle-link" onClick={toggleForm}>Login</span>
    //           </p>
    //           {error && <p className="error-text">{error}</p>}
    //           {message && <p className="success-text">{message}</p>}
    //         </form>
    //       </div>

    //     </div>
    //   </div>
    // </>
    <>
      <Navbar isScrolled={true} />
      <div className="auth-container">
        <div className={`form-container ${!isLogin ? "signup-mode" : ""}`}>
          <div className="form-wrapper">
            {/* LOGIN FORM */}
            <div className={`form login-form ${isLogin ? "active" : ""}`}>
              <h2>Welcome Back</h2>
              <form onSubmit={handleLogin}>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <label>Email</label>
                  <span className="highlight"></span>
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  <label>Password</label>
                  <span className="highlight"></span>
                </div>
                <button className="btn">Login</button>
                <p className="toggle-text">
                  Don't have an account?
                  <span className="toggle-link" onClick={toggleForm}>
                    {" "}
                    Sign Up
                  </span>
                </p>
                <p className="forgot-link" onClick={handleForgot}>
                  Forgot Password?
                </p>
                {error && <p className="error-text">{error}</p>}
                {message && <p className="success-text">{message}</p>}
              </form>
            </div>

            {/* SIGNUP FORM */}
            <div className={`form signup-form ${!isLogin ? "active" : ""}`}>
              <h2>Create Account</h2>
              <form onSubmit={handleRegister}>
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <label>Name</label>
                  <span className="highlight"></span>
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <label>Email</label>
                  <span className="highlight"></span>
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  <label>Password</label>
                  <span className="highlight"></span>
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <label>Confirm Password</label>
                  <span className="highlight"></span>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                  <label>Phone</label>
                  <span className="highlight"></span>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="license_number"
                    value={form.license_number}
                    onChange={handleChange}
                    required
                  />
                  <label>License Number</label>
                  <span className="highlight"></span>
                </div>
                <div className="input-group">
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="agent">Agent</option>
                    {/* <option value="admin">Admin</option> */}
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                  </select>
                  <label className="select-label">Role</label>
                  <span className="highlight"></span>
                </div>
                <button className="btn">Sign Up</button>
                <p className="toggle-text">
                  Already have an account?
                  <span className="toggle-link" onClick={toggleForm}>
                    {" "}
                    Login
                  </span>
                </p>
                {error && <p className="error-text">{error}</p>}
                {message && <p className="success-text">{message}</p>}
              </form>
            </div>
          </div>

          {/* OVERLAY CONTAINER */}
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h2>Welcome Back!</h2>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="btn ghost" onClick={toggleForm}>
                  Login
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h2>Hello, Friend!</h2>
                <p>
                  Enter your personal details and start your journey with us
                </p>
                <button className="btn ghost" onClick={toggleForm}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthScreen;
