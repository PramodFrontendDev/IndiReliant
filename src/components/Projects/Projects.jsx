import "./Projects.css";
import WorkItem from "../WorkItem/WorkItem";
const Projects = () => {
  return (
    <div className="projects-main">
      {/* <img src={Project} alt="Projects" /> */}
        <div className="projects-text">
            <div className="container">
                <h2>Our Projects</h2>
                <p>Check out some of our recent work!</p>
            </div>
        </div>
        <div className="container">
            <div className="items">
                <WorkItem />
            </div>
        </div>
    </div>
  );
};

export default Projects;