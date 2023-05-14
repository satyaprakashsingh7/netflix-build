import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './LoginScreen';


function App() {
  const user = null;
  return (
    <div className="app">
     <Router>
      {!user?(
        <LoginScreen/>
      ):(
        <Routes>
        <Route exact path="/" element={<HomeScreen/>}>
        </Route>
      </Routes>
      )}
      
     </Router>
    </div>
  );
}

export default App;
