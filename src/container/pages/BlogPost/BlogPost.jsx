import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../../component/Post/Post';
import API from '../../../services';

class BlogPost extends Component {
    state = {
        post: [],
        formlogpost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comment: []
    }

    getPostApi = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })

        API.getComment().then(result => {
            this.setState({
                comment: result
            })
        })
    }

    postDataAPI = () => {
        API.postNewsBlog(this.state.formlogpost).then(res => {
            this.getPostApi()
            console.log(res);
            this.setState({

                formlogpost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })

        })

    }
    putDataToApi = () => {
        API.updateNewsBlog(this.state.formlogpost, this.state.formlogpost.id).then(res => {
            this.getPostApi()
            this.setState({
                isUpdate: false,
                formlogpost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })

    }
    handleRemove = (data) => {
        API.deleteNewsBlog(data).then(res => {
            this.getPostApi();
        })

    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formlogpost: data,
            isUpdate: true
        })


    }

    handleformChange = (event) => {
        // console.log('form onChange', event.target.value);
        let formBlogPostNew = { ...this.state.formlogpost };
        let timeTamp = new Date().getTime()

        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timeTamp
        }
        // console.log(event.target.name);

        formBlogPostNew[event.target.name] = event.target.value

        let title = event.target.value
        this.setState({
            formlogpost: formBlogPostNew
        })


    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToApi()
        } else {

            this.postDataAPI();
        }

    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
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
                    <input type="text" value={this.state.formlogpost.title} name="title" placeholder="addTitle" onChange={this.handleformChange} />
                    <label htmlFor="body" className="bc">Blog Content</label>
                    <textarea name="body" id="body-content" cols="30" rows="10" value={this.state.formlogpost.body} placeholder="Masukan Blog content" onChange={this.handleformChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {
                    this.state.comment.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}></Post>

                    })
                }


            </Fragment>
        )

    }
}

export default BlogPost;