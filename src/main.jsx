import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { OrgContextProvider } from './context/OrgContext.jsx'
import {BrowserRouter as Router} from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <OrgContextProvider>
    <App />
    </OrgContextProvider>
    </Router>
  </React.StrictMode>,
)
