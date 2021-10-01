import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import React from "react";
import FetchPosts from "./components/FetchPosts";
import {useSelector} from "react-redux";
import Alert from './components/Alert'

function App() {
    const error = useSelector((state => state.error.error))
    console.log(error)

    return (
        <>
            {error && <Alert></Alert> }
            <div className="container pt-3">
                <div className="row">
                    <div className="col">
                        <PostForm/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Синхроные Посты </h2>
                        <Posts></Posts>
                    </div>
                    <div className="col">
                        <h2>Асинхронные Посты </h2>
                        <FetchPosts></FetchPosts>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
