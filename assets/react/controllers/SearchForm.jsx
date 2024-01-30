import React, { useState } from 'react';
import SearchResults from './SearchResults.jsx';

export default function () {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchGeo, setSearchGeo] = useState('en');
 
    function getSearchTerm(value) {
        setSearchTerm('&title=' + value);
    }

    function getSearchGeo(value) {
        setSearchGeo(value);
    }
    
    return  <div>
                <div className={'p5 w-full mb-5'}>
                    <input type="text" className={'rounded-md p-3 w-100'} name="search" placeholder='Search term here...' onChange={(e) => getSearchTerm(e.target.value)} />
                    <div className={'w-100 grid grid-cols-4'}>
                        <p>Choose Region:</p>
                        <input type="radio" name="geo" value="en" onChange={(e) => getSearchGeo(e.target.value)} /> UK
                        <input type="radio" name="geo" value="us" onChange={(e) => getSearchGeo(e.target.value)} /> DE
                        <input type="radio" name="geo" value="de" onChange={(e) => getSearchGeo(e.target.value)} /> IE
                    </div>
                </div>
                <SearchResults searchTerm={searchTerm} searchGeo={searchGeo} /> 
            </div>;

}