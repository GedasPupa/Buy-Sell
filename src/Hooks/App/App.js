import React, { useState, useEffect } from 'react';
import BuySell from '../BuySell/BuySell';
import axios from 'axios';
import Header from '../Header/Header';
import CoinsList from '../Lists/CoinsList';
import FiatList from '../Lists/FiatList';

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
      }, []); // -- possible to fetch on [payCoin, buyCoin] or other state changes --

    function getRate() { 
        // // possible to fetch new data before every inputPay/inputBuy count ( +time ):
        // fetch('https://api.coingate.com/v2/rates')
        // .then(response => response.json()).then(jsonResponse => {
        //     setResults(jsonResponse.trader.buy);
        // }).catch(error => console.log(error));

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
        setInputBuy((prev) => {
            const rate = getRate();
            if ( inputPay * rate === prev && inputPay !== '' && prev !== '') {
                console.log(`previous BUY: ${prev} /// new: ${inputBuy}`)
                return prev;
            } else return inputPay / rate;
        });
    }, [inputPay, payCoin]);

    useEffect(() => {
        setInputPay((prev) => {
            const rate = getRate();
            if (inputBuy / rate === prev && inputBuy !== '' && prev !== '') {
                return prev;
            } else return inputBuy * rate;
              
        });
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
        <Header />
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
