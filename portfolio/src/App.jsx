import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Project from './components/Project'
import './App.css'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

const App = 12
function App() { App }


function App() {


  return (
    <>
      <Header />


      <Outlet />


      <Footer />
    </>
  )
}




export default App
