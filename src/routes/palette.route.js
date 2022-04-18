const route = require('express').Router();
const { Router } = require('express');
const controllerPalettes = require('../controllers/palette.controller');

route.get('/find-palettes', controllerPalettes.findAllPalettesController);
route.get('/find-palettes/:id', controllerPalettes.findByIdPaletteController);
route.post('/create', controllerPalettes.createPaletteController);
route.put('/update/:id', controllerPalettes.updatePaletteController);
route.delete('/delete/:id', controllerPalettes.deletePaletteController);

module.exports = route;
