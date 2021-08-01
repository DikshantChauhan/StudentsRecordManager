import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
   className?: string;
   touched?: boolean;
   error?: string
   label: string
}

const Input: React.FC<Props> = ({className, touched, label, error, ...rest}) => {
    return(
        <div className={`pb-8 ${className}`}>
            <label htmlFor="" className={`text-gray-400`}>{label}</label>
            <div className={`flex relative items-center mt-3`}>
                <input {...rest} className={`w-full p-2 border rounded-md focus:outline-none border-gray-400 focus:border-primary-main`} />
                {touched && <div className={`absolute bottom-0 left-0 transform translate-y-full text-red-600 p-2`}>{error}</div>}
            </div>
        </div>
    )
};

Input.defaultProps = {
    
}

export default React.memo(Input);

