import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ProjectsProvider } from './context/ProjectsContext.jsx'

// TODO: Import ThemeProvider and ProjectsProvider from context files
// TODO: Wrap App with both providers

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
