import React from 'react';

function InputOne({updateName, name}){

    return(
        <div className="input-one">
            <label>Input One</label>
            <input data-testid="input one" onChange={updateName} value={name} />
        </div>
    )
}

export default InputOne