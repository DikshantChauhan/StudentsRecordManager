import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Lecture from "../Pages/Lecture";
import Header from "./Header";
import ProfilePage from "../Pages/ProfilePage";
import { User } from "../Models/User";
import LeftSideBar from "./Navigation/LeftSideBar";
import MenuItem from "./Navigation/MenuItem";
import { FiHome } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { actionKey, useAppSelector } from "../../store";
import { uiAction } from "../../actions/ui.actions";

interface Props{
    user: User
}

const AppContainer: React.FC<Props> = () => {
    const state = useAppSelector((state) => state.ui.isSideBarOpen)
    /* const data = useMemo(() =>{
        return {state, setState}
    }, [state]) */
    
    return(
        <>
        <Header ></Header>

        <Transition.Root show={state} unmount={false}>
            <Transition.Child
                unmount={false}
                enter="duration-300 transition-transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                entered="translate-x-0"
                leave="duration-300 transition-transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
                className="transform absolute z-30 overflow-y-auto lg:z-50 left-0 top-0 bottom-0 bg-gray-200 border-r-2 border-gray-300"
            >
            <LeftSideBar className={`lg:pt-6 pt-36 pb-6`}>
                <MenuItem title="Dashboard" icon={<FiHome className={`w-5 h-5 mr-3`}/>}>
                    <h1>CHILDREN</h1>
                    <h1>hello</h1>
                </MenuItem>
                <MenuItem title="Dashboard" icon={<FiHome className={`w-5 h-5 mr-3`}/>}>
                    <h1>CHILDREN</h1>
                    <h1>hello</h1>
                    <h1>CHILDREN</h1>
                </MenuItem>
                <MenuItem title="Dashboard" icon={<FiHome className={`w-5 h-5 mr-3`}/>}>
                    <h1>CHILDREN</h1>
                    <h1>CHILDREN</h1>
                    <h1>CHILDREN</h1>
                </MenuItem>
            </LeftSideBar>
            </Transition.Child>
            <Transition.Child
                enter="duration-300 transition-opacity"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                entered="opacity-100"
                leave="duration-300 transition-opacity"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                as={Fragment}
            >
                <div onClick={() =>{uiAction.isSidebarOpen(false)}} className="absolute z-40 left-0 top-0 bottom-0 right-0 bg-opacity-30 bg-black-dark hidden lg:block"></div>
            </Transition.Child>
        </Transition.Root>

        <div className={`flex`}>
            <Transition 
                show={state}
                enter="duration-300"
                enterFrom="w-0"
                enterTo="w-64"
                entered="w-64"
                leave="duration-300"
                leaveFrom="w-64"
                leaveTo="w-0"
                className="lg:w-0"
            >
                <div className={`h-screen`}></div>
            </Transition>
            <Switch>
                <div className={`px-3 transition-all flex-1`}>
                    <Route path="/home">
                        <Home/>      
                    </Route>
                    <Route path="/lecture">
                        <Lecture />
                    </Route>
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                </div>
            </Switch>
        </div>
        </>
    )
};

AppContainer.defaultProps = {
    
}

export default React.memo(AppContainer);