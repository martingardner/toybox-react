import React, { useCallback, useState, useEffect, memo, useMemo } from 'react';
import { JSONplaceholderFetch } from '../api/JSONplaceholder.js';

function BookObjectRender(){

    const [callLoaded, setCallLoaded] = useState(false);
    const [jsonData, setJsonData] = useState({});

    const fetchResponse = useMemo(async() => {
            const response = await JSONplaceholderFetch();
            setJsonData(response);
            setCallLoaded(true);
    }, [])


    return (
        <>
            <h2>JSON Placeholder Response</h2>
            {callLoaded && (
                <section>
                    <ul>
                    {jsonData.map( (d, index) => {
                        console.log('d', d);
                        return <li key={`employee-${index}-${d?.id}`}>{d?.name}</li>
                    })}
                    </ul>
                </section>
            )}
        </>
    )
}

export default memo(BookObjectRender)