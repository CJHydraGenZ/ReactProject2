import Get from './Get'
import Post from './Post'





//Post
const postNewsBlog = (data) => Post('posts', false, data)


//Get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false)
const getComment = () => Get('comments', true)

const API = {
    postNewsBlog,
    getNewsBlog,
    getComment
}

export default API
// posts ? _sort = id & _order = desc

// this.setState({
//     post: json
// })