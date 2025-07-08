import './index.css'

const Skillset = [{
        title: "HTML/CSS",
        imageLink: "https://i.pinimg.com/736x/a4/32/64/a4326433db4ce88613a6298ded2525d7.jpg"
    },
    {
        title: "JavaScript",
        imageLink: "https://i.pinimg.com/736x/69/e2/b3/69e2b3be6001c33141a95557a5f2cbcd.jpg"
    },
    {
        title: "React",
        imageLink: "https://i.pinimg.com/736x/84/d4/1f/84d41f2e8078d20a79d9e5d69fa28644.jpg"
    },
    {
        title: "Node",
        imageLink: "https://i.pinimg.com/736x/99/49/77/994977c48fde58ac674a2d05ba5a5efb.jpg"
    },
    {
        title: "Mongo DB",
        imageLink: "https://i.pinimg.com/736x/3f/4d/4b/3f4d4b09057fac7d0b003a07731d2e6d.jpg"
    },
    {
        title: "Redux",
        imageLink: "https://i.pinimg.com/736x/2c/f4/ed/2cf4ede959bb7df865bdde4a38e92468.jpg"
    },
    {
        title: "SQL",
        imageLink: "https://i.pinimg.com/736x/6e/79/82/6e7982e35e4a1c4d1808e261307cc5a8.jpg"
    },
    {
        title: "Tailwind CSS",
        imageLink: "https://i.pinimg.com/736x/11/a7/b5/11a7b5fb70c24e5632f2baccce14603c.jpg"
    },
    {
      title: "GitHub",
      imageLink: "https://i.pinimg.com/736x/03/56/c8/0356c8a40a2e7db4bd082ef38bf139b4.jpg"
  },
   {
    title: "Python",
    imageLink: "https://i.pinimg.com/736x/eb/27/4c/eb274c99518337a221463af81323037d.jpg"
},
  {
    title: "VS Code",
    imageLink: "https://i.pinimg.com/736x/43/ad/39/43ad39a977665ece2f8066f61d8ded45.jpg"
},
]
const Skills = () => {
    return (
      <div className="skills-container">
        {Skillset.map((skill, index) => (
          <div className="skill-box" key={index}>
            <img src={skill.imageLink} alt={skill.title} className="skill-img" />
            <p className="skill-title">{skill.title}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Skills;