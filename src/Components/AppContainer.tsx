import React from "react";
import { FiHome } from "react-icons/fi";
import { Link, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Lecture from "./Lecture";
import LeftSideBar from "./LeftSideBar";
import MenuItem from "./MenuItem";

interface Props{}

const AppContainer: React.FC<Props> = () => {
    return(
        <>
        <Header></Header>
        <div className={`flex justify-between bg-gray-200`}>

            <LeftSideBar>
                <MenuItem title="Dashboard" icon={<FiHome className={`w-5 h-5 mr-3`}/>}>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                </MenuItem>
                <MenuItem title="Dashboard" icon={<FiHome className={`w-5 h-5 mr-3`}/>}>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                </MenuItem>
                <MenuItem title="Dashboard" icon={<FiHome className={`w-5 h-5 mr-3`}/>}>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                </MenuItem>
                <MenuItem title="Dashboard" icon={<FiHome className={`w-5 h-5 mr-3`}/>}>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                </MenuItem>
                <MenuItem title="Dashboard" icon={<FiHome className={`w-5 h-5 mr-3`}/>}>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                </MenuItem>
                <MenuItem title="Dashboard" icon={<FiHome className={`w-5 h-5 mr-3`}/>}>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                </MenuItem>
                <MenuItem title="Dashboard" icon={<FiHome className={`w-5 h-5 mr-3`}/>}>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                </MenuItem>
                <MenuItem title="Dashboard" icon={<FiHome className={`w-5 h-5 mr-3`}/>}>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                    <h1 className={`text-white`}>CHILDREN</h1>
                </MenuItem>
            </LeftSideBar>
            
            <Switch>
                <Route path="/home">
                    <Home />      
                </Route>
                <Route path="/lecture">
                    <Lecture />
                </Route>
            </Switch>
        </div>
        </>
    )
};

AppContainer.defaultProps = {
    
}

export default React.memo(AppContainer);