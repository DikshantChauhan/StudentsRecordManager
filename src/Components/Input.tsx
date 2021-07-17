import React, { Children } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
   className?: string;
   touched?: boolean;
   error?: string
}

const Input: React.FC<Props> = ({className, touched, error, children, ...rest}) => {
    return(
        <div className={`pt-3 pb-8 ${className}`}>
            <label htmlFor="" className={`sr-only`}>Enter your Username</label>
            <div className={`flex relative items-center pb-2 border-b border-gray-200 focus:border-primary-main`}>
                <span>{children}</span>
                <input {...rest} className={`w-full ml-4 focus:outline-none`} />
                {touched && <div className={`absolute bottom-0 pt-2 transform translate-y-full text-red-600 left-9`}>{error}</div>}
            </div>
        </div>
    )
};

Input.defaultProps = {
    
}

export default React.memo(Input);