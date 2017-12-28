var express = require('express');

var router = express.Router();

var PlayerController = require('../../controllers/players.controller');

router.get('/', PlayerController.getPlayers);
router.post('/', PlayerController.createPlayer);
router.put('/', PlayerController.updatePlayer);
router.delete('/', PlayerController.deletedPlayer);

module.exports = router;