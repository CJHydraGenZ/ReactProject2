const RootPath = 'http://localhost:3004'
const OnlineRoot = 'https://jsonplaceholder.typicode.com'
const Get = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${root ? OnlineRoot : RootPath}/${path}`)
            .then(response => response.json())
            .then(json => {
                resolve(json)

            }, (err) => {
                reject(err)
            })
    })
    return promise
}

const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false)
const getComment = () => Get('comments', true)

const API = {
    getNewsBlog,
    getComment
}

export default API
// posts ? _sort = id & _order = desc

// this.setState({
//     post: json
// })