import {SHOW_ERROR,HEDE_ERROR} from "./types";

const initialState = {
    error : false,
    payload : ''
}

export const errorReducer = (state = initialState , action)=>{
    switch (action.type) {
        case SHOW_ERROR :
            console.log(state)
            return {...state,error: true, payload: action.payload};
        case HEDE_ERROR :
            return {...state, error: false};
        default:return state
    }

    return state
}