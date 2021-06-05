import React  from 'react';
import '../styles/card.css';
import FrontSide from './FrontSide';


export default function Card(props){
    


    return(
        <div className="cardMain">
            <FrontSide number={props.number} holderName={props.holderName} month={props.month} year={props.year}/>
        </div>
    )
    
}