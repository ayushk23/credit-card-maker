import React , { useState, useEffect, useRef } from 'react';
import '../styles/card.css';
import BackSide from './BackSide';
import FrontSide from './FrontSide';


export default function Card(props){

    const cardRef = useRef({})

    useEffect(() => {
           cardRef.current.style.transform= 'rotateY('+props.toggle+')';
    }, [props.toggle])


    return(
        <div className="cardContainer">
            <div className="cardMain" ref={cardRef} >
                <div className="cardImg cardFront ">
                    <FrontSide  number={props.number} holderName={props.holderName} month={props.month} year={props.year} />
                </div>
                <div className="cardImg cardBack">
                    <BackSide cvv={props.cvv}  />
                </div>
            </div>
        </div>
        
    )
    
}