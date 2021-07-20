import React from "react";

interface Props{
    title: JSX.Element | string;
    children?: any;
    icon: any
}

const MenuItem: React.FC<Props> = ({title, children, icon}) => {
    return(
        <></>
    )
};

MenuItem.defaultProps = {
    
}

export default React.memo(MenuItem);