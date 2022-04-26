const express = require('express')
const app =express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const https = require('https')
const port = 3000
var path = require('path')
app.use(bodyParser.urlencoded({extended: false}))
const {Router} = require('express')

app.get('/', function(req, res) {
    res.sendFile(path.resolve('gikigayo.html'))
})
app.use('/css', express.static(__dirname+"/css"))
app.use('/img', express.static(__dirname+"/img"))



app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
)