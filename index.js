const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const palettes = [
  {
    id: 1,
    sabor: 'acai com leite condensado',
    descricao: 'Paleta de acai com leite condensado',
    foto: '/assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Paleta de banana com nutella',
    foto: '/assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga com Brigadeiro',
    descricao: 'Paleta de chocolate belga com brigadeiro',
    foto: '/assets/images/chocolate-belga-com-brigadeiro.png',
    preco: 10.0,
  },
];

app.get('/palettes/find-palettes', (req, res) => {
  res.send(palettes);
});

app.get('/palettes/find-palettes/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenPalette = palettes.find((palette) => palette.id === idParam);
  res.send(chosenPalette);
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
