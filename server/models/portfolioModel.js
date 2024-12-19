const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const Project = mongoose.model("Project", portfolioSchema);

module.exports = Project;
