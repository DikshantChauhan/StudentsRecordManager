import React from "react";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

interface Props{
    children: any[];
}

const LeftSideBar: React.FC<Props> = ({children}) => {
    return(
        <nav className={`border-r-2 border-gray-300 h-screen px-6 pt-5`}>
            {children.map((item, index: number) =>{

                const handelMenu = (e: any) =>{
                    let myArr: any[] = Array.from(e.target.closest("button").parentElement.parentElement.children)
                    {myArr[index].classList.contains('mb-40') ? myArr[index].classList.remove('mb-40'):myArr[index].classList.add('mb-40')}
                    myArr.splice(index, 1)
                    myArr.map((item: any) =>{item.classList.remove("mb-40")})
                }
                
                return(
                <div className={`relative transform transition-all duration-300`}>
                    <button onClick={handelMenu} type="button" className={`w-48 flex justify-between items-center bg-white py-3 px-3 rounded-lg`}>
                        {item?.props.icon}
                        <span className={`flex-1 text-left text-sm tracking-wide`}>{item?.props.title}</span>
                        <BiChevronDown />
                    </button>
                    <div className={`absolute flex flex-col h-40 rounded-lg w-full bg-black-dark bottom-0 transform translate-y-full left-0 right-0`}>
                        {item?.props.children}
                    </div>
                </div>
            )})}     
        </nav>
    )
};

LeftSideBar.defaultProps = {
    
}

export default React.memo(LeftSideBar);