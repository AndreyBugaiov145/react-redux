import React from 'react'
import Post from "./Post";
import {useDispatch,useSelector} from "react-redux";
import {fetchPost} from "../redux/actions";
import {setBugaiov , alertBugaiov} from "../lib/variablet"


export default function () {
    let dispatch = useDispatch()
    const posts = useSelector((state)=>{
        return state.posts.fetchPosts
    })
    const loading = useSelector((state)=>{
        return state.app.loading
    })
    if (loading){
        return <p>loading ....</p>
    }

    if (!posts.length){

        return (<>
            <h3 onClick={()=>setBugaiov('BBBB')}>set BBBBB</h3>
            <h3 onClick={alertBugaiov}>show bugaiov</h3>
            <button className="btn btn-primary" onClick={()=>dispatch(fetchPost())}>Загрузить</button>
            </>)
    }


    return  posts.map((post)=>{
        return <>
            <Post post={post} key={post.id}></Post>
        </>
    })
}