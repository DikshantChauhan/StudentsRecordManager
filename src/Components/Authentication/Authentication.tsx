import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthHeroSection from "./AuthHeroSection";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";

interface Props{
}

const Authentication: React.FC<Props> = () => {
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
        </>
    )
};

Authentication.defaultProps = {
    
}

export default React.memo(Authentication)