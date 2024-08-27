import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateEvents from './pages/CreateEvents'
import EditEvent from './pages/EditEvent'
import ShowEvent from './pages/ShowEvent'
import DeleteEvent from './pages/DeleteEvent'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/events/create' element={<CreateEvents />} />
      <Route path='/events/details/:id' element={<ShowEvent />} />
      <Route path='/events/edit/:id' element={<EditEvent />} />
      <Route path='/events/delete/:id' element={<DeleteEvent />} />
    </Routes>
  )
}

export default App