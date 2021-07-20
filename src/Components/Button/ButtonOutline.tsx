import React from "react";

interface Props{
    childrenn: string;
    theme: "blue" | "black" | "red";
    className?: string
}

const ButtonOutline: React.FC<Props> = ({childrenn, theme, className}) => {
    let themeClass: string;
    if(theme === "blue"){
        themeClass = "border-primary-main text-primary-main hover:bg-primary-main hover:text-white"
    }
    else if(theme === "black"){
        themeClass = "border-black-dark text-black-dark hover:text-white hover:bg-black-dark"
    }
    else if(theme === "red"){
        themeClass = "border-red-600 text-red-600 hover:text-white hover:bg-red-600"
    }

    return(
        <button className={`px-6 py-2 border rounded-md min-w-max ${themeClass!} ${className}`}>
            {childrenn}  
        </button>
    )
};

ButtonOutline.defaultProps = {
    theme: "blue",
    childrenn: "Button"
};

export default React.memo(ButtonOutline);