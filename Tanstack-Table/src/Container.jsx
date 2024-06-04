import {useState} from 'react';

import App from './App';

function Container () {

    const [sorting, setSorting] =  useState([]);

    const customState = {sorting};

    function setSortingCallback(updater) {
        console.log('updater', updater);
        const newSortValue = updater instanceof Function ? updater(sorting) : updater

        console.log(newSortValue);
        setSorting(newSortValue);
    }


    return (
        <>
            <App customState={customState} setSortingCallback={setSortingCallback} />
        </>
    )
}

export default Container