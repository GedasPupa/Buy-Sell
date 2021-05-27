import React from 'react';
import './BuySell.css';

class BuySell extends React.Component {
    render() {
        return (
            <form class="form" onSubmit={this.props.onSubmit}>
                <div class="form-row">
                    <input type="text" name="pay" placeholder="Pay" onChange={this.props.handleChange} />
                </div>
                <div class="form-row">
                    <input type="text" name="buy" placeholder="Buy" onChange={this.props.handleChange} />
                </div>
                <p>Payment method</p> 
                <div class="form-row">
                    <select name="payment" id="payment" onChange={this.props.handleChange}>
                        <option value="bank">Bank transfer</option>
                        <option value="card">Credit/Debit card</option>
                        <option value="paypal">Paypal</option>
                    </select>
                </div>
                <div class="form-row">
                    <button name="button" type="submit">Buy BTC</button>
                </div>        
            </form>            
        );
    };
}

export default BuySell;