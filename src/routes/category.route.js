const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category.controller');

// get all categorys
router.get('/:tournament_id/category', categoryController.getCategoryList);

// get category by ID
router.get('/:tournament_id/category/:id',categoryController.getCategoryByID);

// create new category
router.post('/:tournament_id/category', categoryController.createNewCategory);

// update category
router.put('/:tournament_id/category/:id', categoryController.updateCategory);

// delete category
router.delete('/:tournament_id/category/:id',categoryController.deleteCategory);

module.exports = router;