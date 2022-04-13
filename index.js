const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

const paletas = [
  {
    id: 1,
    sabor: 'Creme',
    descricao: 'Paleta de creme',
    foto: 'https://thumbs.dreamstime.com/b/paleta-mexicana-59806469.jpg',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Paleta de banana com nutella',
    foto: 'https://i.pinimg.com/originals/da/4f/b4/da4fb4822a226b92185d5ee254bdad37.jpg',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao: 'Paleta de chocolate belga',
    foto: 'https://s3-sa-east-1.amazonaws.com/loja2/e0721e51a9e93cd0d8cf08d8e5a7a5eb.jpg',
    preco: 10.0,
  },
];

app.get('/', function (req, res) {
  res.send('Hello word');
});

app.get('/paletas/find-paletas', (req, res) => {
  res.send(paletas);
});

app.get('/paletas/find-paleta/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
  res.send(chosenPaleta);
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
