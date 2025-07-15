import React from 'react';
import './index.css';
import { FaGithub } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";


const Projects = [
  {
    title: "MarvelUniverse",
    img: "https://i.pinimg.com/736x/8d/f6/f2/8df6f25dad225e18ac0e681138a80273.jpg",
    technologies: "MERN",
    description: "Full-stack Marvel Universe app using MongoDB, Node.js & React. Features dynamic UI with interactive elements showcasing movies, series, and timelines.",
    repoLink: "https://github.com/SandeepReddyDev/MarvelUniverse",
    liveLink: "https://marvel-universe-seven.vercel.app/"
  },
  {
    title: "E-commerce Website",
    img: "https://i.pinimg.com/736x/c7/06/74/c706746fd8bb2d10a14e4ed572b52783.jpg",
    technologies: "React",
    description: "Built an e-commerce site using React with features like favorites, cart, product details, and a responsive dark/light theme for better user experience.",
    repoLink: "https://github.com/SandeepReddyDev/ShoppingWebsite",
    liveLink: "https://sandeepreddydev.github.io/ShoppingWebsite/"
  },
  {
    title: "Rock Paper Scissor Game",
    img: "https://i.pinimg.com/736x/41/37/ec/4137ec2e997ee586e9c19c0592eb62f5.jpg",
    technologies: "React",
    description: "Built a Rock-Paper-Scissors game using React with smooth UI, score tracking, and game logic.",
    repoLink: "https://github.com/SandeepReddyDev/RockPaperScissor",
    liveLink: "https://sandeepreddydev.github.io/RockPaperScissor/"
  },
  {
    title: "Calculator",
    img: "https://i.pinimg.com/736x/ea/ee/3a/eaee3ad13a2bf3d9608b6da5a7bf2f52.jpg",
    technologies: "HTML / CSS / JS",
    description: "React Calculator app with light/dark themes, smooth UI, and animated background for a modern feel.",
    repoLink: "https://github.com/SandeepReddyDev/Calculator",
    liveLink: "https://sandeepreddydev.github.io/Calculator/"
  }
];

const ProjectsComponent = () => {
  return (
    <div className="projects-container">
      {Projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div
            className="image-c"
            style={{ backgroundImage: `url(${project.img})` }}
          >
            <img src={project.img} className='p-img'/>
            <p className="description">{project.description}</p>
          </div>

          <div className="project-content">
            <h2>{project.title}</h2>
            <p className="tech-used"><strong>Tech:</strong> {project.technologies}</p>

            <div className="project-buttons">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className='links'>
                <button className="glow-button"><FaGithub/> Repo</button>
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='links'>
                <button className="glow-button">Live <IoLink/> </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsComponent;
