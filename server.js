const express = require('express')
const app = express();

app.listen(3000, () => console.log("kuuntelen"));

app.use(express.static("public"));
app.use(express.json({limit: '1mb'}));

const paikat = [
  {
    "paikka": "Helsinki",
    "arvostelu": "Kivaa oli",
    "longitude": "24.895381999999998",
    "latitude": "60.1961714",
  },
  {
    "paikka": "Levi",
    "arvostelu": "ei niin kivaa ollut",
    "longitude": "24.8082",
    "latitude": "67.8040"
  }
]

app.get('/api/paikat', function(request, response) {
  response.send(paikat);
})

app.post('/api/arvostelu', function(request, response){
  console.log("käyttäjän arvostelu");
  console.log(request.body);
  paikat.push(request.body);
  response.send(200);
})
