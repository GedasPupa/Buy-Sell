import React from 'react';
import './BuySell.css';
import Option from '../Option/Option';

class BuySell extends React.Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.onSubmit}>
                <div className="form-row">
                    <input type="number" name="inputPay" placeholder="Pay" onChange={this.props.handleChange} value={this.props.payValue} />
                    <select name="pay" onChange={this.props.handleChange} defaultValue="EUR" style={{width: "60px"}}>
                        <Option 
                            name="pay"
                            results={this.props.results}
                        />
                    </select>
                    {/* <select name="pay" id="pay" onChange={this.props.handleChange}>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                    </select> */}
                </div>
                <div className="form-row">
                    <input type="number" name="inputBuy" placeholder="Buy" onChange={this.props.handleChange} value={this.props.buyValue} />
                    <select name="buy" onChange={this.props.handleChange} defaultValue="BTC" style={{width: "60px"}}>
                        <Option 
                            name="buy"
                            results={this.props.results}
                        />
                    </select>
                    {/* <select name="buy" id="buy" onChange={this.props.handleChange}>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="LTC">LTC</option>
                    </select> */}
                </div>
                <p>Payment method</p> 
                <div className="form-row">
                    <select name="payment" id="payment" onChange={this.props.handleChange}>
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
}

export default BuySell;