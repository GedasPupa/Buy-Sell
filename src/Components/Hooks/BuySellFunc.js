import React, {useState} from 'react';
import './BuySell.css';

const aButton = {
    backgroundColor: "aquamarine",
    padding: "10px 40px",
    appearance: "button",
    border: "1px solid black",
    textDecoration: "none",
    color: "initial",
}

function BuySell(props) {
    const {handlePay, handleBuy, handleInputPay, handleInputBuy, inputPay, inputBuy, pay, buy, paymentMethods, handlePayment, toggleFunc, toggleCoinFunc} = props;

        return (
            <form className="form" >
                <div className="form-row">
                    <input type="number" name="inputPay" placeholder="Pay" onChange={handleInputPay} value={inputPay} />{/*// -- .toFixed(2) ???*/}
                    <button type="reset" onClick={toggleFunc}>{pay} <span style={{fontSize: "10px", fontWeight: "bold"}}>&#8744;</span></button>
                    <select name="pay" id="pay" onChange={handlePay} value={pay} >
                        <option value="EUR">EUR</option> {/* -- posible to map all coins and currencies for full option: commit "Logic-v1 #1" and Option Component --*/}
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>
                <div className="form-row">
                    <input type="number" name="inputBuy" placeholder="Buy" onChange={handleInputBuy} value={inputBuy} />
                    <button type="reset" onClick={toggleCoinFunc}>{buy}<span style={{fontSize: "10px", fontWeight: "bold"}}>&#8744;</span></button>
                    <select name="buy" id="buy" onChange={handleBuy} value={buy} >                                      
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="LTC">LTC</option>
                    </select>
                </div>
                <p>Payment method</p> 
                <div className="form-row">
                    <select name="payment" id="payment" onChange={handlePayment}>
                        {
                            paymentMethods.map(item => {
                                return (<option value={item} key={item}>{item}</option>);
                            })
                        }
                    </select>
                </div>
                <div className="form-row">
                    <a style={aButton} href="http://example.com/" target="_blank">Buy {buy}</a>
                    {/* <button name="button" target="_blank" href="http://example.com/" type="link">Buy {buy}</button> */}
                </div>
            </form>            
        );
    };


export default BuySell;