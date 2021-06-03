import React from 'react';
import '../styles/cardForm.css';
import card from '../assets/images/20.jpeg';

export default function CardForm(props){


    const numberInput = (
         <div className="row mb-3">
            <label className="labelName">Card Number</label>
            <input type="text" className="form-control"  />
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
            
            <div>
                <img src={card} alt="card" className="cardMain" />
            </div>
            <form className="mt0">
                {numberInput}
                {nameInput}
                <div class="row">
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
