import React from 'react';

function InputOne({updateName, name}){

    return(
        <div className="input-one">
            <label>Input One</label>
            <input onChange={updateName} value={name} />
        </div>
    )
}

export default InputOne