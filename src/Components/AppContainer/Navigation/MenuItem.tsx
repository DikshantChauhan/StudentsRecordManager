import React from "react";
import { BsDot } from "react-icons/bs";

interface Props{
    title: JSX.Element | string;
    children?: any[];
    icon: any
}

const MenuItem: React.FC<Props> = ({children, title, icon}) => {
    return(
        <>
           
        </>
    )
};

MenuItem.defaultProps = {
    
}

export default React.memo(MenuItem);