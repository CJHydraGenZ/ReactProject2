import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';

class BlogPost extends Component {
    state = {
        post: []
    }

    getPostApi = () => {
        fetch('http://localhost:3004/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    post: json
                })
            })
    }

    handleRemove = (data) => {
        fetch(`http://localhost:3004/posts/${data}`, {
            method: 'DELETE'
        })
            .then((res) => {
                this.getPostApi();
            }
            )
    }

    componentDidMount() {
        this.getPostApi();
    }


    render() {
        return (
            <Fragment>

                <p className="blog">Blog Posy</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}></Post>

                    })
                }


            </Fragment>
        )

    }
}

export default BlogPost;