import React from 'react';

export default function (props) {
    return <div className={'bg-gray-300 border-gray-600 border p-4 mb-4 rounded'}>
                <h1 className={'text-xl'}>{props.text}</h1>
                <p>
                    Search for an attraction by entering a search term in the box below.
                </p>
            </div>;
}
