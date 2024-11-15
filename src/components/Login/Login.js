import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Correct import for react-router v6
import './Login.css';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [doctor, setDoctor] = useState({ email: '', password: '' });
  const [admin, setAdmin] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();  // useNavigate instead of useHistory

  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleDoctorChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleAdminChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (data.success) {
        sessionStorage.setItem('loggedUser', user.email);
        sessionStorage.setItem('ROLE', 'user');
        navigate('/userdashboard');  // use navigate instead of history.push
      } else {
        setMsg('Invalid credentials');
      }
    } catch (err) {
      setMsg('Login failed');
    }
  };

  const loginDoctor = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login/doctor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(doctor),
      });
      const data = await response.json();
      if (data.success) {
        sessionStorage.setItem('loggedUser', doctor.email);
        sessionStorage.setItem('ROLE', 'doctor');
        navigate('/doctordashboard');  // use navigate instead of history.push
      } else {
        setMsg('Invalid credentials');
      }
    } catch (err) {
      setMsg('Login failed');
    }
  };

  const adminLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(admin),
      });
      const data = await response.json();
      if (data.success) {
        sessionStorage.setItem('loggedUser', admin.email);
        sessionStorage.setItem('ROLE', 'admin');
        navigate('/admindashboard');  // use navigate instead of history.push
      } else {
        setMsg('Invalid credentials');
      }
    } catch (err) {
      setMsg('Login failed');
    }
  };

  const handleRoleClick = (role) => {
    setRole(role);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <button className="headbtn1" onClick={() => handleRoleClick("user")}>User</button>
        <button className="headbtn2" onClick={() => handleRoleClick("doctor")}>Doctor</button>
        <button className="headbtn3" onClick={() => handleRoleClick("admin")}>Admin</button>

        {role === "user" && (
          <div className="user-login-form">
            <h2 className="textual">User Login</h2>
            <form onSubmit={loginUser}>
              <small className="text-danger"><b>{msg}</b></small>
              <div className="form-group">
                <label>User Email address: <b className="text-danger">*</b></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={user.email}
                  onChange={handleUserChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>User Password: <b className="text-danger">*</b></label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={user.password}
                  onChange={handleUserChange}
                  required
                />
              </div>
              <button type="submit" className="btn loginbtn">Login</button>
            </form>
          </div>
        )}

        {role === "doctor" && (
          <div className="doctor-login-form">
            <h2 className="textual">Doctor Login</h2>
            <form onSubmit={loginDoctor}>
              <small className="text-danger"><b>{msg}</b></small>
              <div className="form-group">
                <label>Doctor Email address: <b className="text-danger">*</b></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={doctor.email}
                  onChange={handleDoctorChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Doctor Password: <b className="text-danger">*</b></label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={doctor.password}
                  onChange={handleDoctorChange}
                  required
                />
              </div>
              <button type="submit" className="btn loginbtn">Login</button>
            </form>
          </div>
        )}

        {role === "admin" && (
          <div className="admin-login-form">
            <h2 className="textual">Admin Login</h2>
            <form onSubmit={adminLogin}>
              <small className="text-danger"><b>{msg}</b></small>
              <div className="form-group">
                <label>Admin Email address: <b className="text-danger">*</b></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={admin.email}
                  onChange={handleAdminChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Admin Password: <b className="text-danger">*</b></label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={admin.password}
                  onChange={handleAdminChange}
                  required
                />
              </div>
              <button type="submit" className="btn loginbtn">Login</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
