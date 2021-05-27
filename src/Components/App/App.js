import React from 'react';
import BuySell from '../BuySell/BuySell';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pay: 1000,
      buy: 1,
      payment: "None"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
