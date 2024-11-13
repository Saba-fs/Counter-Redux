import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { stores } from './Redux/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={stores} >
      <App />
    </Provider>  
  </StrictMode>,
)
