var Player = require('../models/player');

_this = this;

exports.getPlayers = async function(query, page, limit) {
    var options = {
        page,
        limit
    }

    try {
        var players = await Player.paginate(query, options);
        return players;
    } catch (e) {
        throw Error('Unable to paginate Players ' + e.message);
    }
}

exports.createPlayer = async function(player) {
    var newPlayer = new Player({
        firstName: player.firstName,
        lastName: player.lastName,
        nickName: player.nickName,
        dateOfBirth: player.dateOfBirth,
        jerseyNumber: player.jerseyNumber,
        position: player.position
    });

    try {
        var savedPlayer = await newPlayer.save();
        return savedPlayer;
    } catch (e) {
        throw Error('Unable to create Player');
    }
}

exports.updatePlayer = async function(player) {
    var id = player.id;

    try {
        var oldPlayer = await Player.findById(id);
    } catch (e) {
        throw Error('Unable to find Player');
    }

    if (!oldPlayer) {
        return false;
    }

    console.log(oldPlayer);

    oldPlayer.firstName = player.firstName;
    oldPlayer.lastName = player.lastName;
    oldPlayer.nickName = player.nickName;
    oldPlayer.dateOfBirth = player.dateOfBirth;
    oldPlayer.jerseyNumber = player.jerseyNumber;
    oldPlayer.position = player.position;

    try {
        var savedPlayer = await oldPlayer.save();
        return savedPlayer;
    } catch (e) {
        throw Error('Unable to update Player');
    }
}

exports.deletePlayer = async function(id) {

    try {
        var deleted = await Player.remove({ _id: id });
        if (deleted.result.n === 0) {
            throw Error('Unable to delete Player');
        }
        return deleted;
    } catch (e) {
        throw Error('Unable to delete Player');
    }
}