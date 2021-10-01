import {SHOW_LOADER,HEDE_LOADER} from "./types";

const initialState = {
    loading : false
}

export const appReducer = (state = initialState , action)=>{
    switch (action.type) {
        case SHOW_LOADER :
            return {...state,loading : true}
        case HEDE_LOADER :
            return {...state,loading : false}
        default:return state
    }

    return state
}