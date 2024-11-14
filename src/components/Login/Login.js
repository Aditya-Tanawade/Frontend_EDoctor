import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [role, setRole] = useState(''); // Track selected role
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    // Generic handle for form changes based on role
    if (role === 'user') {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
    // Implement similar state management for other roles as needed
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setMsg(''); // Clear previous messages
    setUser({ email: '', password: '' }); // Reset user state when switching roles
  };

  const login = (e) => {
    e.preventDefault();
    // Implement role-based login logic here
    if (role === 'user') {
      setMsg('User logged in');
    } else if (role === 'doctor') {
      setMsg('Doctor logged in');
    } else if (role === 'admin') {
      setMsg('Admin logged in');
    } else {
      setMsg('Please select a role');
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        {/* Role Selection Buttons */}
        <div className="role-selection">
          <button className="headbtn1" onClick={() => handleRoleSelect('user')}>User</button>
          <button className="headbtn2" onClick={() => handleRoleSelect('doctor')}>Doctor</button>
          <button className="headbtn3" onClick={() => handleRoleSelect('admin')}>Admin</button>
        </div>

        {/* Login Form */}
        <div className={`${role}-login-form`}>
          <h2 className="textual">{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
          <form onSubmit={login}>
            <small className="text-danger"><b>{msg}</b></small>
            
            <div className="form-group">
              <label htmlFor={`${role}email`}>{role.charAt(0).toUpperCase() + role.slice(1)} Email address: <b className="text-danger">*</b></label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pwd" style={{ marginTop: '5px' }}>{role.charAt(0).toUpperCase() + role.slice(1)} Password: <b className="text-danger">*</b></label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
              <small style={{ color: 'gray', fontSize: '10px' }}>
                At least one uppercase, numeric digit, lowercase, special character, length of 6-20
              </small>
            </div>

            <div className="checkbox" style={{ marginTop: '5px' }}>
              <small style={{ color: 'gray' }}>
                <input type="checkbox" name="remember" /> Remember me
              </small>
              <small style={{ color: 'navy', marginLeft: '42%', cursor: 'pointer' }}>Forgot password?</small>
            </div>

            <button type="submit" className="btn loginbtn" disabled={!user.email || !user.password}>
              Login
            </button>
          </form>
          
          <div className="sign-up" style={{ textAlign: 'center', marginTop: '10px' }}>
            Don't have an Account?{' '}
            <span style={{ color: 'navy', cursor: 'pointer' }} onClick={() => alert('Redirect to registration')}>
              <b>Create One</b>
            </span>
          </div>
          
          <hr />
          <p className="text-center mt-3"><b>or Login with</b></p>
          <div className="text-center">
            <i className="fa fa-google mx-3 fa-2x"></i>
            <i className="fa fa-linkedin mx-3 fa-2x"></i>
            <i className="fa fa-twitter mx-3 fa-2x"></i>
            <i className="fa fa-windows mx-3 fa-2x"></i>
            <i className="fa fa-github mx-3 fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
    