import React, { Component, useState } from 'react'
import './Hook.css'
// class Hook extends Component {
//     state = {
//         count: 0
//     }


//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render() {
//         return (
//             <div className='p-hook'>
//                 <p>Nilai Saya saat ini Adalah : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hook = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='p-hook'>
            <p>Nilai Saya saat ini Adalah : {count}</p>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hook