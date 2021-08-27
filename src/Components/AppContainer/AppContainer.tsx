import React from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import Home from "./Pages/Home";
import Lecture from "./Pages/Lecture";
import Header from "./Header";
import ProfilePage from "./Pages/ProfilePage";
import LeftSideBar from "./Navigation/LeftSideBar";
import MenuItem from "./Navigation/MenuItem";
import { FiHome } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import { useAppSelector } from "../../StateManagement/store";
import Groups from "./Pages/Groups";
import Group from "./Pages/Group";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";
import { useState } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useCallback } from "react";

interface Props{
}

const AppContainer: React.FC<Props> = () => {
    const state = useAppSelector((state) => state.ui.isSideBarOpen)
    const [percentage, setPercentage] = useState<number | undefined>(undefined)
    const history = useHistory()
    const container = document.getElementById("container")
    const Top = document.getElementById("Top")

    history.listen(() =>{
        setPercentage(undefined)
        Top?.scrollIntoView({behavior: 'smooth'})
    })

    const handelScroll = () =>{
        const scrollHeight = (container?.scrollHeight)! - (container?.getBoundingClientRect().height)!;
        const scrolled = (container?.scrollTop)
        setPercentage((scrolled! / scrollHeight))
    }

    const handelClick = useCallback(() =>{
        Top?.scrollIntoView({behavior: 'smooth'})
    }, [Top]) 
    
    return(
        <div onScroll={handelScroll} id="container" className={` w-full h-nav mt-32 overflow-y-auto`}>
        <div id="Top" className={`not-sr-only`}></div>
        <Header ></Header>
        <LeftSideBar className={`pt-6 pb-6`}>
            <MenuItem title="Dashboard" icon={FiHome}>
                <Link to="/groups">Groups</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/lecture">Lecture</Link>
                <Link to="/users">Users</Link>
            </MenuItem>
            <MenuItem title="Dashboard" icon={FiHome}>
                <h1>Test</h1>
                <h1>Test</h1>
                <h1>Test</h1>
            </MenuItem>
            <MenuItem title="Home" link="/home" />
            <MenuItem title="Groups" link="/groups" />
            <MenuItem title="Profile" link="/profile" />
            <MenuItem title="Users" link="/users" />
        </LeftSideBar>

        <div className={`flex`}>
            <Transition 
                show={state}
                enter="duration-300"
                enterFrom="min-w-0"
                enterTo="min-w-4"
                entered="min-w-4"
                leave="duration-300"
                leaveFrom="min-w-4"
                leaveTo="min-w-0"
                className="lg:min-w-0"
            >
                <div className={`h-nav`}></div>
            </Transition>
            <div className={`px-3 transition-all flex-1`}>
            <Switch>
                    <Route path="/home">
                        <Home/>      
                    </Route>
                    <Route path="/groups/:id">
                        <Group />
                    </Route>
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                    <Route path="/lecture">
                        <Lecture />
                    </Route>
                    <Route path="/groups">
                        <Groups />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/user/:id">
                        <UserDetails />
                    </Route>
            </Switch>
            </div>
        </div>
            {percentage && <div className={`fixed right-10 bottom-4 w-10 h-10 rounded-full bg-gray-300 border border-gray-400 flex justify-center items-center`}>
                <div style={{transform: `scale(${percentage})`}} className={`bg-primary-main rounded-full w-10 h-10 z-40 flex justify-center items-center`}>
                    {(percentage === 1) && 
                    <HiOutlineChevronDoubleUp onClick={handelClick} className={`text-2xl cursor-pointer text-white`} />
                    }
                </div>
            </div>}
        </div>
    )
};

AppContainer.defaultProps = {
    
}

export default React.memo(AppContainer);