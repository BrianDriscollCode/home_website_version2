import React from "react";

import Banner from "./Banner";
import Angle_Element from "./Angle_Element";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {

    return (

        <div id="main_body"> 

            <Banner />
            <Angle_Element id1={"angle1"} id2={"inner_angle1"}/>
            <About />
            <Angle_Element id1={"angle2"} id2={"inner_angle2"}/>
            <Skills />
            <Angle_Element id1={"angle3"} id2={"inner_angle3"} />
            <Portfolio />
            <Angle_Element id1={"angle4"} id2={"inner_angle4"} />
            <Contact />
    
        </div>

    )

}

export default Home;