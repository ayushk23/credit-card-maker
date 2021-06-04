import React , { useState, useEffect } from 'react';
import '../styles/card.css';
import chip from '../assets/images/chip.png';

export default function Card(props){

    const [numArr, setNumArr] = useState([]);

    const upadteNumArr = () => {
        let a = numArr[0]; 
    }

    useEffect(() => {
        setNumArr(props.number.split(''));
    }, [props.number])


    return(
        <div class="cardMain">
            <div class="p-4">
                <img src={chip} className="d-flex justify-content-start chip" alt="chip" />
            </div>

           <span class="numRow pl-2 pr-2 align-middle">
                {props.number}
           </span>
        </div>
    )
    
}