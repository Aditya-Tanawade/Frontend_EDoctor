// WelcomePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="content">
      <div className="header" id="header">
      <div className="nav">
        <label></label>
        <div className="switchs">
            <button className="log" id="log" onClick={() => window.location.href = '/'}>
            <i className="fa fa-home"></i> Home
            </button>
            <button className="log" id="log" onClick={() => window.location.href = '/login'}>
            <i className="fa fa-sign-in"></i> LOGIN
            </button>
            <button className="create_acc" id="create_acc" onClick={() => window.location.href = '/registration'}>
            <i className="fa fa-user-plus"></i> CREATE ACCOUNT
            </button>
        </div>
        </div>
        <div className="main">
          <div className="text">
            <h1 style={{ marginLeft: '-5%' }}>Outpatient Doctor Appointment System</h1><br />
            <h5 style={{ fontFamily: 'roboto', marginLeft: '10%', color: 'rgb(248, 247, 247)' }}>
            Infosys Springboard Project
            </h5><br /><br />
          </div><br />
          <img className="floating" id="img3" src="assets/img/healthcaresystem.png" alt="Healthcare" />
        </div>
      </div>
      <br />

      <main id="main">
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2 style={{ fontFamily: 'aladin' }}>Three Different Logins with New Registration</h2>
            </div>
            <div className="mid_body2">
              <div className="details">
                <div className="detail_1" onClick={() => handleNavigation('/admin-login')} 
                     style={{ backgroundColor: 'rgb(238, 236, 138)', marginRight: '5%' }}>
                  <h2 style={{ fontWeight: 'bolder', fontSize: '35px', fontFamily: 'aladin', marginTop: '5%', color: 'rgb(7, 46, 49)' }}>Admin Login</h2>
                  <div className="circle" style={{ borderRadius: '50%', backgroundColor: 'white', padding: '10%' }}>
                    <img src="assets/img/admin.png" width="130" height="130" alt="Admin" />
                  </div>
                </div>
                <div className="detail_2" onClick={() => handleNavigation('/doctor-login')}
                     style={{ backgroundColor: 'rgb(238, 236, 138)', marginRight: '5%' }}>
                  <h2 style={{ fontWeight: 'bolder', fontSize: '35px', fontFamily: 'aladin', marginTop: '5%', color: 'rgb(7, 46, 49)' }}>Doctor Login</h2>
                  <div className="circle" style={{ borderRadius: '50%', backgroundColor: 'white', padding: '10%' }}>
                    <img src="assets/img/maledoctor.png" width="130" height="130" alt="Doctor" />
                  </div>
                </div>
                <div className="detail_3" onClick={() => handleNavigation('/user-login')}
                     style={{ backgroundColor: 'rgb(238, 236, 138)', marginRight: '5%' }}>
                  <h2 style={{ fontWeight: 'bolder', fontSize: '35px', fontFamily: 'aladin', marginTop: '5%', color: 'rgb(7, 46, 49)' }}>User Login</h2>
                  <div className="circle" style={{ borderRadius: '50%', backgroundColor: 'white', padding: '10%' }}>
                    <img src="assets/img/maleuser.png" width="130" height="130" alt="User" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WelcomePage;
