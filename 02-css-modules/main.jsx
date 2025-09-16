import './styles/index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NavBar1}  from "./component/navBar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
