const fetch = require('node-fetch')
const express = require('express');

const app = express();

global.photos = []

const getPhotosFromFlckr = async () => {
    const reqId = '1'
    const pageNumber = 1
    const response = await fetch(`https://api.flickr.com/v2/media/search?reqId=${reqId}&orderBy=interestingness&query=flicker&pageNumber=${pageNumber}&pageSize=50&format=json&nojsoncallback=1`)
    const data = await response.json()

    global.photos = [...global.photos, ...data]

    return data
}

app.get('/photos', async (req, res) => {
    const data = await getPhotosFromFlckr()
    res.json(data)
})

app.get('/photo/:id', (req, res) => {
    const photo = global.photos.find(photo => photo.id === req.params.id)
    res.json(photo)
})

const server = app.listen(process.env.PORT || 8888, () => {
    const { address, port } = server.address()
    console.log(`Environment = ${process.env.NODE_ENV}`)
    console.log(`Running an Express server at http://${address}:${port}`)
})
