const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/um', function (req, res) {
  res.send('Boa Noite!')
})

app.get('/soma/:a/:b', function (req, res) {
    const r = parseFloat(req.params.a);
    const s = parseFloat(req.params.b);

    res.send(r+s+"") 
  })

  app.get('/sub', function (req, res) {
    const r = parseFloat(req.body.a);
    const s = parseFloat(req.body.b);

    res.send(r-s+"") 
  })

app.listen(PORT, function (){
    console.log(`Rodando ${PORT}....`)
})