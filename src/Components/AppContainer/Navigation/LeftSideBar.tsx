import React from "react";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { subMenuOpenAction } from "../../../StateManagement/actions/ui.actions";
import { isSubMenuOpenSelector } from "../../../StateManagement/selector/ui.selector";
import { useAppSelector } from "../../../StateManagement/store";

interface Props{
    children: any[];
    className?: string
}

const LeftSideBar: React.FC<Props> = ({children, className}) => {
    const dispatch = useDispatch()
    const clickedSubMenuIndex = useAppSelector(isSubMenuOpenSelector)

    return(
        <nav className={`px-6 pt-5 h-nav lg:h-screen ${className}`}>
            {children.map((item, index: number) =>{

                let isOpen = (clickedSubMenuIndex === index) ? true : false
                let subMenuClasses = isOpen ? "opacity-100":"opacity-0"
                
                const handelClick = () =>{
                    if(clickedSubMenuIndex === index){ 
                        dispatch(subMenuOpenAction(-1))
                        return 
                    }else{
                        dispatch(subMenuOpenAction(index))
                    }
                }

                return(
                <div className={`relative transform transition-all duration-300 ${isOpen ? "mb-40":"mb-0"}`}>
                    <button onClick={handelClick} type="button" className={`w-48 flex justify-between items-center bg-white py-3 px-3 rounded-lg`}>
                        {item?.props.icon}
                        <span className={`flex-1 text-left text-sm tracking-wide`}>{item?.props.title}</span>
                        <BiChevronDown />
                    </button>
                    {<div className={`${subMenuClasses} transition-all absolute flex flex-col rounded-lg w-full bottom-0 transform translate-y-full left-0 right-0`}>
                        {item?.props.children.map((item: any) => {
                            return(
                            <button className="flex pl-8 py-3 items-center text-gray-500 hover:text-primary-main">
                                <BsDot className={`w-3 h-3`}></BsDot>
                                {item}
                            </button>
                        )})}
                    </div>}
                </div>
            )})}     
        </nav>
    )
};

LeftSideBar.defaultProps = {
    
}

export default React.memo(LeftSideBar);