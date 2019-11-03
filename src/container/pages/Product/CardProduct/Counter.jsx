import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {



    render() {
        console.log(this.props);

        return (
            <div className="counter">
                <button className="minus" onClick={this.props.Minus}>-</button>
                <input value={this.props.order} type="text" />
                <button className="plus" onClick={this.props.Plus}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOlder
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Plus: () => dispatch({ type: 'PLUS_OLDER' }),
        Minus: () => dispatch({ type: 'MINUS_OLDER' })
    }
}


//connect memiliki 2 parameter state dan dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

