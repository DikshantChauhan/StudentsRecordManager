import React from "react";
import { IoMdRadioButtonOff } from "react-icons/io";

interface Props{
    img: string;
    theme: "large" | "medium" | "small" | "varySmall"
    className?: string
}

const AvatarOnline: React.FC<Props> = ({img, theme, className}) => {
    let themeClass: string;
    if(theme === "large"){
        themeClass = "w-20 h-20"
    }else if(theme === "medium"){
        themeClass = "w-16 h-16"
    }else if(theme === "small"){
        themeClass = "w-11 h-11"
    }else if(theme === "varySmall"){
        themeClass = "w-10 h-10"
    }

    return(
        <div className={`relative rounded-full max-w-max ${themeClass!} ${className}`}>
           <img className={`rounded-full w-full h-full`} src={img} alt="avatar" />
           <IoMdRadioButtonOff className={`w-1/3 h-1/3 absolute z-30 bottom-0 right-0 bg-green-600 text-white rounded-full`}/>         
        </div>
    )
};

AvatarOnline.defaultProps = {
}

export default React.memo(AvatarOnline);