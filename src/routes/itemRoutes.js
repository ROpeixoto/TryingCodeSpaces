const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController');

// GET
router.get('/', itemController.getItems);

// POST
router.post('/', itemController.createItem);

// PUT
router.put('/:id', itemController.updateItem);

// PATCH
router.patch('/:id', itemController.patchItem);

// DELETE
router.delete('/:id', itemController.deleteItem);

module.exports = router;
