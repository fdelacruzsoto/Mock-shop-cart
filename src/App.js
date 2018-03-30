import React, {Component} from 'react';
import ImageLoader from 'react-load-image';
import './App.css';
import spinner from './spinner.svg';
import {fetchAPI} from './services/fetchDataFromAPI';

const Preloader = () => (<img alt="" src={spinner}/>);

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
            <span className="item" key={item.name}>
              <div className="item-img">
                <ImageLoader src={item.img}>
                  <img alt=""/>
                  <div>Error!</div>
                  <Preloader/>
                </ImageLoader>
              </div>
              <div>
                {item.name}
              </div>
              <div>
              {item.price}
              </div>
            </span>
          )}
        </div>
      </div>
    );
  }


}

export default App;
