// import React  from 'react'
// import { Button } from 'flowbite-react';

import './App.css'
import NavBar from './components/NavBar.jsx'
import Layout from './Layout.jsx'
// import SearchBar from './components/SearchBar.jsx'
import Searcher from './Searcher.jsx'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <div className='mt-28 text-center'>
         <Searcher />
        </div>
        <div className='mt-36 ml-96'>
         <Layout />
        </div>
       
      </div>
    </>
    

  )
}

export default App
