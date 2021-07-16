import React from "react";
import { Link } from "react-router-dom";

interface Props{}

const SignIn: React.FC<Props> = () => {
    return(
        <div className={`w-1/2 lg:w-full`}>
            this is signin page
        </div>
    )
};

SignIn.defaultProps = {
    
}

export default React.memo(SignIn);