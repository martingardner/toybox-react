import React, {useState} from 'react';

import InputOne from './InputOne';
import InputTwo from './InputTwo';

function DataInput(){
    const [name, setName] = useState('');

    const updateName = (e) => {
        const value = e?.target?.value;
        setName(value)
    }

    return(
        <section>
            <h2>Name is {name}</h2>
            <InputOne updateName={updateName} name={name} />
            <InputTwo updateName={updateName} name={name} />
        </section>
    )
}

export default DataInput;