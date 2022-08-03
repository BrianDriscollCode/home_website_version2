import React from "react";

import Banner from "./Banner";
import Angle_Element from "./Angle_Element";
import About from "./About";
import Skills from "./Skills";

const Home = () => {

    return (

        <div id="main_body"> 

            <Banner />
            <Angle_Element id1={"angle1"} id2={"inner_angle1"}/>
            <About />
            <Angle_Element id1={"angle2"} id2={"inner_angle2"}/>
            <Skills />
            
    
        </div>

    )

}

export default Home;