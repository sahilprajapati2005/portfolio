// backend/models/Project.js
const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: [{
      type: String, // e.g., ["React", "Node.js", "MongoDB"]
    }],
    githubLink: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String, // Optional: for deployed link
    },
    image: {
      type: String, // Optional: URL for project screenshot
    }
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;