import React from 'react';
import useStore from '../store/store';

function Screen() {

    const { numnum, increaseNumNum, minusNumNum } = useStore();

    return(
        <main>
            <h1>Test</h1>
            <div>numnums: {numnum} </div>
            <button onClick={ increaseNumNum }>+1</button>
            <button onClick={ minusNumNum }>-1</button>
        </main>
    )

}

export default Screen