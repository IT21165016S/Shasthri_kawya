import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import Footer from "./components/Header";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
