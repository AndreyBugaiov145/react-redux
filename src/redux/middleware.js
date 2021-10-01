import {CREATE_POST} from "./types";
import {showError} from "./actions";

const spam = ['php' , 'fuck']

export function spamWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            console.log('my middle',action)
            if (action.type == CREATE_POST){
                console.log('goooo middle')
                const found = spam.filter(w=>{
                  return   action.payload.title.includes(w)
                })
                console.log('found',found)
                if (found.length){
                    return dispatch(showError('это спам'))
                }
            }
            return next(action)
        }
    }
}