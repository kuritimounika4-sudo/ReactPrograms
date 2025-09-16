import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store.js'
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
  <Provider store={store}>
    <App />
   </Provider>
  </StrictMode>
)
