import React from 'react';
import './BuySell.css';

class BuySell extends React.Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.onSubmit}>
                <div className="form-row">
                    <input type="number" name="pay" placeholder="Pay" onChange={this.props.handleChange} />
                </div>
                <div className="form-row">
                    <input type="number" name="buy" placeholder="Buy" onChange={this.props.handleChange} />
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