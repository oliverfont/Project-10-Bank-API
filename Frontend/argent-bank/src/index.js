import React from 'react';
import ReactDOM from 'react-dom/client'; // Notez l'utilisation de 'react-dom/client'
import './index.css';
import App from './app/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Utilisation de createRoot
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
