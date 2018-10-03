const fetch = require('node-fetch')
const express = require('express');

const app = express();

const getPhotosFromFlckr = async () => {
    const reqId = '1'
    const response = await fetch(`https://api.flickr.com/v2/media/search?reqId=${reqId}&orderBy=interestingness&query=flicker&pageNumber=3&pageSize=50&format=json&nojsoncallback=1`)

    return response.json()
}

app.get('/photos', (req, res) => {
    res.json(getPhotosFromFlckr())
})

const server = app.listen(process.env.PORT || 8888, () => {
    const { address, port } = server.address()
    console.log(`Environment = ${process.env.NODE_ENV}`)
    console.log(`Running an Express server at http://${address}:${port}`)
})
