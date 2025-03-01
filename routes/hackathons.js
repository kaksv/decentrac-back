const express = require('express');
const router = express.Router();
const {getHackathons, getHackathon, createHackathon, updateHackathon, deleteHackathon} = require('../controllers/hackathon.controller.js');


//create a hackathon
router.post('/', createHackathon);

// Get all hackathons
router.get('/', getHackathons);

// Get a single hackathon by ID
router.get('/:id', getHackathon);

// update a hackathon
router.put('/:id', updateHackathon);

// delete hackathon
router.delete('/:id', deleteHackathon);

module.exports = router;