import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/HomePage';
import './App.css';
import './wakeBackend.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
