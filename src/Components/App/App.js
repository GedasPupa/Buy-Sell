import React from 'react';
import BuySell from '../BuySell/BuySell';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputPay: '',
      inputBuy: '',
      pay: "EUR",
      buy: "BTC",
      payment: null,
      results: [["BTC", ""], ["EUR", ""]],
      resultsObj: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getRate = this.getRate.bind(this);
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  };

  componentDidMount() {   
    const url = "https://api.coingate.com/v2/rates?format=json";
    fetch(url)
    .then(this.handleErrors)
    .then(jsonResponse => {
      const results = jsonResponse.trader.buy;
      const asArray = Object.entries(results);
      this.setState({ results: asArray, resultsObj: results });
    }).catch(error => console.log(error.message));
  }

  getRate() {
    const asArray = this.state.results;
    const rates = asArray.filter(coin => coin[0] === this.state.buy);
    const neededTarif = Object.entries(rates[0][1]);
    const veryNeeded = neededTarif.filter(trf => trf[0] === this.state.pay);
    const rate = veryNeeded[0][1];
    return rate;
    // from object:
    // const asObject = this.state.resultsObj;
    // const filteredByKey = Object.fromEntries(Object.entries(asObject).filter(([key, value]) => key === this.state.buy) );
    // .....
  }

  // componentDidUpdate() {
  //   console.log(this.getRate());
  // }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    if (name === "inputPay") {
      this.setState({
        inputBuy: value / this.getRate()
      })
    } else if (name === "inputBuy") {
      this.setState({
        inputPay: value * this.getRate()
      })
    } else {
      this.setState({
        inputPay: '',
        inputBuy: ''
      })
    }
  }

  onSubmit(event) {
    event.preventDefault();
    alert('Sveikiname įsigijus BTC!');
  }
  
  render() {
    return(
      <BuySell 
        handleChange={this.handleInputChange}
        onSubmit={this.onSubmit}
        payValue={this.state.inputPay}
        buyValue={this.state.inputBuy}
        results={this.state.results}
      />
    );
  };
}

export default App;
