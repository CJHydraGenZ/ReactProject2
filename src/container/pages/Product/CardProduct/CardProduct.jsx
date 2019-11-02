import React, { Component } from 'react';
import Img from '../12.png'



class CardProduct extends Component {
    state = {
        order: 1,
        harga: 2000
    }


    hendleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    hendlePlus = () => {
        this.setState({
            order: this.state.order + 1,
            harga: this.state.harga += this.state.harga
        }, () => {
            this.hendleCounterChange(this.state.order)
        })
        console.log(this);


    }
    hendleMinus = () => {

        if (this.state.order > 0) {

            this.setState({
                order: this.state.order - 1,
                harga: this.state.harga - this.state.harga

            }, () => {
                this.hendleCounterChange(this.state.order)
            })
            console.log(this);

        }

    }

    render() {
        return (

            <div className="card">
                <div className="img-thumb-prod">
                    <img src={Img} alt="" />
                </div>
                <p className="product-title">Daging ayam</p>
                <p className="product-price">Rp.{this.state.harga}</p>
                <div className="counter">
                    <button className="minus" onClick={this.hendleMinus}>-</button>
                    <input value={this.state.order} type="text" />
                    <button className="plus" onClick={this.hendlePlus}>+</button>
                </div>
            </div>

        )
    }
}


export default CardProduct;