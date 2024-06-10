import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'modern-normalize';
import App from '../components/App/App.jsx';
import { store } from '../redux/store.js';
import './index.module.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/Catalog-of-Campers-Test/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
