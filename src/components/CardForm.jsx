import React, { useState } from 'react';
import '../styles/cardForm.css';
import Card from './Card'

export default function CardForm(props){

    const [ number, setNumber ] = useState('');
    const [ holderName, setHolderName ] = useState('');
    const [ month, setMonth ] = useState('');
    const [ year, setYear ] = useState('');
    let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    let years = [...Array(15).keys()].map(x=>x+ new Date().getUTCFullYear());


    const updateNumber = function(e){
        const regex =  /^[0-9]{0,16}$/
        let num = e.target.value.replaceAll(' ','');
        if(regex.test(num)){
            // split in froup of 4digits and add space with legacy regex $1
            setNumber(num.replace(/(.{4})/g, '$1 ').trim());
            // AMEX
            // re2 = /([0-9]{4})([0-9]{6})([0-9]{5})/
            // x.replace(re2, '$1 $2 $3')
            // "1234 567890 123456"
        }
    }
    const updateName = function(e){
        let rex = /(^[a-zA-Z\'\-\s]{0,25}$)/
        if(rex.test(e.target.value))
            setHolderName(e.target.value);
    }
    
    const updateMonth = function(e){
        setMonth(e.target.value);
    }
    const updateYear = function(e){
        setYear(e.target.value);
    }

    const numberInput = (
         <div className="row mb-3">
            <label className="labelName">Card Number</label>
            <input type="text" value={number} className="form-control" onChange={updateNumber} />
        </div>
    )
    const nameInput = (
        <div className="row mb-3">
            <label className="labelName">Card Name</label>
            <input type="text" value={ holderName } className="form-control" onChange={ updateName } />
        </div>
    )


    return(
        <div className="formBox container p-5">
            <Card number={number} holderName={holderName} month={month} year={year} />
            
            <form className="mt0">
                {numberInput}
                {nameInput}
                <div className="row">
                    <label className="labelName">Expiration Date</label>
                    <label className="labelName offset-6">CVV</label>
                </div>
                <div className="row">
                    <select className="form-control col" value={month} onChange={updateMonth} >
                        <option value="" disabled selected>Month</option>
                        {
                            months.map(m=>(
                                <option value={m}>{m}</option>
                            ))
                        } 
                    </select>
                    <select className="form-control col ml-2 mr-2" value={year} onChange={updateYear}>
                        <option value="" disabled selected>Year</option>
                        {
                            years.map(y=>(
                                <option value={y}>{y}</option>
                            ))
                        } 
                    </select>
                    <input type="text" className="form-control col mr-0"/>
                </div>
                <div className="row mt-3">
                    <button className="btn btn-primary form-control">Submit</button>
                </div>
                
            </form>
        </div>
    )
    

}
