import React from "react";
import { IconType } from "react-icons";

interface Props{
    title: JSX.Element | string;
    children?: JSX.Element[];
    icon?: IconType
    link?: string
}

const MenuItem: React.FC<Props> = ({children, title, icon, link}) => {
    return(
        <>
           
        </>
    )
};

MenuItem.defaultProps = {
    
}

export default React.memo(MenuItem);