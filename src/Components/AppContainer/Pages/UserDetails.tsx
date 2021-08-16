import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { searchedUserIdAction, userFetchingAction, userLoadingAction } from "../../../StateManagement/actions/users.action";
import { searchedUserSelector, userFetchingfailSelector, userLoadingSelector } from "../../../StateManagement/selector/users.selector";
import { useAppSelector } from "../../../StateManagement/store";
import image from "../../../img/default_avatar.jpg";
import AvatarOnline from "../../Avatar/Avatar"

interface Props{}

const UserDetails: React.FC<Props> = () => {
    console.log("rendering")
    const params: any = useParams()
    const dispatch = useDispatch()
    dispatch(searchedUserIdAction(params.id))

    const user = useAppSelector(searchedUserSelector)
    const loading = useAppSelector(userLoadingSelector)
    const error = useAppSelector(userFetchingfailSelector)

    useEffect(() =>{
        dispatch(userLoadingAction(true))
        dispatch(userFetchingAction(params.id))
    }, [])

    if(loading || user || error){
        return(
            <div className={`max-w-4xl mx-auto mt-5`}>
                <div className={`bg-gray-200 p-2 rounded-lg shadow-sm mb-5`}>
                    {error && <h1 className={`text-red-600`}>{error}</h1>}
                    {(loading || user) && <div className={`flex p-8 mx-auto mb-2`}>
                        <AvatarOnline
                            img={loading ? image : (user.profile_pic_url || image)}
                            variant="default"
                            theme="small"
                            className={`mr-6`}
                        />
                        <div>
                            {loading ? <h1>____________</h1> : 
                                <h1 className={`font-semibold text-lg capitalize tracking-normal`}>
                                    {user.first_name + " " + user.last_name}
                                </h1>}
                            {loading ? <h1>_______________________</h1> : 
                                <p className={`max-w-md`}>
                                    {user.email}
                                </p>}
                        </div>
                    </div>}
                </div>
                <Link to="/users" className={`underline text-primary-main`}>
                    Back to Users Page
                </Link>
            </div>
        )
    }

    return (<></>)
};

UserDetails.defaultProps = {
    
}

export default React.memo(UserDetails);