import React from 'react';

const SearchButton = ({ onSearch }) => {

    const handleClick = () => {
        onSearch(); 
    }; 

    return (
        <button className='bg-[#000934] w-32 rounded-full text-[#faf9ff] h-10 font-bold'  onClick={handleClick}>Search</button>
    );
}

export default SearchButton;
