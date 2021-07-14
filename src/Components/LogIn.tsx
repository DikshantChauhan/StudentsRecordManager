import React from "react";
import { Link } from "react-router-dom";

interface Props{}

const LogIn: React.FC<Props> = () => {
    return(
        <>
           <h1>this is log in page</h1>  
           <h1><Link to="/home" className={`text-green-700`}>go to home page</Link> </h1>      
 
        </>
    )
};

LogIn.defaultProps = {
    
}

export default React.memo(LogIn);