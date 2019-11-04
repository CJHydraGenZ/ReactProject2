import {
    OnlineRoot,
    RootPath
} from './Config'
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

export default Get