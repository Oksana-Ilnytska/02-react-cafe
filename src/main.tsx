import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
// main.tsx

import { createRoot } from 'react-dom/client';

import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
