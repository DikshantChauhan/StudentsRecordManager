import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Lecture from "./Lecture";

interface Props{}

const AppContainer: React.FC<Props> = () => {
    return(
        <div className={`flex justify-between`}>
            <div className={`bg-gray-600 h-screen w-1/4`}></div>
            <Switch>
                <Route path="/home">
                    <Home />      
                </Route>
                <Route path="/lecture">
                    <Lecture />
                </Route>
            </Switch>
        </div>
    )
};

AppContainer.defaultProps = {
    
}

export default React.memo(AppContainer);