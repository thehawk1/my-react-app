import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Importez le composant App

// Rendre le composant App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);