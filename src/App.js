import React, {Component} from 'react';
import './App.css';
import {fetchAPI} from './services/fetchDataFromAPI';
import CartItem from './components/CartItem';

class App extends Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const {data} = await fetchAPI();
    this.setState({
      data
    });
  }

  render() {

    const {data} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cart</h1>
        </header>
        <div className="App-intro">
          {data && data.items && data.items.length && data.items.map(item =>
            <CartItem
              key={item.name}
              item={item}/>
          )}
        </div>
      </div>
    );
  }


}

export default App;
