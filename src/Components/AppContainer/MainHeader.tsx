import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import logoImage from "../../img/logo.svg"
import Avatar from "../Avatar/Avatar";
import { logout } from "../Api/Auth";
import { useAppSelector } from "../../StateManagement/store";
import { meSelector } from "../../StateManagement/selector/auth.selector";
import image from "../../img/profile-12.jpg";


interface Props{}

const MainHeader: React.FC<Props> = () => {
    const [profileDropDwonIsOpen, setProfileDropDwonIsOpen] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    let history = useHistory()

    const user = useAppSelector(meSelector)

    const handelProfileDropdown = () =>{
        setProfileDropDwonIsOpen(true)
        setIsDisabled(true)
    }

    return(
        <div className={`bg-black-light`}>
            <ul className={`py-2 px-6 flex items-center max-w-8xl mx-auto relative`}>
                <li>
                    <Link to="/home" className={`flex items-center`}>
                        <img src={logoImage} alt="logo" className={`w-9 h-9`} />
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
                        <button onClick={handelProfileDropdown} disabled={isDisabled}>
                            <Avatar img={user?.profile_pic_url!} theme="small" variant="default"></Avatar>
                        </button>
                        <Transition.Root 
                            show={profileDropDwonIsOpen}
                            afterLeave={() =>{setIsDisabled(false)}}
                        >
                            <Dialog 
                                onClose={setProfileDropDwonIsOpen} 
                                open={profileDropDwonIsOpen}
                            >
                                <Transition.Child 
                                    enter="duration-300"
                                    enterFrom="opacity-0 translate-y-7"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="duration-300"
                                    leaveFrom="opacity-100 "
                                    leaveTo="opacity-0"
                                    as={Fragment}
                                >
                                    <div className="bg-white transform flex flex-col w-40 h-48 shadow-2xl rounded-lg top-16 right-4 fixed z-40 ">
                                        <button onClick={() =>{history.push("/profile")}} className={`py-3 px-1`}>Profile</button>
                                        <button onClick={()=>{logout();window.location.href = "/login"}} className={`border-t py-3 px-1`}>Log Out</button>
                                    </div>
                                </Transition.Child>
                            </Dialog>
                        </Transition.Root>
                    </li>
                </div>
            </ul>
        </div>
    )
};

MainHeader.defaultProps = {
    
}

export default React.memo(MainHeader);