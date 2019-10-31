import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';

class BlogPost extends Component {
    state = {
        post: [],
        formlogpost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }

    getPostApi = () => {
        fetch('http://localhost:3004/posts?_sort=id&_order=desc')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    post: json
                })
            })
    }

    postDataAPI = () => {
        fetch('http://localhost:3004/posts', {
            method: 'POST',
            body: JSON.stringify(this.state.formlogpost),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
            .then(res => {
                this.getPostApi()
                console.log(res);

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
    handleformChange = (event) => {
        // console.log('form onChange', event.target.value);
        let formBlogPostNew = { ...this.state.formlogpost };
        let timeTamp = new Date().getTime()
        formBlogPostNew['id'] = timeTamp

        // console.log(event.target.name);

        formBlogPostNew[event.target.name] = event.target.value

        let title = event.target.value
        this.setState({
            formlogpost: formBlogPostNew
        })


    }

    handleSubmit = () => {
        this.postDataAPI();

    }

    componentDidMount() {
        this.getPostApi();
    }


    render() {
        return (
            <Fragment>

                <p className="blog">Blog Posy</p>
                <div className="form-app-post">
                    <label htmlFor="title" className="ttl">Titile</label>
                    <input type="text" name="title" placeholder="addTitle" onChange={this.handleformChange} />
                    <label htmlFor="body" className="bc">Blog Content</label>
                    <textarea name="body" id="body-content" cols="30" rows="10" placeholder="Masukan Blog content" onChange={this.handleformChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
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