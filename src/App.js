import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Bitcoin from './Components/Bitcoin'
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    bitCoinPrice: 0,
    updateTime: '',
    bpiDisclaimer: ''
  }
  
  componentDidMount() {
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
          this.setState({
            bitCoinPrice: response.data.bpi.USD.rate_float.toFixed(2),
            updateTime: response.data.time.updated,
            bpiDisclaimer: response.data.disclaimer
          });
      });
      
    axios.get("https://api.coindesk.com/v1/bpi/historical/close.json")
      .then(response => {
          console.log(response)
      });
  }
  
  render() {
    return (
        <div className="app">
          <Navbar />
          <div className="container-fluid">
            <Bitcoin 
              price={this.state.bitCoinPrice}
              time={this.state.updateTime}
              disclaimer={this.state.bpiDisclaimer}/>
          </div>
        </div>  
    );
  };
};

export default App;
