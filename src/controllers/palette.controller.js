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
const createPaletteController = (req, res) => {
  const palette = req.body;
  const newPalette = palettesService.createPaletteService(palette);
  res.send(newPalette);
};

const updatePaletteController = (req, res) => {
  const idParam = Number(req.params.id);
  const paletteEdit = req.body;
  const updatedPalette = palettesService.updatePaletteService(
    idParam,
    paletteEdit,
  );
  res.sed(updatedPalette);
};

const deletePaletteController = (req, res) => {
  const idParam = req.params.id;
  palettesService.deletePaletteService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};
module.exports = {
  findAllPalettesController,
  findByIdPaletteController,
  createPaletteController,
  updatePaletteController,
  deletePaletteController,
};
