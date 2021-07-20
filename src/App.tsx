import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppContainer from "./Components/AppContainer";
import Authentication from "./Components/Authentication";

interface Props{}

const App: React.FC<Props> = () => {
    return(
      <div className={`font-sans`}>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path={["/login", "/signup"]} exact>
            <Authentication />
          </Route>
          <Route path={["/home", "/lecture"]} exact>
            <AppContainer />
          </Route>
          <Route>
            <Redirect to="/login"></Redirect>
          </Route>
        </Switch>
      </BrowserRouter> 
      </div>       
    );
};

App.defaultProps = {
    
}

export default React.memo(App);
