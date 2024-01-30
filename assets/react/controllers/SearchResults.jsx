import React, { useState } from 'react';
import useSWR from 'swr';


export default function ({searchTerm}) {

    //const [searchTerm, setSearchTerm] = useState('');
  
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
  
    const {
        data: attractions,
        error,
        isValidating,
    } = useSWR('https://global.atdtravel.com/api/products?geo=en' + searchTerm, fetcher);

    // Handles error and loading state
    if (error) return <div className='failed'>failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;
    
    return  <div>
                <div className="p5 w-3/4">
                    <div className="basis-1/4">
                        {attractions.data && attractions.data.map((attraction) => (
                            <h1 key={attraction.id}>{attraction.title}</h1>
                        ))}
                    </div>
                </div>
            </div>;

}