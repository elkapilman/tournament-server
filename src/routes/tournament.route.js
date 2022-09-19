const express = require('express');
const router = express.Router();

const tournamentController = require('../controllers/tournament.controller');

// get all tournaments
router.get('/', tournamentController.getTournamentList);

// get tournament by ID
router.get('/:id',tournamentController.getTournamentByID);

// create new tournament
router.post('/', tournamentController.createNewTournament);

// update tournament
router.put('/:id', tournamentController.updateTournament);

// delete tournament
router.delete('/:id',tournamentController.deleteTournament);

module.exports = router;