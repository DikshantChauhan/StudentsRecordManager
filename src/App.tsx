import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContainer from "./Components/AppContainer";
import Authentication from "./Components/Authentication";
import SignIn from "./Components/SignIn";

interface Props{}

const App: React.FC<Props> = () => {
    return(
      <BrowserRouter>
        <Switch>
          <Route path={["/login", "/signin"]} exact>
            <Authentication />
          </Route>
          <Route path="/home" exact>
            <AppContainer />
          </Route>
          <Route>
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>        
    );
};

App.defaultProps = {
    
}

export default React.memo(App);
