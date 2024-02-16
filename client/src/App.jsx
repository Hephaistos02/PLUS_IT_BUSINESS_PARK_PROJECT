import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';




axios.defaults.baseURL = "http://localhost:8000"   //backend URL
axios.defaults.withCredentials = true


function App() {

  return (
    
    <UserContextProvider>
    <Navbar/>
    <Toaster position='top-center' toastOptions={{duration: 2500}} />
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/profile' element={<Profile/>} />
      </Routes>
      </UserContextProvider>
   
  )
}

export default App
