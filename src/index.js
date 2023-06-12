import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Global, css } from '@emotion/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${require('./global.css').default}
      `}
    />
    <App />
  </React.StrictMode>
)
