const Hackathon = require('../models/Hackathon.js');


const getHackathons = async (req, res) => {
    try {
            const hackathons = await Hackathon.find(req.body);
            res.status(200).json(hackathons);
        }catch (err) {
            res.status(500).json({error: err.message});
        }
}

const getHackathon = async (req, res) => {
    try {
            const { userId} = req.params;
            const hackathon = await Hackathon.findById(userId);
            res.status(200).json(hackathon);
        }catch (error) {
            res.status(500).json({message: error.message});
        }
}

const createHackathon = async (req, res) => {
    try {
            const hackathon = await Hackathon.create(req.body);
           
            res.status(200).json(hackathon);
        } catch (err) {
            res.status(400).json({error: err.message});
        }
}

const updateHackathon = async (req, res) => {
        try {
            const { id } = req.params;
            const hackathon = await Hackathon.findByIdAndUpdate(id, req.body);
            if(!hackathon) {
                res.status(404).json({message: 'hackathon not found'});
            }
    
            const updatedHackathon = await Hackathon.findById(id);
            res.status(200).json(updatedHackathon);
        }catch(error) {
            res.status(500).json({message: error.message});
        }
}

const deleteHackathon = async (req, res) => {
    try {
        const { id } = req.params;
        const hackathon = await Hackathon.findByIdAndDelete(id);
        if(!hackathon) {
            return res.status(404).json({ message: "Hackathon not found"});
        }
        res.status(200).json({ message: "Hackathon deleted successfully"});
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    getHackathons,
    getHackathon,
    createHackathon,
    updateHackathon,
    deleteHackathon,
}