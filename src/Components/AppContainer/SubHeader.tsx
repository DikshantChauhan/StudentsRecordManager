import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";
import { uiAction } from "../../actions/ui.actions";
import { useAppSelector } from "../../store";

interface Props{}

const SubHeader: React.FC<Props> = () => {
    const currentState = useAppSelector((state) => state.ui.isSideBarOpen)
    return(
        <div className={`bg-white`}>
            <ul className={`py-2 px-6 flex justify-between items-center max-w-8xl mx-auto relative`}>
                <li>
                    <button onClick={() =>{uiAction.isSidebarOpen(!currentState)}}>
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