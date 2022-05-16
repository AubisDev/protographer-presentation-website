import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Home } from './components/Home'
import 'flowbite';

ReactDOM.render(
  <React.StrictMode>
    <div className='overflow-x-hidden'>
      <Home />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
