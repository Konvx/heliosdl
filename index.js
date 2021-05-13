const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/:file', (req, res) => {
    res.sendFile(dirname + '/' + req.params.file)
})

app.listen(port, () => console.log(`App is listening at port ${port}`))
