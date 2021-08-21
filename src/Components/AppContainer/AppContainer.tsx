import React from "react";
import { Link, Route, Switch } from "react-router-dom";
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

interface Props{
}

const AppContainer: React.FC<Props> = () => {
    const state = useAppSelector((state) => state.ui.isSideBarOpen)
    
    return(
        <div className={` w-full h-nav mt-32 overflow-y-auto`}>
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
                    <Route path="/group/:id">
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
        </div>
    )
};

AppContainer.defaultProps = {
    
}

export default React.memo(AppContainer);