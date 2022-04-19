const palettesService = require('../services/palette.service');

const findAllPalettesController = (req, res) => {
  const palettes = palettesService.findAllPalettesService();

  if (palettes.length == 0) {
    return res.status(404).send({ message: 'Não existe paleta cadastrada!' });
  }
  res.send(palettes);
};

const findByIdPaletteController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const chosenPalette = palettesService.findByIdPaletteService(idParam);

  if (!chosenPalette) {
    return res.status(404).send({ message: 'Paleta não encontrada!!' });
  }

  res.send(chosenPalette);
};

const createPaletteController = (req, res) => {
  const palette = req.body;

  if (
    !palette ||
    !palette.flavor ||
    !palette.price ||
    !palette.photo ||
    !palette.description
  ) {
    return res
      .status(400)
      .send({ message: ' Envie todos os campos preenchidos!' });
  }
  const newPalette = palettesService.createPaletteService(palette);
  res.status(201).send(newPalette);
};

const updatePaletteController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
  const paletteEdit = req.body;
  if (
    !paletteEdit ||
    !paletteEdit.flavor ||
    !paletteEdit.price ||
    !paletteEdit.photo ||
    !paletteEdit.description
  ) {
    return res
      .status(400)
      .send({ message: ' Envie todos os campos preenchidos!' });
  }
  const updatedPalette = palettesService.updatePaletteService(
    idParam,
    paletteEdit,
  );
  res.send(updatedPalette);
};

const deletePaletteController = (req, res) => {
  const idParam = Number (req.params.id);
  if (!idParam) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
 const  chosenPalette = palettesService.deletePaletteService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};
module.exports = {
  findAllPalettesController,
  findByIdPaletteController,
  createPaletteController,
  updatePaletteController,
  deletePaletteController,
};
