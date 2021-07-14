import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppContainer from "./Components/AppContainer";
import Authentication from "./Components/Authentication";
import SignIn from "./Components/SignIn";

interface Props{}

const App: React.FC<Props> = () => {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/signin"></Redirect>
          </Route>
          <Route path={["/login", "/signin"]} exact>
            <Authentication />
          </Route>
          <Route path={["/home", "/lecture"]} exact>
            <AppContainer />
          </Route>
          <Route>
            <Redirect to="/signin"></Redirect>
          </Route>
        </Switch>
      </BrowserRouter>        
    );
};

App.defaultProps = {
    
}

export default React.memo(App);
