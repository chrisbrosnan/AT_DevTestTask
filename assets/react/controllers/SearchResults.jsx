import React, { useState } from 'react';
import useSWR from 'swr';

export default function ({searchTerm}) {
  
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
  
    const {
        data: attractions,
        error,
        isValidating,
    } = useSWR('https://global.atdtravel.com/api/products?geo=en' + searchTerm, fetcher);

    // Handles error and loading state
    if (error) return <div className='failed'>No results found</div>;
    if (isValidating) return <div className="Loading">Loading results...</div>;
    
    return  <div className={'grid grid-cols-4 gap-4'}>
                {attractions.data && attractions.data.map((attraction) => (
                    <div key={attraction.id} className='text-sm mb-5'>
                        <p>
                            <img className={'w-full mb-4'} src={attraction.img_sml} />
                        </p>
                        <h1 className={'font-bold min-h-12'}>
                            <strong>{attraction.title}</strong>
                        </h1>
                        <p>
                            <strong>Adult Price:</strong><span>From &pound;{attraction.price_from_adult}</span>
                        </p>
                        <p>
                            <strong>Child Price:</strong> <span>From &pound;{attraction.price_from_child}</span>
                        </p>
                        <p>
                            <strong>Destination:</strong> <span>{attraction.dest}</span>
                        </p>
                    </div>
                ))}
            </div>;

}