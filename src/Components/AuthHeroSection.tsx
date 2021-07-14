import React from "react";

interface Props{}

const AuthHeroSection: React.FC<Props> = () => {
    return(
        <div className={`bg-black text-white relative h-screen w-1/2`}>
            <h1 className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>Hero image</h1>   
        </div>
    )
};

AuthHeroSection.defaultProps = {
    
}

export default React.memo(AuthHeroSection);