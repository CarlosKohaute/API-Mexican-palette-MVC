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
  },
];

const findAllPalettesService = () => {
  return palettes;
};
const findByIdPaletteService = (idParam) => {
   return palettes.find((palette) => palette.id == idParam);
};
module.exports = {
  findAllPalettesService,
  findByIdPaletteService
};
