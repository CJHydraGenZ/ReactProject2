import {OnlineRoot,RootPath} from './Config'

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${root ? OnlineRoot : RootPath}/${path}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }

            })
            .then(res => {
                resolve(res)

            }, (err) => {
                reject(err)
            })
    })
    return promise
}


export default Post