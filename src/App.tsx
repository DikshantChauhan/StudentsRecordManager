import React, { Suspense } from "react";
import { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./Components/Api/Auth";
import { LS_LOGIN_TOKEN } from "./Components/Api/Base";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./store";
import { authAction } from "./actions/auth.action";

const AppContainerLazy = React.lazy(() =>import("./Components/AppContainer/AppContainer") )
const AuthenticationLazy = React.lazy(() =>import("./Components/Authentication/Authentication") )

interface Props{
}

const App: React.FC<Props> = () => {
  const token = localStorage.getItem(LS_LOGIN_TOKEN)

  const user = useAppSelector((state) => {
    return state.auth.id && state.users.byId[state.auth.id]
  })

  /* const [user, setUser] = useState<User>() */
  useEffect(() => {
    if (!token || user) {
      return;
    }

    me().then(u => authAction.login(u))
  }, [])

  /* const data = useMemo(() =>{
    return { user, setUser }
  }, [user]) */

  if (!user && token) {
    return <div>Loading....</div>
  }
  
    return(
      <div className={`font-sans w-full h-screen overflow-y-auto`}>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/home"></Redirect>:<Redirect to="/login"></Redirect>}
          </Route>
          <Route path={["/login", "/signup"]} exact>
            {user ? 
              <Redirect to="/home"></Redirect>:
              <Suspense fallback={<div>Loading....</div>}><AuthenticationLazy /></Suspense>
            }
          </Route>
          <Route path={["/home", "/lecture", "/profile"]} exact>
            {user ? 
              <Suspense fallback={<div>Loading....</div>}><AppContainerLazy user={user}/></Suspense>:
              <Redirect to="/login"></Redirect>
            }
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
