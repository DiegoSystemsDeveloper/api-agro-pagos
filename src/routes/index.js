const express = require('express');
const router = express.Router();
const {
    producto
} = require('../controllers/index.controllers');

//appoinment routes
router.get('/productos', producto.getProducto);
router.post('/productos', producto.createProducto);
router.delete('/producto/:id', producto.deleteProducto);

module.exports = router;