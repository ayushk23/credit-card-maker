import React from 'react';

export default function BackSide(props){

    return(
        <div>
            <div>This is back</div>
            <div>{props.cvv}</div>
        </div>
    )
}