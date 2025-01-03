import './index.css';
import 'boxicons/css/boxicons.min.css';
import 'fork-awesome/css/fork-awesome.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);