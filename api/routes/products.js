const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET to /products',
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST to /products',
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    if (id === 'special') {
        res.status(200).json({
            message: 'You asked for special id',
            id: id,
        })
    } else {
        res.status(200).json({
            message: 'You asked for regular id',
            id: id,
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product',
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product deleted',
    })
})

module.exports = router;