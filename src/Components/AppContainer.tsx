import React from "react";

interface Props{}

const AppContainer: React.FC<Props> = () => {
    return(
        <>
           <h1>this is app container</h1>         
        </>
    )
};

AppContainer.defaultProps = {
    
}

export default React.memo(AppContainer);