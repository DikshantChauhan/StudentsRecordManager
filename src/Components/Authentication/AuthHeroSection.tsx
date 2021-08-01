
import React from "react";

interface Props{}

const AuthHeroSection: React.FC<Props> = () => {
    return(
        <div className={`bg-black-dark bg-authHero bg-no-repeat bg-3/8 lg:flex-none bg-center text-white relative h-screen flex-1`}></div>
    )
};

AuthHeroSection.defaultProps = {
    
}

export default React.memo(AuthHeroSection)