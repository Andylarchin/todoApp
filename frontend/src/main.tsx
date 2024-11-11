import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import StoreProvider from './store/store';

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </StoreProvider>
);
