import React, { Component } from 'react';
import Img from '../12.png'
import Counter from './Counter';



class CardProduct extends Component {


    render() {
        return (

            <div className="card">
                <div className="img-thumb-prod">
                    <img src={Img} alt="" />
                </div>
                <p className="product-title">Daging ayam</p>
                <p className="product-price">Rp.20000</p>
                <Counter ></Counter>

            </div>

        )
    }
}


export default CardProduct;