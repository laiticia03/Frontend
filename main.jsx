import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {WorkoutList , Form } from './components/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='header'>
      <h1>Workout Tracker</h1>
    </div>
    <div className='main'>
      <Form />
      <WorkoutList />
    </div>
    
  </React.StrictMode>,
)