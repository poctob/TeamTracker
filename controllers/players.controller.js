var PlayerService = require('../services/player.service');

_this = this;

exports.getPlayers = async function(req, res, next) {
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;

    try {
        var players = await PlayerService.getPlayers({}, page, limit);
        return res.status(200).json({ status: 200, data: players, message: 'Received Players' });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createPlayer = async function(req, res, next) {
    var newPlayer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nickName: req.body.nickName,
        dateOfBirth: req.body.dateOfBirth,
        jerseyNumber: req.body.jerseyNumber,
        position: req.body.position
    };

    try {
        var player = await PlayerService.createPlayer(newPlayer);
        return res.status(201).json({ status: 201, data: player, message: 'Created Player' });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updatePlayer = async function(req, res, next) {

    if (!req.body._id) {

        return res.status(400).json({ status: 400, message: 'Id is required' });
    }

    var id = req.body._id;
    console.log(req.body);

    var player = {
        id,
        firstName: req.body.firstName ? req.body.firstName : null,
        lastName: req.body.lastName ? req.body.lastName : null,
        nickName: req.body.nickName ? req.body.nickName : null,
        dateOfBirth: req.body.dateOfBirth ? req.body.dateOfBirth : null,
        jerseyNumber: req.body.jerseyNumber ? req.body.jerseyNumber : null,
        position: req.body.position ? req.body.position : null
    };

    try {
        var updatedPlayer = await PlayerService.updatePlayer(player);
        return res.status(200).json({ status: 200, data: updatedPlayer, message: 'Updated Player' });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deletedPlayer = async function(req, res, next) {

    if (!req.body._id) {

        return res.status(400).json({ status: 400, message: 'Id is required' });
    }

    var id = req.body._id;

    try {
        var deleted = await PlayerService.deletePlayer(id);
        return res.status(204).json({ status: 204, data: deleted, message: 'Deleted Player' });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}