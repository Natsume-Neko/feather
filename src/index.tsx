import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Reader from './pages/reader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Reader />
  </React.StrictMode>
);
