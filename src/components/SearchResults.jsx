import React from 'react'
import { Card } from 'flowbite-react';

const SearchResults = ({ searchTerm }) => {
  return (
    <Card href="#" className="max-w-sm bg-[#0d0c45] h-auto w-96 hover:bg-[#0d0c45]">
        <div>
          <h2 className='text-[#faf9ff] font-bold'>Results</h2>
          <div>
            <ul className='text-[#faf9ff]'>{searchTerm}</ul>
          </div>
          
        </div>

    </Card> 
  )
}

export default SearchResults