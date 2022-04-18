const route = require('express').Router();
const controllerPalettes = require('../controllers/palette.controller');

route.get('/find-palettes', controllerPalettes.findAllPalettesController);
route.get('/find-palettes/:id', controllerPalettes.findByIdPaletteController);

module.exports = route;
