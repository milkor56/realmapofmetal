const express = require('express');
const router = express.Router();

const {bandsdata} = require('../data')

const {    
    getBands,
    createBand,
    updateBand,
    deleteBand} = require('../controllers/bands')

router.route('/').get(getBands).post(createBand)
router.route('/:id').put(updateBand).delete(deleteBand)

module.exports = router