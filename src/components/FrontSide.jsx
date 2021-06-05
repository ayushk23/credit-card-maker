import React ,{ useState, useEffect } from 'react';
import chip from '../assets/images/chip.png';
import TextTransition from "react-text-transition";
import { getCardType } from '../utils/cardTypes'
import visa from '../assets/images/visa.png';


export default function FrontSide(props){
    const [numArr, setNumArr] = useState(new Array(19).fill('#'));
    const [type, setType] = useState('visa');

    useEffect(() => {
        let ctype = getCardType(props.number.replaceAll(' ',''));
        console.log(props.number);
        ctype = ctype.length===0?'visa':ctype;
        console.log(ctype);
        setType(ctype.toLowerCase());
    }, [props.number]);




    //Modify digit in display
    const formatNumber = function(p,i){ 
        let temp='#';
        if(i===4 || i===9 || i===14) {    
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
            <div>
                <div className="p-4 d-flex justify-content-between">
                    <img src={chip} className="chip" alt="chip" />
                    <span className={ type + " cardLogo"}></span>
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
                            text={ props.year || 'YY'}
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