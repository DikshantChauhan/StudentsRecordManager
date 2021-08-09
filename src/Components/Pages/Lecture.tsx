import React from "react";
import { Link } from "react-router-dom";

interface Props{}

const Lecture: React.FC<Props> = () => {
    return(
        <div>
            <h1>this is lecture page</h1>
           <Link to="/home" className={`text-green-700`}>back to Home</Link>     
        </div>
    )
};

Lecture.defaultProps = {
    
}

export default React.memo(Lecture);