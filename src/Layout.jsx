import React from 'react'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist.jsx'

const Layout = () => {
  return (
    <div className='flex mt-20 w-max h-auto space-x-10'>
        <div className=''>
         <SearchResults /> 
        </div> 
        <div className=''>
         <Playlist /> 
        </div>  
    </div>
  )
}

export default Layout