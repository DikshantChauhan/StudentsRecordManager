import React from "react";
import { IoMdMail } from "react-icons/io";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
   className?: string;
   touched?: boolean;
   error?: string
   Icon?: React.ReactNode;
}

const Input: React.FC<Props> = ({className, Icon, touched, error, ...rest}) => {
    return(
        <div className={`pt-3 pb-8 ${className}`}>
            <label htmlFor="" className={`sr-only`}>Enter your Username</label>
            <div className={`flex relative items-center pb-2 border-b border-gray-200 focus:border-primary-main`}>
                <span>{Icon}</span>
                <input {...rest} className={`w-full ml-4 focus:outline-none`} />
                {touched && <div className={`absolute bottom-0 pt-2 transform translate-y-full text-red-600 left-9`}>{error}</div>}
            </div>
        </div>
    )
};

Input.defaultProps = {
    placeholder: "Username",
    Icon: <IoMdMail className={`w-5 h-5 text-primary-main`}></IoMdMail>,
}

export default React.memo(Input);