import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import {hideError} from "../redux/actions";

export default function Alert() {
    let dispatch = useDispatch()
    let error = useSelector((state)=>state.error.payload)

    function hideErrorHandler() {
        dispatch(hideError())
    }

    return (
        <div className="alert alert-danger" role="alert">
            {error}<span onClick={hideErrorHandler}> X</span>
        </div>
    )
}