import React from "react";

interface Props{
    childrenn: string;
    theme: "blue" | "black" | "red";
    className?: string
}

const ButtonSolid: React.FC<Props> = ({childrenn, theme, className}) => {
    let themeClass: string;
    if(theme === "blue"){
        themeClass = "bg-primary-main"
    }
    else if(theme === "black"){
        themeClass = "bg-black-dark"
    }
    else if(theme === "red"){
        themeClass = "bg-red-600"
    }

    return(
        <button className={`px-6 py-2 text-white rounded-md min-w-max ${themeClass!} ${className}`}>
            {childrenn}  
        </button>
    )
};

ButtonSolid.defaultProps = {
    theme: "blue",
    childrenn: "Button"
};

export default React.memo(ButtonSolid);