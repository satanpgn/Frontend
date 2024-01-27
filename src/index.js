import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// If Homepage.jsx is inside a 'pages' directory
import Homepage from './pages/Homepage';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

