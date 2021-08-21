import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sidebarOpenAction, subMenuOpenAction } from "../../../StateManagement/actions/ui.actions";
import { isSidebarOpenSelector, isSubMenuOpenSelector } from "../../../StateManagement/selector/ui.selector";
import { useAppSelector } from "../../../StateManagement/store";

interface Props{
    children: JSX.Element[];
    className?: string
}

const LeftSideBar: React.FC<Props> = ({children, className}) => {
    const dispatch = useDispatch()
    const clickedSubMenuIndex = useAppSelector(isSubMenuOpenSelector)
    const history = useHistory()
    const state = useAppSelector(isSidebarOpenSelector)

    const handelClick = (index: number) =>{
        if(clickedSubMenuIndex === index){ 
            dispatch(subMenuOpenAction(-1))
            return 
        }else{
            dispatch(subMenuOpenAction(index))
        }
    }

    return(
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
                className="transform absolute h-nav lg:top-0 lg:h-auto z-30 overflow-y-auto lg:z-50 left-0 bottom-0 bg-gray-200 border-r-2 border-gray-300"
            >
            
        <nav className={`px-6 pt-5 ${className}`}>
            {children.map((item, index: number) =>{

                let isOpen = (clickedSubMenuIndex === index) ? 1 : 0
                let subMenuClasses = isOpen ? "opacity-100":"opacity-0"
                let marginBottom = (item.props.children===undefined) ? 0:item.props.children.length
                
                const Icon = item.props.icon
                return(
                <div key={`id${index}`} style={{marginBottom: `calc(3rem * ${marginBottom} * ${isOpen})`}} className={`relative transform transition-all mt-1 duration-300`}>
                    {item.props.children && 
                    <>
                        <button onClick={() =>{handelClick(index)}} type="button" className={`w-48 flex justify-between items-center bg-white hover:bg-gray-300 py-3 px-3 rounded-lg`}>
                            {Icon && <Icon className={`w-5 h-5 mr-3`}/>}
                            <span className={`flex-1 text-left text-sm tracking-wide`}>
                                {item?.props.title}
                            </span>
                            <BiChevronDown className={`duration-300 transform ${isOpen ? "rotate-180":"rotate-0"}`}/>
                        </button>
                        <div className={`${subMenuClasses} transition-all duration-200 absolute flex flex-col rounded-lg w-full bottom-0 transform translate-y-full left-0 right-0`}>
                            {item.props.children.map((item: any, index: number) => {
                                return(
                                <div key={`${index}${index}`} className="flex pl-8 py-3 items-center">
                                    <span className={`text-gray-700 hover:text-primary-main font-semibold`}>{item}</span>
                                </div>
                            )})}
                        </div>
                    </> 
                    }
                    {(item.props.children===undefined) && 
                        <button onClick={() =>{history.push(item.props.link)}} type="button" className={`transition-all w-48 flex justify-between items-center hover:bg-gray-300 hover:text-primary-main bg-white py-3 px-3 rounded-lg`}>
                            <BsDot className={`w-3 h-3`}></BsDot>
                            <span className={`flex-1 text-left text-sm tracking-wide`}>
                                {item.props.title}
                            </span>
                        </button>
                    }
                </div>
            )
            })}     
        </nav>
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
                <div onClick={() =>{dispatch(sidebarOpenAction(false))}} className="absolute z-40 left-0 top-0 bottom-0 right-0 bg-opacity-30 bg-black-dark hidden lg:block"></div>
            </Transition.Child>
        </Transition.Root>
    )
};

LeftSideBar.defaultProps = {
    
}

export default React.memo(LeftSideBar);