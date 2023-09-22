import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(

  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </ThemeProvider>

)
