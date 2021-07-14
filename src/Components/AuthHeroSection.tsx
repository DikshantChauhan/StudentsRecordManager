import React from "react";

interface Props{}

const AuthHeroSection: React.FC<Props> = () => {
    return(
        <div className={`bg-black h-screen w-1/2`}>
                    
        </div>
    )
};

AuthHeroSection.defaultProps = {
    
}

export default React.memo(AuthHeroSection);