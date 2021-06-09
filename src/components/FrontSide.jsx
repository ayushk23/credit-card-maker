import React ,{ useState, useEffect } from 'react';
import chip from '../assets/images/chip.png';
import TextTransition from "react-text-transition";


export default function FrontSide(props){
    // const [numArr, setNumArr] = useState(new Array(19).fill('#'));
    let defVal = "#### #### #### ####";
    const [numArr, setNumArr] = useState(defVal.split(''));

    //Modify digit in display
    const formatNumber = function(char,i){ 
        
        if(props.type==='amex'){
            if(i===4 || i===11) {    
                char=' ';
            }
            else if(i<4 || i>13)
                char = (props.cardNumber[i]===undefined)?'#':props.cardNumber[i];
            else {
                char = (props.cardNumber[i]===undefined)?'#':'*';
            }
        }
        else{
            if(i===4 || i===9 || i===14) {    
                char=' ';
            }
            else if(i<4 || i>14)
                char = (props.cardNumber[i]===undefined)?'#':props.cardNumber[i];
            else {
                char = (props.cardNumber[i]===undefined)?'#':'*';
            }
        }
        return char; 
    }
       // uypdate the display array 
       useEffect(() => {
        let temp = numArr.map(formatNumber);
        setNumArr(temp);
        }, [props.cardNumber]);
    
        return(
            <div>
                <div className="p-4 d-flex justify-content-between">
                    <img src={chip} className="chip" alt="chip" />
                    <span className={ props.type + " cardLogo"}></span>
                </div>
                <div  className="numRow mt-3 align-middle">
                    <strong>
                    { props.type==='amex'?
                        numArr.slice(0,17).map((n,i)=>(
                            <TextTransition
                                inline key={i}
                                text={ n }
                                springConfig={{ stiffness: 80, damping: 20 }}
                                direction="down"
                                className="num pr-3"
                                />
                            )) 
                        :
                        numArr.map((n,i)=>(
                            <TextTransition
                                key={i}
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
                            <div className="pr-3 h6">{ props.holderName.toUpperCase() || 'AYUSH KUMAR' }</div>
                        {
                        
                        /* <TextTransition
                            inline
                            text={ props.holderName || 'Ayush Kumar' }
                            springConfig={{ stiffness: 80, damping: 20 }}
                            className="pr-3 h6"
                            direction="down"
                            /> */}
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