import React from 'react';
import '../styles/BackSide.css';

export default function BackSide(props){

    return(
        <div>
            <div className="blackStrip"></div>
            <div className="m-2 mt-3 d-flex justify-content-end">
                <div className="cvv">CVV</div>
            </div>            
            <div className="m-2 whiteStrip d-flex justify-content-end">
                <div className="cvvValue">
                {
                    [...Array(props.cvv.length)].map((e, i) => <span className="busterCards" key={i}>&#9679;</span>)
                }
                </div>
            </div>
            <div className="mt-4 m-1 d-flex justify-content-end">
                <div className={props.type + " logo"}></div>
            </div>
        </div>
    )
}