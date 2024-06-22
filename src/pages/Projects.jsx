import ScrollReveal from "scrollreveal";
import "../components/styles/Projects.css";
import { projecten } from "../data";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      duration: 1000,
      delay: 200,
      easing: "ease-out",
      reset: true, // Reset animatie bij elke onthulling
    });

    sr.reveal(".item", { interval: 200 }); // Onthul elk .item element met een interval
    sr.reveal(".model", { delay: "2000", duration: "2000" });
    sr.reveal(".project", { delay: "2000", duration: "2000" });
    // Cleanup
    return () => {
      sr.destroy(); // Verwijder ScrollReveal instance bij het unmounten van de component
    };
  }, []);

  return (
    <div className='banner'>
      <div className='slider' style={{ "--quantity": projecten.length }}>
        {projecten.map((image, index) => (
          <div key={index} className='item' style={{ "--position": index + 1 }}>
            <a href={image.link} target='_blank' rel='noopener noreferrer'>
              <img src={`${image.imageName}`} alt={image.imageName} />
            </a>
          </div>
        ))}
      </div>
      <div className='content'>
        <h1 data-content='Projects' className='project'>
          Projects
        </h1>
        <div className='model'></div>
      </div>
    </div>
  );
};

export default Projects;
