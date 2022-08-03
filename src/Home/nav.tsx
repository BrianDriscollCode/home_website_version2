import React, { useState } from 'react';
import { Link } from "react-router-dom" 
import { GiHamburgerMenu } from "react-icons/gi"


const Nav = () => {

    const [hamburgerChecked, setHamburgerChecked] = useState(false);

    const check_hamburger = () => {

        setHamburgerChecked(!hamburgerChecked)
        console.log("check ham")

    }

    return (

        <nav id="nav">

            <div id="nav_wrapper" className={hamburgerChecked == true ? 'menu_lengthen' : 'null'}>

                <Link className="nav_link hover-underline-animation" to="/"><div> Home </div></Link>
                <Link className="nav_link hover-underline-animation" to="/"><div> About </div></Link>
                <Link className="nav_link hover-underline-animation" to="/"><div> Skills </div></Link>
                <Link className="nav_link hover-underline-animation" to="/"><div> Portfolio </div></Link>
                <Link className="nav_link hover-underline-animation" to="/"><div> Contact </div></Link>
                <Link className="nav_link hover-underline-animation" to="/"><div> Resume </div></Link>
                <Link className="nav_link hover-underline-animation" to="/"><div> Blog </div></Link>
              
                <GiHamburgerMenu id="hamburger_menu" onClick={() => check_hamburger()} />
            </div>


        </nav>

    )

}

export default Nav;