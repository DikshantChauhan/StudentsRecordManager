import React, { Fragment, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Lecture from "./Lecture";
import LeftSideBar from "./LeftSideBar";
import MenuItem from "./MenuItem";
import img from "../img/logo.svg"
import {IoNotificationsOutline, GiHamburgerMenu, FiHome, BiChevronDown, AiOutlineMail, RiSearchLine, DiVim} from "react-icons/all"
import { Dialog, Transition } from "@headlessui/react";
import { logout } from "./Login";

interface Props{}

const AppContainer: React.FC<Props> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPsudoMenuOpen, setIsPsudoMenuOpen] = useState(false);
    return(
        <>
        <header className={`sticky top-0 left-0 right-0 z-30`}>
            <div className={`bg-black-light`}>
                <ul className={`py-2 px-6 flex items-center max-w-8xl mx-auto relative`}>
                    <li>
                        <Link to="/home" className={`flex items-center`}>
                            <img src={img} alt="logo" className={`w-9 h-9`} />
                            <h1 className={`text-white text-2xl px-3 font-bold mr-10 md:hidden`}>CORK</h1>
                        </Link>
                    </li>
                    <li className={`md:hidden`}>
                        <form className={`flex flex-row-reverse items-center p-1 bg-gray-700 rounded-md`}>
                            <input className={`bg-gray-700 w-72 focus:outline-none text-white`} type="text" placeholder="Search..." />
                            <button type="submit"><RiSearchLine  className={`text-gray-400 w-5 h-5 mr-2`} /></button>
                        </form>
                    </li>
                    <div className={`flex items-center flex-1 justify-end`}>
                        <li className={`hidden md:block`}>
                            <button type="button"><RiSearchLine className={`w-6 h-6 text-white`} /></button>
                        </li>
                        <li className={`ml-4`}>
                            <button type="button"><AiOutlineMail className={`w-6 h-6 text-white`} /></button>
                        </li>
                        <li className={`ml-4`}>
                            <button type="button"><IoNotificationsOutline className={`w-6 h-6 text-white`} /></button>
                        </li>
                        <li className={`ml-4`}>
                            <button type="button"><div className={`w-7 h-7 bg-white`}></div></button>
                        </li>
                    </div>
                </ul>
            </div>

            <div className={`bg-white`}>
                <ul className={`py-2 px-6 flex justify-between items-center max-w-8xl mx-auto relative`}>
                    <li onClick={() =>{setIsMenuOpen(!isMenuOpen);setIsPsudoMenuOpen(!isPsudoMenuOpen)}}>
                        <GiHamburgerMenu className={`w-5 h-5 text-black-dark`} />
                    </li>
                    <li className={`text-sm text-gray-500 ml-6`}>
                        <Link to="/home">Dashboard</Link>
                        <span className={`mx-2`}>/</span>
                        <span>Sales</span>
                    </li>
                    <li className={`flex-1 flex justify-end`}>
                        <button onClick={()=>{logout();window.location.pathname = "/login"}} className={`flex items-center min-w-max text-sm py-2 px-4 border rounded-lg text-gray-500`}>
                            <span>Settings</span>
                            <BiChevronDown className={`ml-5`} />
                        </button>
                    </li>
                </ul>
            </div>
        </header>


        <div>

            {/* {<Transition
                show={isPsudoMenuOpen}
                enter="duration-1000"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="duration-1000"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
                className={`transform bg-white`}
            >
                <div className={`w-96`}></div>    
            </Transition>}

            <Transition.Root show={isMenuOpen}>
                <Dialog onClose={setIsMenuOpen} as={Fragment} open={isMenuOpen}>
                    <Transition.Child
                        as={"div"}
                        enter="duration-1000"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="duration-1000"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                        className={`transform bg-white`}
                    >
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
                    </Transition.Child>
                </Dialog>
            </Transition.Root> */}

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