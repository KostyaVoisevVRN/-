import React from 'react';
import './App.css';
import Header from './component/Header/Header.jsx';
import Navbar from './component/Navbar/Navbar.jsx';
import Profile from './component/Profile/Profile.jsx';
import Dialogs from './component/Dialogs/Dialogs.jsx';
import {Routes,BrowserRouter,Route} from 'react-router-dom';
console.log('Header');
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
