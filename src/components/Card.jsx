import React , { useState, useEffect } from 'react';
import '../styles/card.css';
import chip from '../assets/images/chip.png';
import TextTransition, { presets } from "react-text-transition";

export default function Card(props){
    const [numArr, setNumArr] = useState(new Array(19).fill('#'));



    //Modify digit in display
    const formatNumber = function(p,i){ 
        let temp='#';
        if(i===4 || i===9 || i===14) 
        {    
            temp=' ';
        }
        else if(i<4 || i>14)
            temp = (props.number[i]===undefined)?'#':props.number[i];
        else {
            temp = (props.number[i]===undefined)?'#':'*';
        }
        return temp; 
   }
       // uypdate the display array 
       useEffect(() => {
        let temp = numArr.map(formatNumber);
        setNumArr(temp);
        }, [props.number]);



    return(
        <div className="cardMain">
            <div className="p-4">
                <img src={chip} className="d-flex justify-content-start chip" alt="chip" />
            </div>
            <div  className="numRow mt-3 align-middle">
                <strong>
                { numArr.map(n=>(
                    <TextTransition
                        inline
                        text={ n }
                        springConfig={{ stiffness: 80, damping: 20 }}
                        direction="down"
                        className="num pr-3"
                        />
                    )) 
                }
                </strong>
            </div>
            <div className="row pl-5 pr-4 pt-4 mt-4">
                <div className="col-9">
                    <div className="row h6 metaText">Card Holder</div>
                    <div className="row h6">
                    <TextTransition
                        inline
                        text={ props.holderName || 'Ayush Kumar' }
                        springConfig={{ stiffness: 80, damping: 20 }}
                        className="pr-3 h6"
                        direction="down"
                        />
                    </div>
                </div>
                <div className="col-3">
                    <div className="row h6 metaText">Expiry</div>
                    <div className="row h6">
                    <TextTransition
                        inline
                        text={ props.month || 'MM' }
                        springConfig={{ stiffness: 80, damping: 20 }}
                        className="p-0 h6 mon"
                        direction="down"
                        />
                        /
                        <TextTransition
                        inline
                        text={ props.year || 'YYYY'}
                        springConfig={{ stiffness: 80, damping: 20 }}
                        className="p-0 h6"
                        direction="down"
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
    
}