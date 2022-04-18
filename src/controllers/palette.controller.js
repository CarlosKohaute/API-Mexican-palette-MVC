const palettesService = require('../services/palette.service');

const findAllPalettesController = (req, res) => {
  const palettes = palettesService.findAllPalettesService();
  res.send(palettes);
};

const findByIdPaletteController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenPalette = palettesService.findByIdPaletteService(idParam);
  res.send(chosenPalette);
};

module.exports= {
  findAllPalettesController,
  findByIdPaletteController,
};
