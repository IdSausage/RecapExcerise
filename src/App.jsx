import { useState } from 'react'
import './App.css'
import FavouriteSite from './components/FavouriteSite';
import Profile from './components/Profile';
import Gallery from './components/Gallery';

import StateAssignmentOne from './components/StateAssignmentOne';
import StateAssignmentTwo from './components/StateAssignmentTwo';

function App() {
  
  return(
    <div className='App'>
        <FavouriteSite />
        <Profile />
        <Gallery />

        <StateAssignmentOne />
        <StateAssignmentTwo />
    </div>
  )
}

export default App
