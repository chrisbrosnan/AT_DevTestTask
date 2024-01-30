import React, { useState } from 'react';
import useSWR from 'swr';
import SearchResults from './SearchResults.jsx';

export default function () {

    const [searchTerm, setSearchTerm] = useState('');
  
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
  
    const {
        data: attractions,
        error,
        isValidating,
    } = useSWR('https://global.atdtravel.com/api/products?geo=en' + searchTerm, fetcher);

    // Handles error and loading state
    if (error) return <div className='failed'>failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;
 
    function getSearchTerm(value) {
        setSearchTerm('&title=' + value);
    }
    
    return  <div>
                <div className="p5 w-3/4">
                    <input type="text" name="search" placeholder='Search term here...' onChange={(e) => getSearchTerm(e.target.value)} />
                </div>
                <div className="p5 w-3/4">
                    <SearchResults searchTerm={searchTerm} /> 
                </div>
            </div>;

}