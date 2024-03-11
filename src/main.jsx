import React from 'react';
import ReactDOM from 'react-dom/client';

//Composant principal
import App from './App.jsx';

// Importation des styles CSS
import '@styles/_reset.css';
import '@styles/app.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <App />
  </React.StrictMode>,
)
