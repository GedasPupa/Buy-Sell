import React from 'react';
import BuySell from '../BuySell/BuySell';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pay: null,
      buy: null,
      payment: null,
      rate: null,
      results: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
        const tarif = asArray.filter(coin => coin[0] === "BTC");
        const neededTarif = Object.entries(tarif[0][1]);
        const veryNeeded = neededTarif[0][1];
        // console.log(tarif[1])
        // const coin = Object.entries(asArray[0][0]);
         
        // console.log(asArray2);
        // const results = jsonResponse.Results.map(result => ({
        //   id: 0,  
        //   Mfr_ID: result.Mfr_ID,
        //   Mfr_Name: result.Mfr_Name            
        // }));
      this.setState({ results: asArray, rate: veryNeeded });
    }).catch(error => console.log(error.message));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
      />
    );
  };
}

export default App;
