import React from 'react';
import './BuySell.css';
// import Option from '../Option/Option';
// import CoinsList from './coinsList';

function BuySell(props) {
    const {handlePay, handleBuy, handleInputPay, handleInputBuy, inputPay, inputBuy, pay, buy, paymentMethods, handlePayment} = props;
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
                        {/* <option value="BTC">Bitcoin (BTC)</option>
                        <option value="BTC"> />Bitcoin (BTC)</option>
                        <option value="LTC"> />Litecoin (LTC)</option>
                        <option value="ETH"> />Ethereum (ETH)</option>
                        <option value="XRP"> />Ripple (XRP)</option>
                        <option value="BCH"> />Bitcoin Cash (BCH)</option>
                        <option value="BNB"> />Binance Coin (BNB)</option>
                        <option value="XLM"> />Stellar (XLM)</option>
                        <option value="TRX"> />TRON (TRX)</option>
                        <option value="ATOM"> />Cosmos (ATOM)</option>
                        <option value="NANO"> />NANO (NANO)</option>
                        <option value="BUSD"> />Binance USD (BUSD)</option>
                        <option value="PAX"> />PAX (PAX)</option>
                        <option value="DASH"> />Dash (DASH)</option>
                        <option value="DAI"> />Dai Stablecoin (DAI)</option>
                        <option value="EOS"> />EOS (EOS)</option>
                        <option value="USDT"> />Tether (USDT)</option>
                        <option value="QTUM"> />Qtum (QTUM)</option> */}
                        <option value="BTC">Bitcoin (BTC)</option>
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
                    <button name="button" type="submit">Buy BTC</button>
                </div>
            </form>            
        );
    };


export default BuySell;