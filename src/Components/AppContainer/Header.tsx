import React from "react";
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";


interface Props{
}

const Header: React.FC<Props> = () => {
    

    return(
        <header className={`sticky top-0 left-0 right-0 z-40`}>
            <MainHeader />
            <SubHeader />
        </header>
    )
};

Header.defaultProps = {
    
}

export default React.memo(Header);