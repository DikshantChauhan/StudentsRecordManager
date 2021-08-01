import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

interface Props{
    children: any[];
    className?: string
}

const LeftSideBar: React.FC<Props> = ({children, className}) => {
    console.log("rendering")
    return(
        <nav className={`px-6 pt-5 ${className}`}>
            {children.map((item, index: number) =>{

                const handelMenu = (e: any) =>{
                    let length = item.props.children.length
                    let myArr: any[] = Array.from(e.target.closest("button").parentElement.parentElement.children)
                    
                    if(myArr[index].classList.contains('subMenuIsOpen')){
                        myArr[index].classList.remove('subMenuIsOpen')
                    }else{
                        myArr[index].classList.add('subMenuIsOpen')
                    }

                    if(myArr[index].classList.contains('subMenuIsOpen')){
                        myArr[index].style.marginBottom = "calc(3rem * "+length+")"
                    }else{
                        myArr[index].style.marginBottom = "0px"
                    }

                    if(myArr[index].classList.contains('subMenuIsOpen')){
                        myArr[index].children[1].children[0].style.top = "100%"
                    }else{
                        myArr[index].children[1].children[0].style.top = "0"
                    }
                    
                    
                    
                    myArr.splice(index, 1)
                    myArr.map((item: any) =>{
                        item.classList.remove("subMenuIsOpen")
                        item.style.marginBottom = "0px"
                        item.children[1].children[0].style.top = "0"
                    })
                }
                
                return(
                <div className={`relative transform transition-all duration-300`}>
                    <button onClick={handelMenu} type="button" className={`w-48 flex justify-between items-center bg-white py-3 px-3 rounded-lg`}>
                        {item?.props.icon}
                        <span className={`flex-1 text-left text-sm tracking-wide`}>{item?.props.title}</span>
                        <BiChevronDown />
                    </button>
                    <div className={`absolute flex flex-col h-40 rounded-lg w-full bottom-0 transform translate-y-full left-0 right-0`}>
                        <div className={`absolute top-0 left-0 right-0 bottom-0 bg-gray-200 transform transition-all duration-300`}></div>
                        {item?.props.children.map((item: any, i: number) => {
                            
                            return(
                            <button className="flex pl-8 py-3 items-center text-gray-500 hover:text-primary-main">
                                <BsDot className={`w-3 h-3`}></BsDot>
                                {item}
                            </button>
                        )})}
                    </div>
                </div>
            )})}     
        </nav>
    )
};

LeftSideBar.defaultProps = {
    
}

export default React.memo(LeftSideBar);