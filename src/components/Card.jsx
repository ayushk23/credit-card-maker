import React , { useState, useEffect, useRef } from 'react';
import '../styles/card.css';
import BackSide from './BackSide';
import FrontSide from './FrontSide';
import { getCardType } from '../utils/cardTypes';


export default function Card(props){

    const cardRef = useRef({});
    const [type, setType] = useState('visa');

    useEffect(() => {
        let ctype = getCardType(props.cardNumber.replaceAll(' ',''));
        ctype = ctype.length===0?'visa':ctype;
        setType(ctype.toLowerCase());
    }, [props.cardNumber]);

    useEffect(() => {
           cardRef.current.style.transform= 'rotateY('+props.toggle+')';
        //    cardRef.current.style.transform= 'rotateY(180deg)';
    }, [props.toggle])


    return(
        <div className="cardContainer">
            <div className="cardMain" ref={cardRef} >
                <div className="cardImg cardFront ">
                    <FrontSide  cardNumber={props.cardNumber} holderName={props.holderName} month={props.month} year={props.year} type={type} />
                </div>
                <div className="cardImg cardBack">
                    <BackSide cvv={props.cvv} type={type} />
                </div>
            </div>
        </div>
        
    )
    
}