import { useFormik } from "formik";
import React from "react";
import * as yup from "yup"
import ButtonSolid from "../../Button/ButtonSolid";
import InputLabeled from "../../Input/InputLabeled";
import { useAppSelector } from "../../../StateManagement/store";
import { meSelector, meUpdateErrorSelector, meUpdateSuccessSelector, meUpdatingSelector } from "../../../StateManagement/selector/auth.selector";
import { useDispatch } from "react-redux";
import { meUpdating } from "../../../StateManagement/actions/auth.action";
import image from "../../../img/default_avatar.jpg"
import { Transition } from "@headlessui/react";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

interface Props{}

const ProfilePage: React.FC<Props> = () => {
    const user = useAppSelector(meSelector)
    const updateError = useAppSelector(meUpdateErrorSelector)
    const updateSuccess = useAppSelector(meUpdateSuccessSelector)
    const loading = useAppSelector(meUpdatingSelector)
    const [abc, setabc] = useState(false)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            "first_name": user?.first_name,
            "last_name": user?.last_name,
            "phone_number": user?.phone_number,
        },
        validationSchema: yup.object().shape({
            "first_name": yup.string().required().min(2),
            "last_name": yup.string().required(),
            "phone_number": yup.string().required().min(10),
        }),
        onSubmit: (userData) =>{
            const preUser = user
            const currUser = {...user, ...userData}
            const isUserChanged = JSON.stringify(preUser) === JSON.stringify(currUser)

            setabc(isUserChanged)
            setTimeout(() => {
                setabc(false)
            }, 1000);
            if(isUserChanged === false){
                dispatch(meUpdating(userData))
            }
        }
    })

    return(
        <div className={`bg-gray-200 mt-5 p-2 rounded-lg max-w-4xl mx-auto shadow-sm relative`}>
            <h5 className={`text-lg mt-1 mx-2 mb-16 font-medium text-gray-600`}>GENERAL INFORMATION</h5>
            <form onSubmit={formik.handleSubmit} className={`m-5 sm:m-0`}>
                <div className={`mx-4 mb-4 pt-36 relative`}>
                    <img className={`w-36 h-36 absolute top-0 left-0 rounded-full`} src={user?.profile_pic_url || image} onError={(e: any) => { e.target.onerror = null; e.target.src = image }} alt="Avatar" />
                    <p className={`text-primary-main my-2`}>Upload Picture</p>
                </div>
                <div className={`flex md:flex-wrap`}>
                    <InputLabeled 
                        type="text"
                        placeholder="First Name"
                        required
                        {...formik.getFieldProps("first_name")}
                        touched={formik.touched["first_name"]}
                        error={formik.errors["first_name"]}
                        label="First Name"
                        className={`mx-4 mb-5 w-full text-gray-700`}
                    />
                    <InputLabeled 
                        type="text"
                        placeholder="Last Name"
                        required
                        {...formik.getFieldProps("last_name")}
                        touched={formik.touched["last_name"]}
                        error={formik.errors["last_name"]}
                        label="Last Name"
                        className={`mx-4 mb-5 w-full text-gray-700`}
                    />
                </div>
                <InputLabeled 
                    type="text"
                    placeholder="Phone Number"
                    required
                    {...formik.getFieldProps("phone_number")}
                    touched={formik.touched["phone_number"]}
                    error={formik.errors["phone_number"]}
                    label="Phone Number"
                    className={`mx-4 mb-5 text-gray-700`}
                />
                {updateError && <p className={`text-red-500 mb-2`}>{updateError}</p>}
                { <ButtonSolid disabled={loading === true ? true:false} className={`mt-8 relative`} theme="blue" type="submit">
                    <div>
                        {
                            loading === true ? 
                            <div className={`absolute left-1/2 z-10 w-full h-full p-2 bg-primary-main rounded-lg top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                                <FaSpinner className={`animate-spin mx-auto text-2xl`} />
                            </div> : ""
                        }
                        <span>Done</span>
                    </div>
                </ButtonSolid>}
            </form>
            <Transition
                show={updateSuccess || false}
                enter="duration-100"
                enterFrom="translate-y-0 opacity-0"
                enterTo="-translate-y-full opacity-100"
                entered="-translate-y-full opacity-100"
                leave="duration-100"
                leaveFrom="-translate-y-full opacity-100"
                leaveTo="translate-x-0 opacity-0"
                className={`fixed left-1/2 bottom-0 lg:-translate-x-1/2 transform py-2 px-3 bg-gray-200 tracking-wide font-semibold rounded-lg border border-green-500 text-green-500`}
            >
                <h1>Edit Successfull</h1>
            </Transition>
            <Transition
                show={abc}
                enter="duration-100"
                enterFrom="translate-y-0 opacity-0"
                enterTo="-translate-y-full opacity-100"
                entered="-translate-y-full opacity-100"
                leave="duration-100"
                leaveFrom="-translate-y-full opacity-100"
                leaveTo="translate-x-0 opacity-0"
                className={`fixed left-1/2 bottom-0 lg:-translate-x-1/2 transform py-2 px-2 bg-gray-200 tracking-wide font-semibold rounded-lg border border-red-500 text-red-500`}
            >
                <h1>Nothing to Edit</h1>
            </Transition>
        </div>
    )
};

ProfilePage.defaultProps = {
    
}

export default React.memo(ProfilePage);