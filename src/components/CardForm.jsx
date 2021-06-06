import React, { useState, useRef } from 'react';
import '../styles/cardForm.css';
import Card from './Card'
import { getCardType } from '../utils/cardTypes';

export default function CardForm(props){

    const [ number, setNumber ] = useState('');
    const [ holderName, setHolderName ] = useState('');
    const [ month, setMonth ] = useState('');
    const [ year, setYear ] = useState('');
    const [ cvv, setCvv ] = useState('');
    const [toggle, setToggle ] = useState('');
    const boxRef = useRef(null);
    let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    let years = [...Array(15).keys()].map(x=>x+ new Date().getYear()%100);

    const updateToggle = function(){
        setToggle('180deg');
    }
    const revertToggle = function(){
        setToggle('360deg');
    }

    // Update the number as formatted on the input box asn set to state
    const updateNumber = function(e){
        const regex =  /^[0-9]{0,16}$/
        let num = e.target.value.replaceAll(' ','');
        if(regex.test(num)){
            // split in froup of 4digits and add space with legacy regex $1
            let ctype = getCardType(num).toLowerCase();
            ctype = ctype.length===0?'visa':ctype;
            if(ctype==='amex'){
                //split via 3 groups
                let cardNumber = (num.slice(0,4).replace(/(.{4})/g, '$1 ') + 
                    num.slice(4,10).replace(/(.{6})/g, '$1 ') +
                    num.slice(10,15)).trim();
                    setNumber(cardNumber);
            }
            else
                setNumber(num.replace(/(.{4})/g, '$1 ').trim());
        }
    }
    const updateName = function(e){
        let rex = /(^[a-zA-Z\-\s]{0,25}$)/
        if(rex.test(e.target.value))
            setHolderName(e.target.value);
    }
    
    const updateMonth = function(e){
        setMonth(e.target.value);
    }
    const updateYear = function(e){
        setYear(e.target.value);
    }
    const updateCVV = function(e){
        const regex =  /^[0-9]{0,4}$/
        if(regex.test(e.target.value))
            setCvv(e.target.value);
    }
    const boxAtNumber = ()=>{
        boxRef.current.style.display = 'block';
        boxRef.current.style.borderColor='darkgray';
        boxRef.current.style.transform= "translateY(0)";
        boxRef.current.style.width= "21rem";
        boxRef.current.style.height= "3rem";
    }
    const boxAtName = ()=>{
        boxRef.current.style.display = 'block';
        boxRef.current.style.borderColor='darkgray';
        boxRef.current.style.transform= "translateY(5.5rem)"
        boxRef.current.style.height= "2.7rem";
        boxRef.current.style.width= "16rem";
    }
    const boxAtDate = ()=>{
        boxRef.current.style.display = 'block';
        boxRef.current.style.borderColor='darkgray';
        boxRef.current.style.transform= "translate(16.5rem,5.5rem)"
        boxRef.current.style.height= "2.7rem";
        boxRef.current.style.width= "5rem";
    }
    const resetBox = ()=>{
        boxRef.current.style.borderColor='transparent';
        boxRef.current.style.transform= "translate(0,0)";
    }

    const numberInput = (
         <div className="row mb-3">
            <label className="labelName">Card Number</label>
            <input type="text" value={number} className="form-control" onChange={updateNumber} onFocus={boxAtNumber} onBlur={resetBox} />
        </div>
    )
    const nameInput = (
        <div className="row mb-3">
            <label className="labelName">Card Name</label>
            <input type="text" value={ holderName } className="form-control" onChange={ updateName } onFocus={boxAtName} onBlur={resetBox}/>
        </div>
    )

    return(
        <div className="formBox container p-5">
            <Card number={number} holderName={holderName} month={month} year={year} cvv={cvv} toggle={toggle}   />
            <div ref={boxRef} className="box"></div>
            <form className="mt0">
                {numberInput}
                {nameInput}
                <div className="row">
                    <label className="labelName">Expiration Date</label>
                    <label className="labelName offset-6">CVV</label>
                </div>
                <div className="row">
                    
                    <select className="form-control col" value={month || "Month"} 
                        onChange={updateMonth} onFocus={boxAtDate} onBlur={resetBox}>
                        <option value="Month" disabled >Month</option>
                        {
                            months.map((m,i)=>(
                                <option key={i} value={m}>{m}</option>
                            ))
                        } 
                    </select>
                    <select className="form-control col ml-2 mr-2" value={year || "Year"}
                        onChange={updateYear} onFocus={boxAtDate} onBlur={resetBox}>
                        
                        <option value="Year" disabled >Year</option>
                        {
                            years.map((y,i)=>(
                                <option key={i} value={y}>{y}</option>
                            ))
                        } 
                    </select>
                    <input type="text" id="cvv" value={cvv} onChange={updateCVV} 
                        onFocus={updateToggle} 
                        onBlur={revertToggle} 
                        className="form-control col mr-0 ml-4"/>
                </div>
                <div className="row mt-3">
                    <button className="btn btn-primary form-control">Submit</button>
                </div>
                
            </form>
        </div>
    )
    

}
