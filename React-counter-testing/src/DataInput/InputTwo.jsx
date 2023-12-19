import React from 'react';

function InputTwo({updateName, name}){

    return(
        <div className="input-two">
            <label>Input Two</label>
            <input onChange={updateName} value={name} />
        </div>
    )
}

export default InputTwo;