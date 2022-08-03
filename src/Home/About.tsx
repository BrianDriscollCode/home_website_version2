import React from "react";
import { Link } from "react-router-dom";

const About = () => {

    return (

        <div id="about_section">
            
            <div id="about_wrapper">

                <div id="about_title">

                    <h2> About </h2>
                    <h3> Who is Brian? </h3>

                </div>

                <div id="about_content">

                    <div id="about_image_container">

                        <img 
                            src="images/Brian_Driscoll.jpg" 
                            id="about_image"
                        />

                    </div>

                    <div id="about_description">

                        <p id="tagline"> A passion-driven Front-End Developer with marketing experience. </p>
                    
                        <p> Bringing both technical and creative skills to the table, I breathe life into your web applications. I’m a builder who focuses on interactive experiences, writing readable code that humans and machines understand, and architecting front-end applications that make sense. Each line of code matters. If I can make it simpler, the better. </p>
                    
                        <p> I have certifications in both <a href="https://www.freecodecamp.org/certification/brian_driscoll/responsive-web-design"> Responsive Web Design</a> and <a href="https://www.freecodecamp.org/certification/brian_driscoll/javascript-algorithms-and-data-structures"> JavaScript Algorithms and Data Structures</a>, professional experience in government communications, and a track-record of delivering projects under strict deadlines. </p>

                        <p> It’s a pleasure to create work that matters, to learn new skills, and to meet new people who also want to build their careers. Currently working on personal projects and helping clients bring their ideas to the web. If you are looking for help, feel free to contact me and say hi!  </p>

                        <div id="talk_wrapper">
                            <Link to="contact" id="about_contact_link"> Let's talk! </Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default About;