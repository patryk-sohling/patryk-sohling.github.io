import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { registerSW } from "virtual:pwa-register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("offline ready");
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<div>dasdsadsadsda</div>} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
