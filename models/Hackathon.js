const mongoose = require('mongoose');

const HackathonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  theme: { type: String, required: true },
  judgingCriteria: { type: String, required: true },
  prizes: { type: String, required: true },
  // deadline: { type: Date, required: true },
  hackathonType: { type: String, enum: ['Online', 'In-Person'], required: true },
  image: { type: String },
  // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Ensure this is correct
  // participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Hackathon', HackathonSchema);