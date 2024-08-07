import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <BrowserRouter>
          <main className='dark text-foreground bg-background h-full w-full'>
            <App />
          </main>
        </BrowserRouter>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
)
