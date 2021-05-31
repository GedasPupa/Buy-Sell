import React, { useState, useEffect } from 'react';
import BuySell from '../Hooks/BuySellFunc';
import axios from 'axios';
import CoinsList from './CoinsList';
import FiatList from './FiatList';

const paymentMethods = ['Credit/Debit Card', 'Bank Transfer', 'Paypal', 'Mobile Account'];

function App() {
    const [inputPay, setInputPay] = useState('');
    const [inputBuy, setInputBuy] = useState('');
    const [payCoin, setPayCoin] = useState('EUR');
    const [buyCoin, setBuyCoin] = useState('BTC');
    const [results, setResults] = useState('');
    const [payment, setPayment] = useState(paymentMethods[0]);
    const [toggle, setToggle] = useState(false);
    const [toggleCoin, setToggleCoin] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://api.coingate.com/v2/rates',
          );
     
          setResults(result.data.trader.buy);
        };
     
        fetchData();
      }, []); // -- posible to fetch on [payCoin, buyCoin] or other state changes --

    function getRate() {
        if (results === '') {
            return;
        }
        const asArray = Object.entries(results);
        const rates = asArray.filter(coin => coin[0] === buyCoin);
        const neededTarif = Object.entries(rates[0][1]);
        const veryNeeded = neededTarif.filter(trf => trf[0] === payCoin);
        const rate = veryNeeded[0][1];
        return rate;
    }

    useEffect(() => {
        setInputBuy(() => {
            if ((inputPay / getRate()) == '') {
                return '';
            } else return inputPay / getRate();
        });
        setInputPay(inputPay);
    }, [inputPay, payCoin]);

    useEffect(() => {
        setInputPay(() => {
            if (inputBuy * getRate() == '') {
                return '';
            } else return inputBuy * getRate();
        });
        setInputBuy(inputBuy);
    }, [inputBuy, buyCoin]);

    function toggleFunc() {
        if (toggleCoin) {
            setToggleCoin(!toggleCoin);
        }
        setToggle(!toggle);
    }
    function toggleCoinFunc() {
        if (toggle) {
            setToggle(!toggle);
        }
        setToggleCoin(!toggleCoin);
    }
    
    return(
      <>
        <BuySell 
        handlePay={({target}) => setPayCoin(target.value)}
        handleBuy={({target}) => setBuyCoin(target.value)}
        handleInputPay={({target}) => setInputPay(target.value)}
        handleInputBuy={({target}) => setInputBuy(target.value)}
        handlePayment={({target}) => setPayment(target.value)}
        toggleFunc={toggleFunc}
        toggleCoinFunc={toggleCoinFunc}
        // onSubmit={this.onSubmit}
        inputPay={inputPay}
        inputBuy={inputBuy}
        pay={payCoin}
        buy={buyCoin}
        paymentMethods={paymentMethods}
        payment={payment}      
        />
        <CoinsList toggleCoin={toggleCoin} handleBuy={({target}) => setBuyCoin(target.name)} />
        <FiatList toggle={toggle} handlePay={({target}) => setPayCoin(target.name)} />
      </>
    )
}

export default App;
