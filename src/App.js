import React, {Component} from 'react';
import ImageLoader from 'react-load-image';
import './App.css';
import spinner from './spinner.svg';

const API = {
  "data": {
    "items": [
      {
        "name": "Apple Pen",
        "price": 2.999,
        "quantity": 2,
        "availability": 5,
        "img": "https://metrouk2.files.wordpress.com/2016/09/capture91.png?w=748&h=419&crop=1"
      },
      {
        "name": "Pineapple Pen",
        "price": 5.02,
        "quantity": 3,
        "availability": 3,
        "img": "http://as01.epimg.net/epik/imagenes/2016/09/27/portada/1474966761_962486_1474966872_noticia_normal.jpg"
      },
      {
        "name": "Pen Pineaple Apple Pen",
        "price": 6.78,
        "quantity": 1,
        "availability": 4,
        "img": "https://static.vix.com/es/sites/default/files/styles/large/public/r/ryuk-death-note.png?itok=1MS4ekSf"
      }
    ]
  }
}

const Preloader = () => (<img alt="" src={spinner}/>);

class App extends Component {

  getAPI = () => {
    return API;
  }

  render() {

    const {data} = this.getAPI();

    console.log(`LOG: data`, JSON.stringify(data, null, 3));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cart</h1>
        </header>
        <div className="App-intro">
          {data.items.length && data.items.map(item =>
            <span className="item" key={item.name}>
              <div calssName="item-img">
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
