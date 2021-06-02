import React from 'react';
import './BuySellR.css';

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
            <div class="background">
                <div class="flex">
                    <div class="flex-left">
                        <h1 class="main-title"><span class="green">Buy Bitcoin,</span> Ethereum, Litecoin and other crypto <span class="green">online</span></h1>
                        <p class="text">Why bother going through complicated exchanges? Buy cryptocurrency with top payment methods like SEPA bank transfer, Credit and Debit Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin, Ethereum or any other popular crypto directly to your personal wallet without making any initial deposits. It's as easy as it gets!</p>
                        <a href="http://example.com/" target="_blank" class="start-now">Start now<span class="entitie">&gt;</span></a>
                    </div>
                    <div class="flex-right">
                        <div class="flex-right-back">
                        </div>
                        <form className="form" >
                            <div className="form-row">
                                <label for="inputPay">Pay</label>
                                <input type="number" name="inputPay" id="inputPay" placeholder="Pay" onChange={handleInputPay} value={inputPay} />{/*// -- .toFixed(2) ???*/}
                                <div class="line"></div>
                                <button type="reset" onClick={toggleFunc}>{pay} <span style={{fontSize: "10px", fontWeight: "bold"}}>&#8744;</span></button>
                                {/* 
                                <select name="pay" id="pay" onChange={handlePay} value={pay} >
                                    <option value="EUR">EUR</option>  */}
                                    {/* -- posible to map all coins and currencies for full option: commit "Logic-v1 #1" and Option Component --*/}
                                    {/* <option value="USD">USD</option>
                                    <option value="GBP">GBP</option>
                                </select> */}
                            </div>
                            <div className="form-row">
                                <label for="inputBuy">Pay</label>
                                <input type="number" name="inputBuy" id="inputBuy" placeholder="Buy" onChange={handleInputBuy} value={inputBuy} />
                                <button type="reset" onClick={toggleCoinFunc}>{buy}<span style={{fontSize: "10px", fontWeight: "bold"}}>&#8744;</span></button>
                                
                                {/* <select name="buy" id="buy" onChange={handleBuy} value={buy} >                                      
                                    <option value="BTC">BTC</option>
                                    <option value="ETH">ETH</option>
                                    <option value="LTC">LTC</option>
                                </select> */}

                            </div>
                            <p className="method">Payment method</p> 
                            <select name="payment" id="payment" onChange={handlePayment}>
                                {
                                    paymentMethods.map(item => {
                                        return (<option value={item} key={item}>{item}</option>);
                                    })
                                }
                            </select>
                            <div className="form-row">
                                <a className="btn-buy" href="http://example.com/" target="_blank">Buy {buy}</a>
                                {/* <button name="button" target="_blank" href="http://example.com/" type="link">Buy {buy}</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>     
        );
    };


export default BuySell;