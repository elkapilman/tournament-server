const express = require('express');
const router = express.Router();

const competitorController = require('../controllers/competitor.controller');

// get all competitors
router.get('/:tournament_id/competitor', competitorController.getCompetitorList);

// get competitor by ID
router.get('/:tournament_id/competitor/:id',competitorController.getCompetitorByID);

// create new competitor
router.post('/:tournament_id/competitor', competitorController.createNewCompetitor);

// update competitor
router.put('/:tournament_id/competitor/:id', competitorController.updateCompetitor);

// delete competitor
router.delete('/:tournament_id/competitor/:id',competitorController.deleteCompetitor);

module.exports = router;