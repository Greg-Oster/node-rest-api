const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET to /orders',
    })
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET to /orders/id',
        id: req.params.orderId,
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling GET to /orders',
    })
})

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET to /orders',
    })
})

module.exports = router;