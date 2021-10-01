import React from 'react'
import {connect} from "react-redux";
import {createPost, showError} from "../redux/actions";
import {alertBugaiov, setBugaiov} from "../lib/variablet";

class PostForm extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            title : ''
        }
    }

    submitHandler = (event)=>{
       event.preventDefault()


        const {title} =this.state
        if (!title.trim()){
            this.props.showError('поле не может пустым')
            return
        }

        const  newPost = {
            title,
            id :Date.now().toString()
        }

        this.props.createPost(newPost)

        this.setState({  title : ''})
        console.log(newPost)
    }

    changeInputHandler = (event)=>{
        this.setState((prev)=>{
            return {...prev,[event.target.name]:event.target.value}
        })
    }

    render() {
        return (<>
                <h3 onClick={()=>setBugaiov('XXXXXXXXXXXX')}>set XXXXXXXXX</h3>
                <h3 onClick={alertBugaiov}>show bugaiov</h3>
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input type="text" className="form-control" id="title" value={this.state.title} name='title' onChange={this.changeInputHandler} />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
            </>
        )
    }
}

const mapDispatchToProps = {
    createPost,
    showError
}

export default connect(null,mapDispatchToProps)(PostForm)