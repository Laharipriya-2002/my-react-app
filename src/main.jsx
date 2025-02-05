// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { Provider } from 'react-redux';

import App from './App';
import App1 from './App1';
import App3 from './app3';
import Footer from './footer';
import { store } from './store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/my-react-app"> {/* Update this with your repo name */}
      <div className="container">
        <div className="row">
          <App />
          <App1 />
        </div>
        <div className="row">
          <App3 />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);
