import React from 'react';
import BuySell from '../BuySell/BuySell';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pay: 1000,
      buy: 1,
      payment: "None",
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
   
    // const url2 = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json";
    const url2 = "https://api.coingate.com/v2/rates?format=json";
 
    fetch(url2)
    .then(this.handleErrors)
    .then(jsonResponse => {
        const results = jsonResponse.trader.buy;
        // const results = jsonResponse.Results.map(result => ({
        //   id: 0,  
        //   Mfr_ID: result.Mfr_ID,
        //   Mfr_Name: result.Mfr_Name            
        // }));
      this.setState({ results: results });
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
