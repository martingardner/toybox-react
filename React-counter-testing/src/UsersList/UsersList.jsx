import React, { useState, useEffect, memo } from 'react';
import { JSONplaceholderFetch } from '../api/JSONplaceholder.js';

function UsersList(){

    const [callLoaded, setCallLoaded] = useState(false);
    const [jsonData, setJsonData] = useState({});

    const apiCall = async () => {
        const response = await JSONplaceholderFetch();
        setJsonData(response);
        setCallLoaded(true);
    }

    useEffect( ()=> {
        apiCall();
    }, []);


    return (
        <>
            <h2 data-testid="usersList-h2">JSON Placeholder Response</h2>
            {callLoaded && (
                <section>
                    <ul role="ul">
                    {jsonData.map( (d, index) => {
                        return <li role="li" key={`employee-${index}-${d?.id}`}>{d?.name}</li>
                    })}
                    </ul>
                </section>
            )}
        </>
    )
}

export default memo(UsersList)