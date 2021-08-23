import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: string | JSX.Element;
    theme: "blue" | "black" | "red";
    className?: string
}

const ButtonSolid: React.FC<Props> = ({children, theme, className, ...rest}) => {
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
        <button className={`px-6 py-2 text-white rounded-md min-w-max ${themeClass!} ${className}`} {...rest}>
            {children}  
        </button>
    )
};

ButtonSolid.defaultProps = {
};

export default React.memo(ButtonSolid);