const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    value: 0,
    age: 17
}
//... copy es6
//reduser
const rootReduser = (state = initialState, action) => {
    console.log(action);
    // if (action.type === 'ADD_AGE') {
    //     return {
    //         ...state,
    //         age: state.age + 1
    //     }
    // }
    // if (action.type === 'CHANGE_VALUE') {
    //     return {
    //         ...state,
    //         value: state.value + action.newValue
    //     }
    // }

    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
            case 'CHANGE_VALUE':
                return {
                    ...state,
                    value: state.value + action.newValue
                }
                default:
                    return state
    }
}

//store
const store = createStore(rootReduser)

console.log(store.getState());
//Subscription
store.subscribe(() => {
    console.log('store change', store.getState());

})
//Dispatching Action
store.dispatch({
    type: 'ADD_AGE'
})
store.dispatch({
    type: 'CHANGE_VALUE',
    newValue: 12
})

console.log(store.getState());