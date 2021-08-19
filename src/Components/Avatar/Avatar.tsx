import React from "react";
import { IoMdRadioButtonOff } from "react-icons/io";
import image from "../../img/default_avatar.jpg"

interface Props{
    img: string;
    theme: "large" | "medium" | "small" | "varySmall"
    variant: "online" | "offline" | "default"
    className?: string
}

const AvatarOnline: React.FC<Props> = ({img, theme, variant, className}) => {
    let variantClass;
    if(variant === "default"){
        variantClass = "hidden"
    }else if(variant === "offline"){
        variantClass = "bg-gray-300"
    }else if(variant === "online"){
        variantClass = "bg-green-500"
    }

    let themeClass: string;
    if(theme === "large"){
        themeClass = "min-w-1.25 h-20"
    }else if(theme === "medium"){
        themeClass = "min-w-1 h-16"
    }else if(theme === "small"){
        themeClass = "min-w-0.68 h-11"
    }else if(theme === "varySmall"){
        themeClass = "min-w-0.62 h-10"
    }

    return(
        <div className={`relative rounded-full ${themeClass!} ${className}`}>
           <img className={`rounded-full w-full h-full`} src={img || image} onError={(e: any) => { e.target.src = image }} alt="avatar" />
           <IoMdRadioButtonOff className={`w-1/3 h-1/3 absolute z-30 bottom-0 right-0  text-white rounded-full ${variantClass}`}/>         
        </div>
    )
};

AvatarOnline.defaultProps = {
}

export default React.memo(AvatarOnline);