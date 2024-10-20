// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard'; // Import Dashboard
import './index.css'; // Import CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard /> {/* Render Dashboard directly */}
    <App></App>
  </React.StrictMode>
);
