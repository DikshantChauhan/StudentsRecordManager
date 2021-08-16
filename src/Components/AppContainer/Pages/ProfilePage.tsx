import { useFormik } from "formik";
import React from "react";
import * as yup from "yup"
import ButtonSolid from "../../Button/ButtonSolid";
import InputLabeled from "../../Input/InputLabeled";
import { useAppSelector } from "../../../StateManagement/store";
import { meSelector } from "../../../StateManagement/selector/auth.selector";
import { useDispatch } from "react-redux";
import { meUpdating } from "../../../StateManagement/actions/auth.action";
import image from "../../../img/default_avatar.jpg"

interface Props{}

const ProfilePage: React.FC<Props> = () => {
    const user = useAppSelector(meSelector)
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
            dispatch(meUpdating(userData))
        }
    })

    return(
        <div className={`bg-gray-200 mt-5 p-2 rounded-lg max-w-4xl mx-auto shadow-sm relative`}>
            <h5 className={`text-lg mt-1 mx-2 mb-16 font-medium text-gray-600`}>GENERAL INFORMATION</h5>
            <form onSubmit={formik.handleSubmit} className={`m-5`}>
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
                </div>{/* 
                <InputLabeled 
                    type="text"
                    placeholder="profile_pic_url"
                    required
                    {...formik.getFieldProps("profile_pic_url")}
                    touched={formik.touched["profile_pic_url"]}
                    error={formik.errors["profile_pic_url"]}
                    label="profile_pic_url"
                    className={`mx-4 mb-5`}
                /> */}
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
                { <ButtonSolid className={`mt-8`} theme="blue" type="submit">Done</ButtonSolid>}
            </form>
        </div>
    )
};

ProfilePage.defaultProps = {
    
}

export default React.memo(ProfilePage);