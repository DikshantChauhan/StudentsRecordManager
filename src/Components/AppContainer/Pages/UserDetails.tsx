import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { searchedUserIdAction, userFetchingAction } from "../../../StateManagement/actions/users.action";
import { searchedUserSelector, userFetchErrorSelector, userLoadingSelector } from "../../../StateManagement/selector/users.selector";
import { useAppSelector } from "../../../StateManagement/store";
import image from "../../../img/default_avatar.jpg";
import AvatarOnline from "../../Avatar/Avatar"
import { FaSpinner } from "react-icons/fa";

interface Props{}

const UserDetails: React.FC<Props> = () => {
    const params: any = useParams()
    const dispatch = useDispatch()
    dispatch(searchedUserIdAction(params.id))

    const user = useAppSelector(searchedUserSelector)
    const loading = useAppSelector(userLoadingSelector)
    const error = useAppSelector(userFetchErrorSelector)

    useEffect(() =>{
        dispatch(userFetchingAction(params.id))
    }, []) //eslint-disable-line

    return(
        <div className={`max-w-4xl mx-auto mt-5`}>
            <div className={`shadow-2xl mb-6 relative`}>
            <div className={`bg-gray-200 p-8 sm:px-3 rounded-lg shadow-sm mb-5 relative`}>
                {loading && 
                <div className={`flex items-center absolute top-2`}>
                    <FaSpinner className={`text-primary-main animate-spin mr-2`} />
                    <p>Loading...</p>
                </div>}
                {error && <h1 className={`text-red-600`}>{error}</h1>}
                {user && <div>
                    <div className={`flex py-8 mx-auto mb-2`}>
                        <AvatarOnline
                            img={user.profile_pic_url || image}
                            variant="default"
                            theme="small"
                            className={`mr-6`}
                        />
                        <div>
                            <h1 className={`font-semibold text-lg capitalize tracking-normal`}>
                                {user.first_name + user.middle_name + user.last_name}
                            </h1>
                            <p className={`max-w-md`}>
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>}
            </div>
            </div>
            <Link to="/users" className={`underline text-primary-main`}>
                Back to Users Page
            </Link>
        </div>
    )
};

UserDetails.defaultProps = {
    
}

export default React.memo(UserDetails);