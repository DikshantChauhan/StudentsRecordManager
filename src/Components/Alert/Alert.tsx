import React from "react";
import { useState } from "react";
import { MdCancel } from "react-icons/all"

interface Props{
    theme: "Primary" | "Info" | "Warning" | "Success" | "ErrorRed" | "ErrorBlack"
    children: string;
    className?: string;
}

const Alert: React.FC<Props> = ({children, className, theme}) => {
    let themeClass: string;
    if(theme === "ErrorBlack"){
        themeClass = "text-gray-600 bg-gray-300";
    }
    else if(theme === "ErrorRed"){
        themeClass = "text-red-500 bg-gray-100";
    }
    else if(theme === "Success"){
        themeClass = "text-green-600 bg-green-100";
    }
    else if(theme === "Warning"){
        themeClass = "text-yellow-600 bg-yellow-100 bg-opacity-40";
    }
    else if(theme === "Info"){
        themeClass = "text-blue-500 bg-blue-50";
    }
    else if(theme === "Primary"){
        themeClass = "text-primary-main bg-blue-900 bg-opacity-30";
    };

    const [isHidden, setIsHidden] = useState(false)

    return(
        <div className={`flex p-4 rounded-md justify-between font-medium ${className} ${themeClass!} ${isHidden ? "hidden":""}`}>
            <p className={`text-sm mr-4`}>{children}</p>
            <button type="button" onClick={() =>{setIsHidden(true)}}><MdCancel className={`w-6 h-6`}></MdCancel></button>        
        </div>
    )
};

Alert.defaultProps = {
}

export default React.memo(Alert);