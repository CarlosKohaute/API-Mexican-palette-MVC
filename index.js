const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const palettes = [
  {
    id: 1,
    flavor: 'acai com leite condensado',
    description: 'Paleta de acai com leite condensado',
    photo: './assets/images/acai-com-leite-condensado.png',
    price: 10.0,
  },
  {
    id: 2,
    flavor: 'Banana com Nutella',
    description: 'Paleta de banana com nutella',
    photo: './assets/images/banana-com-nutella.png',
    price: 10.0,
  },
  {
    id: 3,
    flavor: 'Chocolate Belga com Brigadeiro',
    description: 'Paleta de chocolate belga com brigadeiro',
    photo: './assets/images/chocolate-belga-com-brigadeiro.png',
    price: 10.0,
  },
  {
    id: 4,
    flavor: 'Chocolate Belga',
    description: 'Paleta de chocolate belga',
    photo: './assets/images/chocolate-belga.png',
    price: 10.0,
  }
];

app.get('/palettes/find-palettes', (req, res) => {
  res.send(palettes);
});

app.get('/palettes/find-palettes/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenPalette = palettes.find((palette) => palette.id == idParam);
  res.send(chosenPalette);
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
