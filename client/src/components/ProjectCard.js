const ProjectCard = ({ project }) => {
    return (
      <div className="bg-white p-4 rounded shadow-lg">
        <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded" />
        <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <a href={project.link} className="text-blue-500 mt-2 inline-block">View Project</a>
      </div>
    );
  };
  
  export default ProjectCard;
  