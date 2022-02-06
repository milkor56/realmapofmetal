// const express = require('express');
import express from 'express'
const members = express.Router();

import {    
    getMembers,
    createMember,
    updateMember,
    deleteMember}  from '../controllers/members.js'

members.route('/').get(getMembers).post(createMember)
members.route('/:id').put(updateMember).delete(deleteMember)

export {members}