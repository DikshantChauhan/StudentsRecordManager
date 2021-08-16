import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";
import { useAppSelector } from "../../StateManagement/store";
import { isSidebarOpenSelector } from "../../StateManagement/selector/ui.selector";
import { sidebarOpenAction } from "../../StateManagement/actions/ui.actions";
import { useDispatch } from "react-redux";

interface Props{}

const SubHeader: React.FC<Props> = () => {
    const currentState = useAppSelector(isSidebarOpenSelector);
    const dispatch = useDispatch()
    return(
        <div className={`bg-white shadow-button`}>
            <ul className={`py-2 px-6 flex justify-between items-center max-w-8xl mx-auto relative`}>
                <li>
                    <button onClick={() =>{dispatch(sidebarOpenAction(!currentState))}}>
                        <GiHamburgerMenu className={`w-5 h-5 text-black-dark`} />
                    </button>
                </li>
                <li className={`text-sm text-gray-500 ml-6`}>
                    <Link to="/home">Dashboard</Link>
                    <span className={`mx-2`}>/</span>
                    <span>Sales</span>
                </li>
                <li className={`flex-1 flex justify-end`}>
                    <button className={`flex items-center min-w-max text-sm py-2 px-4 border rounded-lg text-gray-500`}>
                        <span>Settings</span>
                        <BiChevronDown className={`ml-5`} />
                    </button>
                </li>
            </ul>
        </div>
    )
};

SubHeader.defaultProps = {
    
}

export default React.memo(SubHeader);