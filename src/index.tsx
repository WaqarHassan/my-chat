// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css'; // <-- Import Tailwind CSS
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();
