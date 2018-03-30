import React, {Component} from 'react';
import ImageLoader from 'react-load-image';
import spinner from '../spinner.svg';

const Preloader = () => (<img alt="Spinner Loader" src={spinner}/>);

class CartItem extends Component {

  render(){
    const {item} = this.props;
    return (
      <span className="item">
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
    )
  }

}

export default CartItem;