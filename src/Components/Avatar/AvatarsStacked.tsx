import React from "react";
import { useState } from "react";

interface Props{
    children: React.ReactNode[];
    theme: "large" | "medium" | "small" | "varySmall";
    maxAvatars: number;
    className?: string;
}

const AvatarsStacked: React.FC<Props> = ({children, theme, className, maxAvatars}) => {
    const [isHidden, setIsHidden] = useState(true)

    let themeClass: string;
    if(theme === "large"){
        themeClass = "py-2 px-3 text-lg rounded-2xl"
    }else if(theme === "medium"){
        themeClass = "py-1 px-3 rounded-xl"
    }else if(theme === "small"){
        themeClass = "px-0.5 py-1 text-sm rounded-lg"
    }else if(theme === "varySmall"){
        themeClass = "px-0.5 py-0.5 text-xs rounded-md"
    }
    
    return(
        <div className={`relative flex max-w-max items-center ${className}`}>
            {children.map((item: any, index: number) =>{
                let avatarHiddenClass;
                let buttonIsVisible = false;
                let translateX = ((-index*20)+"%")
                let counter;
                if(isHidden === true){
                    counter = "+ "+(children.length - maxAvatars)+" more "
                }else{
                    counter = "Minimize"
                }
                if(index === (maxAvatars-1)){
                    if(children.length >= (maxAvatars+1)){
                        buttonIsVisible = true
                    }
                }
                if(isHidden === true){
                    
                    if(index >= maxAvatars){
                        avatarHiddenClass = "hidden"
                    }
                }
                let buttonRight;
                if(isHidden === true){
                    buttonRight = ((26-maxAvatars)+"%")
                }else{
                    buttonRight = ((26-children.length)+"%")
                }
                return(
                    <>
                    <div className={`border-4 border-white rounded-full ${avatarHiddenClass}`} style={{transform: "translate("+translateX+", 0)"}}>{item}</div>
                    {buttonIsVisible && (<button onClick={() =>{setIsHidden(!isHidden)}} className={`absolute z-10 transform translate-x-full text-primary-main bg-white min-w-max ${themeClass}`} style={{right: buttonRight}}>{counter}</button>)}                    
                    </> 
                )
            })}
            
        </div>
    )
};

AvatarsStacked.defaultProps = {
    
}

export default React.memo(AvatarsStacked);