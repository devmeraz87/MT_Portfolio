import React from 'react'
import ReactDOM from 'react-dom/client'
import MeraZ from './MeraZ.jsx'

import "./style/style.scss"

import ThemeContextProvider from "react-theme-contexts";
import { BrowserRouter } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('MeraZTanji')).render(
  // .> <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <MeraZ />
      </ThemeContextProvider>
    </BrowserRouter>
  // .> </React.StrictMode>,
)
