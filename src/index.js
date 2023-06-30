import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
