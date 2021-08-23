import React, { Suspense } from "react";
import { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_LOGIN_TOKEN } from "./Components/Api/Base.api";
import { useAppSelector } from "./StateManagement/store";
import { meFetchErrorSelector, meSelector } from "./StateManagement/selector/auth.selector";
import { useDispatch } from "react-redux";
import { meFetchingAction } from "./StateManagement/actions/auth.action";
import { ImSpinner2 } from "react-icons/im";
import ButtonSolid from "./Components/Button/ButtonSolid";

const AppContainerLazy = React.lazy(() =>import("./Components/AppContainer/AppContainer") )
const AuthenticationLazy = React.lazy(() =>import("./Components/Authentication/Authentication") )

interface Props{
}

const App: React.FC<Props> = () => {
  const token = localStorage.getItem(LS_LOGIN_TOKEN)
  const user = useAppSelector(meSelector);
  const dispatch = useDispatch()
  const meFetchError = useAppSelector(meFetchErrorSelector)

  useEffect(() => {
    if (!token || user) {
      return;
    }

    dispatch(meFetchingAction())
  }, []) //eslint-disable-line

  /* const data = useMemo(() =>{
    return { user, setUser }
  }, [user]) */

  if(token && meFetchError){
    return(
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
        <p className={`text-red-500 text-2xl mb-2`}>{meFetchError}</p>
        <ButtonSolid onClick={() =>{window.location.reload()}} theme="blue">Reload</ButtonSolid>
      </div>
    )
  }

  if (!user && token) {
    return (
      <div className="relative flex flex-col justify-center items-center h-screen">
        <ImSpinner2 className="animate-spin absolute text-primary-main w-6 h-6 " />
        <ImSpinner2 className="animate-spin absolute text-primary-main w-8 h-8 " />
        <ImSpinner2 className="animate-spin absolute text-primary-main w-10 h-10 " />
    </div>
    )
  }
  
    return(
      <div className={`font-sans`}>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/home"></Redirect>:<Redirect to="/login"></Redirect>}
          </Route>
          <Route path={["/login", "/signup"]} exact>
            {user ? 
              <Redirect to="/home"></Redirect>:
              <Suspense fallback={
                <div className="bg-indigoish relative flex flex-col justify-center items-center h-screen">
                 <ImSpinner2 className="animate-spin absolute text-primary-main w-6 h-6 " />
                 <ImSpinner2 className="animate-spin absolute text-primary-main w-8 h-8 " />
                 <ImSpinner2 className="animate-spin absolute text-primary-main w-10 h-10 " />
                </div>
              }><AuthenticationLazy /></Suspense>
            }
          </Route>
          <Route path={["/home", "/lecture", "/group/:id", "/profile", "/groups", "/users", "/user/:id"]} exact>
            {user ? 
              <Suspense fallback={
                <div className="bg-indigoish relative flex flex-col justify-center items-center h-screen">
                 <ImSpinner2 className="animate-spin absolute text-primary-main w-6 h-6 " />
                 <ImSpinner2 className="animate-spin absolute text-primary-main w-8 h-8 " />
                 <ImSpinner2 className="animate-spin absolute text-primary-main w-10 h-10 " />
                </div>
              }><AppContainerLazy /></Suspense>:
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
