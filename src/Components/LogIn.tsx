import React from "react";

interface Props{}

const LogIn: React.FC<Props> = () => {
    return(
        <>
           <h1>this is log in page</h1>         
        </>
    )
};

LogIn.defaultProps = {
    
}

export default React.memo(LogIn);