import React from "react";
import { useState } from "react";
import { FaLock, FaSpinner, } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as yup from "yup"
import {  useFormik } from "formik"
import Input from "./Input/Input"
import { IoMdMail } from "react-icons/io";
import { Login } from "./Login";

interface Props{}

const LogIn: React.FC<Props> = () => {
    /* const [userData, setUserData] = useState({email: "", password: ""});
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
    }*/

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object().shape({
            email: yup.string().required().email(),
            password: yup.string().required().min(8)
        }),
        onSubmit: (data) =>{
            Login(data).then(() =>{
                window.location.pathname = "/home"
            })
        }
    });

    return(
        <div className={`lg:w-full min-w-5 flex-1 px-3 flex justify-center items-center`}>
            <div className={`max-w-md`}>
                <h1 className={`text-4xl mb-4`}>
                    <span>Log In to </span>
                    <span className={`font-semibold text-primary-main`}>CORK</span>
                </h1>
                <p className={`text-sm mb-12`}>
                    <span>New Here? </span>
                    <Link to="/signup" className={`text-primary-main underline`}>Create an account</Link>
                </p>

                <form onSubmit={formik.handleSubmit}>
                    <Input 
                        type="email"
                        autoComplete="email"
                        placeholder="Enter Your E-mail"
                        required
                        {...formik.getFieldProps("email")}
                        touched={formik.touched.email}
                        error={formik.errors.email}
                        className="mb-6"
                        Icon={IoMdMail}
                    />
                    <Input 
                        type={(isPasswordVisible ? "text":"password")}
                        autoComplete="current-password"
                        placeholder="password"
                        required
                        {...formik.getFieldProps("password")}
                        touched={formik.touched.password}
                        error={formik.errors.password}
                        className="mb-6"
                        Icon={FaLock}
                    />

                    <div className={`flex justify-between items-center vsm:flex-col vsm:items-start`}>
                        <div className={`flex text-sm items-baseline justify-start`}>
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
            {formik.isSubmitting && <div className={`fixed w-screen z-50 top-0 left-0 right-0 bottom-0 h-screen bg-black-dark bg-opacity-70 flex items-center justify-around`}>
                <FaSpinner className={`w-8 h-8 text-white animate-spin`}></FaSpinner> 
            </div>}
        </div>
    )
};

LogIn.defaultProps = {
    
};

export default React.memo(LogIn)