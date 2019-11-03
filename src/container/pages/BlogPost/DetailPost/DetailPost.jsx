import React, { Component, Fragment } from 'react'
import './DetailPost.css'


class DetailPost extends Component {

    state = {
        post: {
            title: '',
            body: ''
        }
    }


    componentDidMount() {
        // console.log(this.props.match.params.postID);
        let postID = this.props.match.params.postID
        fetch(`http://localhost:3004/posts/${postID}`).then(res => res.json()).then(json => {

            // console.log(json)
            let post = json
            console.log(post);

            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        }

        )

    }
    render() {
        // console.log(this.props);

        return (
            <Fragment>
                <p className="titleDetail">{this.state.post.title}</p>

                <p className="bodyDetail">{this.state.post.body}</p>
            </Fragment>
        )
    }
}

export default DetailPost

