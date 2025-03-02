import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import App from './App.jsx'
import Home from './home/home.jsx';
import makeStyleX from '@stylexjs/dev-runtime';

export const stylex = makeStyleX({
  classNamePrefix: 'x',
  dev: true,
  test: false,
});

// createRoot(document.getElementById('root'));

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
