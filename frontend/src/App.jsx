import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctor/>}/>
        <Route path='/doctors:categories' element={<Doctor/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/myappointment' element={<MyAppointment/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App