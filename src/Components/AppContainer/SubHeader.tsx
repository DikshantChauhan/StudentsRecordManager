import React from "react";
import { useHistory } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";
import { useAppSelector } from "../../StateManagement/store";
import { isSidebarOpenSelector } from "../../StateManagement/selector/ui.selector";
import { sidebarOpenAction } from "../../StateManagement/actions/ui.actions";
import { useDispatch } from "react-redux";
import { meSelector } from "../../StateManagement/selector/auth.selector";

interface Props{}

const SubHeader: React.FC<Props> = () => {
    const currentState = useAppSelector(isSidebarOpenSelector);
    const user = useAppSelector(meSelector)
    const dispatch = useDispatch()
    const history = useHistory()
    return(
        <div className={`bg-white shadow-button`}>
            <ul className={`py-2 px-6 flex justify-between items-center max-w-8xl mx-auto relative`}>
                <li>
                    <button onClick={() =>{dispatch(sidebarOpenAction(!currentState))}}>
                        <GiHamburgerMenu className={`w-5 h-5 text-black-dark`} />
                    </button>
                </li>
                <li className={`ml-6 vsm:hidden flex items-center`}>
                    <p>Hello</p>
                    <button onClick={() =>{history.push("/profile")}} className={`ml-2 text-primary-main font-medium text-lg`}>
                        {user?.first_name}
                    </button>
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