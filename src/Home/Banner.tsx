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

            <div id="tree_branch">
                <img src="/images/tree_branch.png"  width="250" />
            </div>

            <div id="banner_wrapper">

                <h1> 

                    <span className="banner_title" id="first_banner_line"> Hi, I'm Brian! </span>
                    {"I'm a "}  
                        <span className="banner_title"> 
                            <span id="banner_bold"> Marketer turned Developer </span> 
                        </span>
                    {"and a "} 
                        <span className="banner_title"> 
                            <span id="banner_switcher"> 
                                <span 
                                    id="banner_choice_1"
                                    className="banner_choice"
                                    style={{
                                        opacity: counter === 0 ? '1': '0',
                                        transform: counter === 0 ? 'translateY(0px)': 'translateY(45px)',
                                        transition: 'opacity 1s, transform 1s'
                                    }}
                                > 
                                    coffee addict. <SiBuymeacoffee className="banner_image" size={35}/> 
                                </span>
                                <span 
                                    id="banner_choice_2"
                                    className="banner_choice"
                                    style={{
                                        opacity: counter === 1 ? '1': '0',
                                        transform: counter === 1 ? 'translateY(0px)': 'translateY(45px)',
                                        transition: 'opacity 1s, transform 1s'
                                    }}
                                > 
                                    fitness enthusiast. <GiWeightLiftingUp className="banner_image" size={35} />
                                </span>
                                <span 
                                    id="banner_choice_3"
                                    className="banner_choice"
                                    style={{
                                        opacity: counter === 2 ? '1': '0',
                                        transform: counter === 2 ? 'translateY(0px)': 'translateY(45px)',
                                        transition: 'opacity 1s, transform 1s'
                                    }}
                                > 
                                    problem tackler. <GiMonkeyWrench className="banner_image" size={35} />
                                </span>
                                <span 
                                    id="banner_choice_4"
                                    className="banner_choice"
                                    style={{
                                        opacity: counter === 3 ? '1': '0',
                                        transform: counter === 3 ? 'translateY(0px)': 'translateY(45px)',
                                        transition: 'opacity 1s, transform 1s'
                                    }}
                                > 
                                    book nerd. <SiGitbook className="banner_image" size={35} />
                                </span>
                            </span> 
                    </span>

                </h1>

            </div>

            <div id="coffee_cup">
                <img src="/images/coffee_cup.png"  width="125" />
            </div>

        </header>

    )

}

export default Banner;