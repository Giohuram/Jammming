import React, { useState } from 'react';
import SearchButton from './components/SearchButton.jsx'
import SearchBar from './components/SearchBar.jsx';

const Searcher = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api.example.com/search?q=${encodeURIComponent(searchTerm)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            setSearchTerm(data.results); // Assuming the API returns an array of search results
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };
    

    return (
        <div>
            <SearchBar searchTerm={searchTerm} />
           <div className='mt-14 '>
             <SearchButton onSearch={handleSearch}/>
           </div> 
            
        </div>
    );
}

export default Searcher;
