import React, { Component, Fragment } from 'react'
import './LifeCycleComp.css'
import { connect } from 'react-redux'
import { GlobalConsumer } from '../../../context/context'
// import { RootContent } from '../../Home/Home'
class LifeCycleComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
    console.log('constator');

  }

  static getDerivedStateFromProps(props, state) {
    console.log("this.getStateFromProps");
    return null;
  }


  componentDidMount() {
    console.log('componentDidMount');
    // setTimeout(() => {

    //   this.setState({
    //     count: 2
    //   })
    // }, 5000)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.group('shouldComponentUpdate');
    // console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('this state: ', this.state);

    console.groupEnd();
    if (nextState.count >= 4) {
      return false
    }
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null

  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');

  }
  componentWillUnmount() {

    console.log('componentwlllUnmount');

  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }


  render() {
    console.log('render');

    return (
      <Fragment>

        <p>title</p>

        <button className="btn" onClick={this.changeCount}>Component button {this.state.count}</button>
        <hr />
        <p>Total Older: {this.props.state.totalOlder}</p>
      </Fragment>


    )
  }
}
// const mapToProps = state => {
//   return {

//     older: state.totalOlder
//   }
// }

// export default connect(mapToProps)(LifeCycleComp)
export default GlobalConsumer(LifeCycleComp)