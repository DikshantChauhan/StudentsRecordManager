
import React from "react";

interface Props{}

const AuthHeroSection: React.FC<Props> = () => {
    return(
        <div className={`bg-black bg-authHero bg-no-repeat bg-3/8 lg:hidden bg-center text-white relative h-screen w-1/2`}></div>
    )
};

AuthHeroSection.defaultProps = {
    
}

export default React.memo(AuthHeroSection)