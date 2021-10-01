import {CREATE_POST, FETCH_POST, SHOW_LOADER, HEDE_LOADER, SHOW_ERROR, HEDE_ERROR} from "./types";

export function createPost(post) {
    return {
        type : CREATE_POST,
        payload : post
    }
}
export function showError(text) {
    return {type: SHOW_ERROR,payload : text}
}
export function hideError() {
    return {type: HEDE_ERROR}
}

export function showLoader() {
    return {type: SHOW_LOADER}
}

export function fetchPost(post) {
    return async (dispatch) => {
        try {const response = await fetch('https://jsonplaceholder.typicode .com/posts?_limit=5')
            const json = await response.json()
            dispatch(showLoader())
            setTimeout(()=>{
                dispatch({
                    type: FETCH_POST,
                    payload: json
                })
                dispatch({type: HEDE_LOADER})
            },2000)
        }catch (e) {
            console.log(e)
            dispatch(showError("что то пошло нет так "))
        }
        
       
    }
}
