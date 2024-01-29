import React, { useState } from 'react';
import useSWR from 'swr';

export default function (props) {
    
    return <div>
        <form>
            <input type="text" name="search" value={props.searchTerm} />
            <input type="submit" value="Search" />
        </form>
    </div>;

}