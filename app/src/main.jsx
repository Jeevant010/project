import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom'

ReactDOM.render( 
<div>
<h1>Hello world!</h1><p>hello new world!</p>
</div>
,document.getElementById("Root2"))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
