import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import Home from "./Home/Home"
import Nav from "./Home/nav";

const App = () => {

    return (
        <HashRouter>
        
            
            <Routes>

                <Route path="/" element={<Home />}> </Route>

            </Routes>
            

        </HashRouter>

    )

}

export default App;