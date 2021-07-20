import React from "react";
import imgage from "../../img/profile-12.jpg"

interface Props{
    img: string;
    theme: "large" | "medium" | "small" | "varySmall";
    className?: string
}

const AvatarOffline: React.FC<Props> = ({img, theme, className}) => {
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
        <div className={`rounded-full max-w-max ${themeClass!} ${className}`}>
           <img className={`rounded-full w-full h-full`} src={img} alt="avatar" />
        </div>
    )
};

AvatarOffline.defaultProps = {
    img: imgage,
    theme: "medium"
}

export default React.memo(AvatarOffline);