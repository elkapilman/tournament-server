const express = require('express');
const router = express.Router();

const refereeController = require('../controllers/referee.controller');

// get all referees
router.get('/:tournament_id/referee', refereeController.getRefereeList);

// get referee by ID
router.get('/:tournament_id/referee/:id',refereeController.getRefereeByID);

// create new referee
router.post('/:tournament_id/referee', refereeController.createNewReferee);

// update referee
router.put('/:tournament_id/referee/:id', refereeController.updateReferee);

// delete referee
router.delete('/:tournament_id/referee/:id',refereeController.deleteReferee);

module.exports = router;