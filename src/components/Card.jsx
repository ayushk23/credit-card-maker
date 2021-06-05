import React , { useState, useEffect } from 'react';
import '../styles/card.css';
import chip from '../assets/images/chip.png';
import TextTransition, { presets } from "react-text-transition";

export default function Card(props){

    const [numArr, setNumArr] = useState(new Array(19).fill('X'));
    // uypdate the display array 
    useEffect(() => {
        let temp = numArr.map(formatNumber);
        setNumArr(temp);
    }, [props.number]);

    //Modify digit in display
    const formatNumber = function(p,i){ 
        let temp='#';
        if(i===4 || i===9 || i===14) 
        {    
            temp=' ';
        }
        else if(i<4 || i>14)
            temp = (props.number[i]===undefined)?'X':props.number[i];
        else {
            temp = (props.number[i]===undefined)?'X':'#';
        }
        return temp; 
   }


    return(
        <div className="cardMain">
            <div className="p-4">
                <img src={chip} className="d-flex justify-content-start chip" alt="chip" />
            </div>
            <div  className="numRow pl-2 pr-2 mt-3 align-middle">
                { numArr.map(n=>(
                    <TextTransition
                        inline
                        text={ n }
                        springConfig={ presets.stiff  }
                        className="num pr-3"
                        />
                    )) 
                }
            </div>
        </div>
    )
    
}