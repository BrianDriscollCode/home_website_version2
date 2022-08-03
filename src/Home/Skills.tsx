import React from "react";
import { FaSass, FaJs, FaReact, FaAws } from "react-icons/fa"
import { SiTypescript, SiRedux, SiGithub, SiGit, SiMysql, 
        SiVisualstudio, SiVisualstudiocode, SiHtml5, SiCss3 } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IoMdPhoneLandscape } from "react-icons/io";

const Skills = () => {

    return (

        <div id="skills_container">
            <div id="skills_wrapper">

                <h2> Skills </h2>
                <h3> Technologies and Tools</h3> 
                <p> This is the workbench that brings your applications to the web! </p>

                <div id="technologies_wrapper">

                    <div className="skill_icon"> 
                        <SiCss3 size={90} />
                        HTML5
                    </div>

                    <div className="skill_icon"> 
                        <SiHtml5 size={90} />
                        HTML5
                    </div>

                    <div className="skill_icon"> 
                        <FaSass size={90} />
                        SASS
                    </div>

                    <div className="skill_icon"> 
                        <FaJs size={90} />
                        JavaScript
                    </div>

                    <div className="skill_icon"> 
                        <SiTypescript size={90} />
                        TypeScript
                    </div>
                    
                    <div className="skill_icon"> 
                        <FaReact size={90} />
                        React
                    </div>
                    
                    <div className="skill_icon"> 
                        <SiRedux size={90} />
                        Redux
                    </div>

                    <div className="skill_icon"> 
                        <SiGit size={90} />
                        Git
                    </div>
                    
                    <div className="skill_icon"> 
                        <SiGithub size={90} />
                        Github
                    </div>
                    
                    <div className="skill_icon"> 
                        <TbApi size={90} />
                        External API
                    </div>

                    <div className="skill_icon"> 
                        <FaAws size={90} />
                        AWS RDS
                    </div>

                    <div className="skill_icon"> 
                        <SiMysql size={90} />
                        MySql
                    </div>

                    <div className="skill_icon"> 
                        <SiVisualstudiocode size={90} />
                        Visual Studio Code
                    </div>

                    <div className="skill_icon"> 
                        <IoMdPhoneLandscape size={90} />
                        Responsive Web Design
                    </div>

                </div>

            </div>
        </div>

    )

}

export default Skills;