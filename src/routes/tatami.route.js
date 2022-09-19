const express = require('express');
const router = express.Router();

const tatamiController = require('../controllers/tatami.controller');

// get all tatamis
router.get('/:tournament_id/tatami', tatamiController.getTatamiList);

// get tatami by ID
router.get('/:tournament_id/tatami/:id',tatamiController.getTatamiByID);

// create new tatami
router.post('/:tournament_id/tatami', tatamiController.createNewTatami);

// update tatami
router.put('/:tournament_id/tatami/:id', tatamiController.updateTatami);

// delete tatami
router.delete('/:tournament_id/tatami/:id',tatamiController.deleteTatami);

module.exports = router;