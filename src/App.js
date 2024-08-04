import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './header/Header'
import Home from './header/Home'
import Login from './Forms/Login'
import Register from './Forms/Register'
import AdminDashboard from './Admin/AdminDashboard'
import AddTrain from './Admin/AddTrain'
import UpdateSeats from './Admin/UpdateSeats'
import TrainBooking from './Forms/TrainBooking'
import SeatsChecking from './tables/SeatsChecking'
import ViewTrainDetails from './ViewTrainDetails'

const App = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/admin' && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/register-page" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-train" element={<AddTrain />} />
        <Route path="/update-seats" element={<UpdateSeats />} />
        <Route path="/book-train" element={<TrainBooking />} />
        <Route path="/seats-check" element={<SeatsChecking />} />
        <Route path="/train/view/:train_id" element={<ViewTrainDetails />} />
      </Routes>
    </>
  )
}

export default App
