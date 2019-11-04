import Get from './Get'
import Post from './Post'
import Put from './Put'
import Delete from './Delete'



//Post
const postNewsBlog = (data) => Post('posts', false, data)
//Put
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data)


//Get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false)
const getComment = () => Get('comments', true)
//Delete
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false)

const API = {
    postNewsBlog,
    updateNewsBlog,
    getNewsBlog,
    getComment,
    deleteNewsBlog


}

export default API
// posts ? _sort = id & _order = desc

// this.setState({
//     post: json
// })