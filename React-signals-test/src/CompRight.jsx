import React, {useEffect} from 'react';
import { count } from './Signals';

export const CompRight = () => {

    useEffect( ()=> {
        console.log('CompRight Page load');
    }, [])

    return(
        <section>
            <h2>Comp Right</h2>
            <div>Count: {count}</div>
            <button onClick={ ()=> count.value++}>Update Count {count}</button>
        </section>
    )
}