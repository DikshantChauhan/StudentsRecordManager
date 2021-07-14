import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthHeroSection from "./AuthHeroSection";
import LogIn from "./LogIn";
import SignIn from "./SignIn";

interface Props{}

const Authentication: React.FC<Props> = () => {
    return(
        <>
            <Switch>
            <Route path="/login" exact>
                <LogIn />
            </Route>
            <Route path="/signin" exact>
                <SignIn />
            </Route>
            </Switch>
            <AuthHeroSection />
        </>
    )
};

Authentication.defaultProps = {
    
}

export default React.memo(Authentication);