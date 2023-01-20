const express = require('express');
const router = express.Router();

const clubController = require('../controllers/club.controller');

// get all clubs
router.get('/:tournament_id/club', clubController.getClubList);

// get club by ID
router.get('/:tournament_id/club/:id',clubController.getClubByID);

// create new club
router.post('/:tournament_id/club', clubController.createNewClub);

// update club
router.put('/:tournament_id/club/:id', clubController.updateClub);

// delete club
router.delete('/:tournament_id/club/:id',clubController.deleteClub);

module.exports = router;