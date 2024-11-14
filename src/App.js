import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login/Login';
// import Registration from './components/Registration/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/registration" element={<Registration />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
