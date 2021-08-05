import { useFormik } from "formik";
import React from "react";
import * as yup from "yup"
import ButtonSolid from "../Button/ButtonSolid";
import InputLabeled from "../Input/InputLabeled";
import { useAppSelector } from "../../store";

interface Props{}

const ProfilePage: React.FC<Props> = () => {
    const user = useAppSelector((state) => state.users.byId[state.auth.id!])

    const formik = useFormik({
        initialValues: {
            "First Name": user?.first_name,
            "Last Name": user?.last_name,
            "Phone Number": user?.phone_number,
        },
        validationSchema: yup.object().shape({
            "First Name": yup.string().required().min(2),
            "Last Name": yup.string().required(),
            "Phone Number": yup.string().required().min(10),
        }),
        onSubmit: (userData) =>{
            console.log(userData)
        }
    })

    return(
        <div className={`bg-white mx-2 p-2 mt-6 rounded-lg shadow-sm relative`}>
            <h5 className={`text-lg mt-1 mx-2 mb-16 font-medium text-gray-600`}>GENERAL INFORMATION</h5>
            <form onSubmit={formik.handleSubmit} className={`m-5`}>
                <div className={`mx-4 mb-4 pt-36 relative`}>
                    <img className={`w-36 h-36 absolute top-0 left-0 rounded-lg`} src={user?.profile_pic_url!} alt="Avatar" />
                    <p className={`text-primary-main my-2`}>Upload Picture</p>
                </div>
                <div className={`flex`}>
                    <InputLabeled 
                        type="text"
                        placeholder="First Name"
                        required
                        {...formik.getFieldProps("First Name")}
                        touched={formik.touched["First Name"]}
                        error={formik.errors["First Name"]}
                        label="First Name"
                        className={`w-1/2 mx-4 mb-5`}
                    />
                    <InputLabeled 
                        type="text"
                        placeholder="Last Name"
                        required
                        {...formik.getFieldProps("Last Name")}
                        touched={formik.touched["Last Name"]}
                        error={formik.errors["Last Name"]}
                        label="Last Name"
                        className={`w-1/2 mx-4 mb-5`}
                    />
                </div>
                <InputLabeled 
                    type="text"
                    placeholder="Phone Number"
                    required
                    {...formik.getFieldProps("Phone Number")}
                    touched={formik.touched["Phone Number"]}
                    error={formik.errors["Phone Number"]}
                    label="Phone Number"
                    className={`mx-4 mb-5`}
                />
                <ButtonSolid className={`mt-10`} theme="blue" type="submit">Done</ButtonSolid>
            </form>
        </div>
    )
};

ProfilePage.defaultProps = {
    
}

export default React.memo(ProfilePage);