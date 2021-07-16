import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props{}

const LogIn: React.FC<Props> = () => {
    const [userData, setUserData] = useState({email: "", password: ""});
    const userDataHandeler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const [blur, setBlur] = useState({email: false, password: false})
    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) =>{
        setBlur({...blur, [e.target.name]: true})
    }

    let emailError = ""
    if(blur.email === true){
        if(userData.email === ""){
            emailError = "E-mail field can not be empty"
        }else if(!(userData.email.endsWith("@gmail.com"))){
            emailError = "E-mail must ends with @gmail.com"
        }
    }

    let passwordError = ""
    if(blur.password === true){
        if(userData.password === ""){
            passwordError = "Password field can not be empty"
        }else if(userData.password.length < 8){
            passwordError = "Password must contain at least 8 character"
        }
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return(
        <div className={`w-1/2 lg:w-full lg:static relative`}>
            <div className={`absolute max-w-xl transform top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}>
                <h1 className={`text-4xl mb-2`}>
                    <span>Log In to </span>
                    <span className={`font-semibold text-primary-main`}>CORK</span>
                </h1>
                <p className={`text-sm mb-12`}>
                    <span>New Here? </span>
                    <Link to="/signup" className={`text-primary-main underline`}>Create an account</Link>
                </p>
                <form onSubmit={(e) =>{
                        e.preventDefault()
                        if((emailError || passwordError)){
                            return
                        }
                        window.location.pathname = "/home"
                    }}>
                    {/* user name */}
                    <div className={`pt-3 pb-7 mb-6 relative`}>
                        <label htmlFor="" className={`sr-only`}>Enter your Username</label>
                        <input 
                            className={`w-full pl-9 pb-2 border-b border-gray-200 focus:outline-none focus:border-primary-main`} 
                            type="email" 
                            name="email"
                            autoComplete="email"
                            placeholder="Enter Your E-mail"
                            value={userData.email}
                            onChange={userDataHandeler}
                            onBlur={blurHandler}
                        />
                        <div className={`absolute bottom-0 text-red-600 left-9`}>{emailError}</div>
                    </div>
                    
                    {/* password */}
                    <div className={`pt-3 pb-7 mb-6 relative`}>
                        <label htmlFor="" className={`sr-only`}>Enter your password</label>
                        <input 
                            className={`w-full pl-9 pb-2 border-b border-gray-200 focus:outline-none focus:border-primary-main`} 
                            type={(isPasswordVisible ? "text":"password")} 
                            name="password"
                            autoComplete="current-password"
                            placeholder="Password" 
                            value={userData.password}
                            onChange={userDataHandeler}
                            onBlur={blurHandler}
                        />
                        <div className={`absolute bottom-0 text-red-600 left-9`}>{passwordError}</div>
                    </div>
                    <div className={`flex justify-between items-center vsm:flex-col vsm:items-start`}>
                        <div className={`flex text-sm items-baseline justify-start mr-40`}>
                            <p className={`mr-2 min-w-max vsm:mb-8`}>Show Password</p>
                            <label htmlFor="">
                                <input type="checkbox" onClick={() =>{setIsPasswordVisible(!isPasswordVisible)}}/>
                                <span></span>
                            </label>
                        </div>
                        <button 
                            className={`text-sm min-w-max text-white shadow-button bg-primary-main py-2 px-5 rounded-md`} 
                            type="submit"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

LogIn.defaultProps = {
    
}

export default React.memo(LogIn);