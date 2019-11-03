import ActionType from './globalActionType'


const globalState = {
    totalOlder: 0
}


//reduser memerlikan 2 parameter
const rootReduser = (state = globalState, action) => {
    if (action.type === ActionType.PLUS_OLDER) {
        return {
            ...state,
            totalOlder: state.totalOlder + 1
        }
    }
    if (action.type === ActionType.MINUS_OLDER) {

        let totalOlder = 0;
        if (state.totalOlder > 0) {

            totalOlder = state.totalOlder - 1

        }
        return {
            ...state,
            totalOlder: totalOlder
        }
    }
    return state
}


export default rootReduser;