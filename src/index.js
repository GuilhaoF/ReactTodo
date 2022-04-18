import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './Pages/Home/Home';
import '../src/styles/Global.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);

