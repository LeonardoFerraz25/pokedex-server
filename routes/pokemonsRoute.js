const express = require('express');

const pokemonsController = require('../controllers/pokemosController');

const router = express.Router();

router.get('/', pokemonsController.getAll);
router.get('/:id', pokemonsController.getById);

router.post('/', pokemonsController.create);

router.delete('/dell/:id', pokemonsController.remove);

module.exports = router;