import React, { Component, Fragment } from 'react';
// import Img from './12.png';
import Img2 from './124.jpg';
import img3 from './Portrait_-_Flame_Lord.png';
import './Product.css';
import CardProduct from './CardProduct/CardProduct';


class Product extends Component {
  state = {
    order: 4
  }

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue
    })
  }


  render() {
    return (
      <Fragment>
        <p>titile Product</p>

        <div className="header">
          <div className="logo">
            <img src={Img2} alt="" />
          </div>
          <div className="troley">
            <img src={img3} alt="" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    )
  }
}


export default Product;