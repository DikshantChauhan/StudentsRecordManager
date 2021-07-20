import React from "react";

interface Props{
    progress: number;
    theme: "primary" | "secondary"
    className?: string;
}

const ProgressBar: React.FC<Props> = ({progress, className, theme}) => {
    let themeClass: string;
    if(theme === "primary"){
        themeClass = "bg-primary-main"
    }else if(theme === "secondary"){
        themeClass = "bg-black-dark"
    }

    if(progress <= 0){
        progress = 0
    }else if(progress >= 100){
        progress = 100
    }
    return(
        <div className={`rounded-lg bg-gray-300 ${className}`}>
           <div className={`rounded-lg pb-4 ${themeClass!}`} style={{width: (progress + "%")}}></div>         
        </div>
    )
};

ProgressBar.defaultProps = {
    theme: "primary",
}

export default React.memo(ProgressBar);