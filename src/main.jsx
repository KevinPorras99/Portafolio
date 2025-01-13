import './index.css';
import 'boxicons/css/boxicons.min.css';
import 'fork-awesome/css/fork-awesome.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>
);