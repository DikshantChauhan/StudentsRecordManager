import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup"
import Input from "./Input";
import {IoMdMail} from "react-icons/io"
import { FaLock, FaSpinner, FaUserAlt } from "react-icons/fa";

interface Props{}

const SignIn: React.FC<Props> = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            checkbox: false
        },
        validationSchema: yup.object().shape({
            username: yup.string().required().min(4),
            email: yup.string().required().email(),
            password: yup.string().required().min(8),
            checkbox: yup.boolean().required()
        }), 
        onSubmit: () =>{
            window.location.pathname = "/home"
        }
    })

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return(
        <div className={`lg:w-full min-w-5 flex-1 px-3 flex justify-center items-center`}>
            <div className={`max-w-md`}>
                <h1 className={`text-4xl mb-4`}>Get started with a free account</h1>
                <p className={`text-sm mb-12`}>
                    <span>Already have an account? </span>
                    <Link to="/login" className={`text-primary-main underline`}>Log in</Link>
                </p>

                <form onSubmit={formik.handleSubmit}>
                    <Input 
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        required
                        {...formik.getFieldProps("username")}
                        touched={formik.touched.username}
                        error={formik.errors.username}
                        className="mb-6"
                    >
                        <FaUserAlt className={`w-5 h-5 text-primary-main`}></FaUserAlt>
                    </Input>
                    <Input 
                        type="email"
                        placeholder="Enter your e-mail"
                        autoComplete="email"
                        required
                        {...formik.getFieldProps("email")}
                        touched={formik.touched.email}
                        error={formik.errors.email}
                        className="mb-6"
                    >
                        <IoMdMail className={`w-5 h-5 text-primary-main`}></IoMdMail>
                    </Input>
                    <Input 
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        required
                        {...formik.getFieldProps("password")}
                        touched={formik.touched.password}
                        error={formik.errors.password}
                        className="mb-6"
                    >
                        <FaLock className={`w-5 h-5 text-primary-main`}></FaLock>
                    </Input>

                    <div className={`flex items-center flex-row-reverse justify-end mb-8`}>
                        <p className={`ml-2`}><span>I agree to the</span> <span className={`text-primary-main underline`}>terms and conditions</span></p>
                        <input 
                            type="checkbox"
                            required
                            {...formik.getFieldProps("checkbox")}
                        />                    
                    </div>

                    <div className={`flex justify-between items-center vsm:flex-col vsm:items-start`}>
                        <div className={`flex text-sm items-baseline justify-start`}>
                            <p className={`mr-2 min-w-max vsm:mb-8`}>Show Password</p>
                            <label htmlFor="">
                                <input onClick={() =>{setIsPasswordVisible(!isPasswordVisible)}}/>
                                <span></span>
                            </label>
                        </div>
                        <button 
                            className={`text-sm min-w-max text-white shadow-button bg-primary-main py-2 px-5 rounded-md`} 
                            type="submit"
                        >
                            Get Started!
                        </button>
                    </div>
                </form>
            </div>
            <div className={`fixed w-screen z-50 top-0 left-0 right-0 bottom-0 h-screen bg-black bg-opacity-70 flex items-center justify-around ${formik.isSubmitting ? "block":"hidden"}`}>
                <FaSpinner className={`w-8 h-8 text-white animate-spin`}></FaSpinner> 
            </div>
        </div>
    )
};

SignIn.defaultProps = {
    
}

export default React.memo(SignIn);