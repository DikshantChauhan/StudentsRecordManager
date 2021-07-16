import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthHeroSection from "./AuthHeroSection";
import LogIn from "./LogIn";
import SignIn from "./SignIn";
import {FaSpinner} from "react-icons/fa"
import { useState } from "react";

interface Props{}

const Authentication: React.FC<Props> = () => {
    /* const [hidden, setHidden] = useState(true) */
    return(
        <>
            <div className={`flex justify-between`}>
                <Switch>
                <Route path="/login" exact>
                    <LogIn />
                </Route>
                <Route path="/signup" exact>
                    <SignIn />
                </Route>
                </Switch>
                <AuthHeroSection />
            </div>
            {/* <div className={`absolute w-full h-screen bg-black bg-opacity-40 flex items-center justify-around ${(hidden ? "hidden":"block")}`}>
                <FaSpinner className={` w-16 h-16 animate-spin`}></FaSpinner>
            </div> */}
        </>
    )
};

Authentication.defaultProps = {
    
}

export default React.memo(Authentication)