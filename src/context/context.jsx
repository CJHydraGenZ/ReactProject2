import React, { Component, createContext } from 'react'
import ActionType from './globalActionType'

//Provider
export const RootContent = createContext()
const Provider = RootContent.Provider

const GlobalProvider = (Anakkan) => {
    return (
        class ParentComp extends Component {
            state = {
                totalOlder: 5
            }
            dispatch = (action) => {
                if (action.type === ActionType.PLUS_OLDER)
                    return this.setState({
                        totalOlder: this.state.totalOlder + 1
                    })
                if (action.type === ActionType.MINUS_OLDER) {
                    return this.setState({
                        totalOlder: this.state.totalOlder - 1
                    })
                }
            }

            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>

                        <Anakkan {...this.props} />
                    </Provider >
                )
            }
        }

    )
}

export default GlobalProvider;

//Consumer

const Consumer = RootContent.Consumer;
export const GlobalConsumer = (Anak) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Anak {...this.props} {...value}></Anak>
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }


    )
}

