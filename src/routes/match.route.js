const express = require('express');
const router = express.Router();

const matchController = require('../controllers/match.controller');

// get all matches
router.get('/:tournament_id/match', matchController.getMatchList);

// get match by ID
router.get('/:tournament_id/match/:id',matchController.getMatchByID);

// update match
router.put('/:tournament_id/match/:id', matchController.updateMatch);

// update match timer
router.put('/:tournament_id/match/:id/timer', matchController.updateMatchTimer);

// update match point
router.put('/:tournament_id/match/:id/point', matchController.updateMatchPoint);

// delete match
router.delete('/:tournament_id/match/:id',matchController.deleteMatch);

module.exports = router;