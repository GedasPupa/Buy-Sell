import React from 'react';
import './BuySell.css';
// import Option from '../Option/Option';

function BuySell(props) {
    const {handlePay, handleBuy, handleInputPay, handleInputBuy, inputPay, inputBuy, pay, buy} = props;
        return (
            <form className="form" >
                <div className="form-row">
                    <input type="number" name="inputPay" placeholder="Pay" onChange={handleInputPay} value={inputPay} /> {/*// -- .toFixed(2) ???*/}
                    <select name="pay" id="pay" onChange={handlePay} value={pay} >
                        <option value="EUR">EUR</option> {/* -- posible to map all coins and currencies for full option: commit "Logic-v1 #1" and Option Component --*/}
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>
                <div className="form-row">
                    <input type="number" name="inputBuy" placeholder="Buy" onChange={handleInputBuy} value={inputBuy} />
                    <select name="buy" id="buy" onChange={handleBuy} value={buy} >
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="LTC">LTC</option>
                    </select>
                </div>
                <p>Payment method</p> 
                <div className="form-row">
                    <select name="payment" id="payment" >
                        <option value="bank">Bank transfer</option>
                        <option value="card">Credit/Debit card</option>
                        <option value="paypal">Paypal</option>
                    </select>
                </div>
                <div className="form-row">
                    <button name="button" type="submit">Buy BTC</button>
                </div>        
            </form>            
        );
    };


export default BuySell;