import React from "react";
import "./Skills.css";

import stack__java from '../../assets/stacks/stack__java.svg'
import stack__python from '../../assets/stacks/stack__python.svg'
import stack__typescript from '../../assets/stacks/stack__typescript.svg'
import stack__nodejs from '../../assets/stacks/stack__nodejs.svg'
import stack__react from '../../assets/stacks/stack__react.svg'
import stack__mysql from '../../assets/stacks/stack__mysql.svg'
import stack__git from '../../assets/stacks/stack__git.svg'
import stack__figma from '../../assets/stacks/stack__figma.svg'



const stackImages = [
  { src: stack__java, name: "Java" },
  { src: stack__python, name: "Python" },
  { src: stack__typescript, name: "TypeScript" },
  { src: stack__nodejs, name: "NodeJs" },
  { src: stack__react, name: "React" },
  { src: stack__mysql, name: "MySQL" },
  { src: stack__git, name: "Git" },
  { src: stack__figma, name: "Figma" }
]

interface SkillProps {
  src: string;
  name: string;
}

const Skill: React.FC<SkillProps> = ({src, name}) => {
  return (
    <div className="skill">
    <img className="stack__icon" src={src} alt={name} />
    <span className="skill__name">{name}</span>
  </div>
  )
}
const Skills = () => (
    <div className="skills__container">
      <div className="skills__content">
    {stackImages.map((image, index) => (
      <Skill name={image.name} src={image.src} key={index} />
    ))}
      </div>

  
    </div>
  
  );
export default Skills;
