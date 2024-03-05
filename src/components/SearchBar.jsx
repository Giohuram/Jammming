import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        try {
            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`, {
                headers: {
                    Authorization: `Bearer YOUR_SPOTIFY_API_KEY`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }

            const data = await response.json();
            const tracks = data.tracks.items.map(item => ({
                id: item.id,
                name: item.name,
                artist: item.artists[0].name,
                album: item.album.name,
            }));

            onSearch(tracks);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
      <>
        <div>
            <input
                type="text"
                placeholder="Enter A Song Title"
                value={searchTerm}
                onChange={handleSearch}
                className='rounded bg-color-[#fbfcfb]'
            />
        </div>
      </>     
    );
}

export default SearchBar;
