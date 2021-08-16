import React from "react";
import { Link } from "react-router-dom";

interface Props{
}

const Home: React.FC<Props> = () => {
    return(
        <div className={`w-full mt-5`}>
            <h1>This is home page</h1><br /><br />
            <Link to="/lecture" className={`text-primary-main underline`}>
                Go to lecture recording page
            </Link><br /><br />
            <Link to="/groups" className={`text-primary-main underline`}>
                Go to groups page
            </Link><br /><br />
            <Link to="/users" className={`text-primary-main underline`}>
                Go to users page
            </Link><br /><br />
            <Link to="/profile" className={`text-primary-main underline`}>
                Go to profile page
            </Link>
        </div>
    )
};

Home.defaultProps = {
    
}

export default React.memo(Home)
