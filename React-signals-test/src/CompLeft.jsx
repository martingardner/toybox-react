import React, {useEffect, useState} from 'react';

import { count } from './Signals';


export const CompLeft = () => {

    const [s, setS] = useState(0);

    const setValue = () => {
        setS( ()=> {
            return s + 1
        })
    }

    useEffect( ()=> {
        console.log('CompLeft page load');
    }, [])

    return (
        <section>
            <h2>Comp Left</h2>
            <button onClick={ () => count.value++}>Count {count}</button>
            <button onClick={ () => setValue()}>Local State {s}</button>
        </section>
    )
}