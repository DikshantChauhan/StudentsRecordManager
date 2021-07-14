import React from "react";

interface Props{}

const SignIn: React.FC<Props> = () => {
    return(
        <>
           <h1>this is signin page</h1>         
        </>
    )
};

SignIn.defaultProps = {
    
}

export default React.memo(SignIn);