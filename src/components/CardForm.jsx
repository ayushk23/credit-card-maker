import React, { useState } from 'react';
import '../styles/cardForm.css';
import Card from './Card'

export default function CardForm(props){

    const [number, setNumber] = useState('');

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


    const numberInput = (
         <div className="row mb-3">
            <label className="labelName">Card Number</label>
            <input type="text" value={number} className="form-control" onChange={updateNumber} />
        </div>
    )
    const nameInput = (
        <div className="row mb-3">
            <label className="labelName">Card Name</label>
            <input type="text" className="form-control" />
        </div>
    )


    return(
        <div className="formBox container p-5">
            <Card number={number} />
            
            <form className="mt0">
                {numberInput}
                {nameInput}
                <div className="row">
                    <label className="labelName">Expiration Date</label>
                    <label className="labelName offset-6">CVV</label>
                </div>
                <div className="row">
                    <select className="form-control col" >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                    <select className="form-control col ml-2 mr-2" >
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
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
