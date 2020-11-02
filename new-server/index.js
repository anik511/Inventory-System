var express = require('express')
var cors = require('cors')
var app = express()

const data = require('./data.json')

app.use(cors())

app.get('/items', function (req, res, next) {
  res.send(data)
})

app.get('/item/:id', function (req, res, next) {
  var item = data.find(item => item.id == req.params.id )
  res.send({ ...item, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised i" })
})

app.get('/search/:keyword?', function (req, res, next) {
  if(req.params.keyword){
    var results = data.filter(item => item.title.toLowerCase().indexOf(req.params.keyword.toLowerCase()) !== -1 )
    res.send(results)
  }
  res.send(data)
})

app.listen(3000, function () {
  console.log('Web Server listening on port 3000')
})
