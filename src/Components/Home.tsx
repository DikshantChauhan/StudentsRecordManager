import React from "react";
import { Link } from "react-router-dom";

interface Props{}

const Home: React.FC<Props> = () => {
    return(
        <div>
            <h1>This is home page</h1>
            <h1><Link to="/lecture" className={`text-green-700`}>go to lecture recording page</Link> </h1>
        </div>
    )
};

Home.defaultProps = {
    
}

export default React.memo(Home)