import * as actionType from './actions'
const initialState = {
    count : 0
}


const reducer = (state = initialState , action)=>{
    switch(action.type) {
        case actionType.ADD :
            return {
                ...state,
                counter : state.counter + 1
            }
        case actionType.SUBTRACT :
            return {
                ...state,
                counter : state.counter - 1
            }
        default :
        return state
    }
}

export default reducer;