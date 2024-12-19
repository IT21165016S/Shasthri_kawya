const express = require("express");
const Project = require("../models/portfolioModel");

const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add a project
router.post("/", async (req, res) => {
  const { title, description, link, imageUrl } = req.body;

  const newProject = new Project({
    title,
    description,
    link,
    imageUrl,
  });

  try {
    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
