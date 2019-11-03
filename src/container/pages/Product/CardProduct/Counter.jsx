import React, { Component } from 'react'


import ActionType from '../../../../context/globalActionType'
import { GlobalConsumer } from '../../../../context/context';

class Counter extends Component {



    render() {
        console.log(this);

        return (
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({
                    type: ActionType.MINUS_OLDER
                })}>-</button>
                <input value={this.props.state.totalOlder} type="text" />
                <button className="plus" onClick={() => this.props.dispatch({
                    type: ActionType.PLUS_OLDER
                })}>+</button>
            </div>

        )
    }
}





export default GlobalConsumer(Counter);


