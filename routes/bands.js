// const express = require('express');
import express from 'express'
const bands = express.Router();

import {    
    getBands,
    createBand,
    updateBand,
    deleteBand}  from '../controllers/bands.js'

bands.route('/').get(getBands).post(createBand)
bands.route('/:id').put(updateBand).delete(deleteBand)

export { bands }