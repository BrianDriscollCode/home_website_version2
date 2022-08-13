import React, { useState } from 'react';
import { Link } from "react-router-dom" 
import { GiHamburgerMenu } from "react-icons/gi"
import { FaWindowClose } from 'react-icons/fa';


const Nav = () => {

    const [hamburgerChecked, setHamburgerChecked] = useState(false);

    const check_hamburger = () => {

        setHamburgerChecked(!hamburgerChecked)
        console.log("check ham")

    }

    console.log(window.innerWidth)

    return (

        <nav id="nav">

            <div id="nav_wrapper" className={hamburgerChecked == true ? 'menu_lengthen' : 'null'}>

                <Link 
                    className="nav_link hover-underline-animation" 
                    to="/"
                    id={hamburgerChecked ? "enable_opacity": 'disable_opacity'}
                >
                    <div> Home </div>
                </Link>
                <Link 
                    className="nav_link hover-underline-animation" 
                    to="/"
                    id={hamburgerChecked ? "enable_opacity": 'disable_opacity'}
                >
                        <div> About </div>
                </Link>
                <Link 
                    className="nav_link hover-underline-animation" 
                    to="/"
                    id={hamburgerChecked ? "enable_opacity": 'disable_opacity'}
                >
                        <div> Skills </div>
                </Link>
                <Link 
                    className="nav_link hover-underline-animation" 
                    to="/"
                    id={hamburgerChecked ? "enable_opacity": 'disable_opacity'}
                >
                        <div> Portfolio </div>
                </Link>
                <Link 
                    className="nav_link hover-underline-animation" 
                    to="/"
                    id={hamburgerChecked ? "enable_opacity": 'disable_opacity'}
                >
                        <div> Contact </div>
                </Link>
                <Link 
                    className="nav_link hover-underline-animation" 
                    to="/"
                    id={hamburgerChecked ? "enable_opacity": 'disable_opacity'}
                >
                        <div> Resume </div></Link>
                <Link 
                    className="nav_link hover-underline-animation" 
                    to="/"
                    id={hamburgerChecked ? "enable_opacity": 'disable_opacity'}
                >
                        <div> Blog </div>
                </Link>
              
                <GiHamburgerMenu id="hamburger_menu" onClick={() => check_hamburger()} />
            </div>


        </nav>

    )

}

export default Nav;