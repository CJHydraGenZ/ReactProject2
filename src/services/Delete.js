
import {
    OnlineRoot,
    RootPath
} from './Config'
const Delete = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${root ? OnlineRoot : RootPath}/${path}`,{
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(json => {
                resolve(json)

            }, (err) => {
                reject(err)
            })
    })
    return promise
}

export default Delete