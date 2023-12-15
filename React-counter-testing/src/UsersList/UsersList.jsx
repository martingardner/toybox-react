import React, { useCallback, useState, useEffect, memo, useMemo } from 'react';
import { JSONplaceholderFetch } from '../api/JSONplaceholder.js';

function UsersList(){

    const [callLoaded, setCallLoaded] = useState(false);
    const [jsonData, setJsonData] = useState({});

    useMemo(async() => {
            const response = await JSONplaceholderFetch();
            setJsonData(response);
            setCallLoaded(true);
    }, [])


    return (
        <>
            <h2 data-testid="usersList-h2">JSON Placeholder Response</h2>
            {callLoaded && (
                <section>
                    <ul>
                    {jsonData.map( (d, index) => {
                        return <li key={`employee-${index}-${d?.id}`}>{d?.name}</li>
                    })}
                    </ul>
                </section>
            )}
        </>
    )
}

export default memo(UsersList)