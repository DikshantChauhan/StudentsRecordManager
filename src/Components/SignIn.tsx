import React from "react";
import { Link } from "react-router-dom";

interface Props{}

const SignIn: React.FC<Props> = () => {
    return(
        <>
           <h1>this is signin page</h1>   
           <h1 className={`mt-4`}><span>Already have a account..</span><Link to="/login" className={`text-green-700`}>Click here</Link> </h1>      
      
        </>
    )
};

SignIn.defaultProps = {
    
}

export default React.memo(SignIn);