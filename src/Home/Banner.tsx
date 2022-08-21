import React, { useState, useEffect } from "react";
import { SiGitbook, SiBuymeacoffee, } from "react-icons/si";
import { GiWeightLiftingUp, GiMonkeyWrench } from "react-icons/gi";

import Nav from "./nav"

const Banner = () => {

    const [counter, setCounter] = useState(0);
    const [description, setDescription] = useState("book nerd.");
    const [icon, setIcon] = useState(<SiGitbook />);

    useEffect(() => {

        const interval = setInterval(() => {
            
            if (counter == 0) {
                setCounter(1);
            } else if (counter == 1) {
                setCounter(2)
            } else if (counter == 2) {
                setCounter(3)
            } else if (counter == 3) {
                setCounter(0)
            }


        }, 2300)

        return () => clearInterval(interval)

    }, [counter])

    return (

        <header id="banner">

            <Nav />

            <div id="tree_branch_div">
                <img id="tree_branch" src="/images/tree_branch.png"  width="250" />
            </div>

            <div id="new_banner_wrapper"> 

                <h1> 

                    <span id="title_line_1"> Hi, I'm Brian! </span>   

                    <span id="title_line_2"> I'm a Marketer Turned Developer and </span> 

                    

                    <span id="title_line_3"> 
                    
                        <span 
                            className="description_flip" 
                            id="description_solver"
                            style={{
                                opacity: counter === 0 ? '1': '0',
                                transform: counter === 0 ? 'translateY(0px)': 'translateY(45px)',
                                transition: 'opacity 1s, transform 1s'
                            }}
                        > 
                            problem tackler.
                            <GiMonkeyWrench id="banner_image" size={35} /> 
                        </span>
                        
                        <span 
                            className="description_flip" 
                            id="description_solver"
                            style={{
                                opacity: counter === 1 ? '1': '0',
                                transform: counter === 1 ? 'translateY(0px)': 'translateY(45px)',
                                transition: 'opacity 1s, transform 1s'
                            }}
                        > 
                            coffee addict. 
                            <SiBuymeacoffee id="banner_image" size={35}/> 
                        </span>
                        
                        <span 
                            className="description_flip" 
                            id="description_solver"
                            style={{
                                opacity: counter === 2 ? '1': '0',
                                transform: counter === 2 ? 'translateY(0px)': 'translateY(45px)',
                                transition: 'opacity 1s, transform 1s'
                            }}
                        > 
                            fitness enthusiast. 
                            <GiWeightLiftingUp id="banner_image" size={35} /> 
                        </span>
                        <span 
                            className="description_flip" 
                            id="description_solver"
                            style={{
                                opacity: counter === 3 ? '1': '0',
                                transform: counter === 3 ? 'translateY(0px)': 'translateY(45px)',
                                transition: 'opacity 1s, transform 1s'
                            }}
                        > 
                            book nerd. 
                            <SiGitbook id="banner_image" size={35} /> 
                        </span>
                    
                    </span>
                    
                </h1> 

            </div>

            <div id="coffee_cup_div">
                <img id="coffee_cup" src="/images/coffee_cup.png"  width="205" />
            </div>

        </header>

    )

}

export default Banner;