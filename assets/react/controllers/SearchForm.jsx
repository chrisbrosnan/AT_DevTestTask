import React, { useState } from 'react';
import SearchResults from './SearchResults.jsx';

export default function () {

    const [searchTerm, setSearchTerm] = useState('');
 
    function getSearchTerm(value) {
        setSearchTerm('&title=' + value);
    }
    
    return  <div>
                <div className={'p5 w-full mb-5'}>
                    <input type="text" className={'rounded-md p-3 w-full'} name="search" placeholder='Search term here...' onChange={(e) => getSearchTerm(e.target.value)} />
                </div>
                <SearchResults searchTerm={searchTerm} /> 
            </div>;

}